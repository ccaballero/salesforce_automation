const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , View=require('../PageObjects/View.po')
  , credentials=config.credentials.administrator;

describe('011.D003.js',()=>{
    var name='products.new.domain'
      , active=true
      , code='DOMAIN'
      , family='--None--'
      , quantity=true
      , revenue=true
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('D003 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Nombre del producto» tiene 255 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _name=name.substring(0,5).repeat(51)
          , message=modal_new
                .fill({
                    name:_name
                  , active:active
                  , code:code
                  , family:family
                  , quantity:quantity
                  , revenue:revenue
                  , description:description
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+_name+'" was created.');

        message.close(true);

        new View()
            .details()
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

