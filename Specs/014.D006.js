const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , View=require('../PageObjects/View.po')
  , credentials=config.credentials.administrator;

describe('014.D006.js',()=>{
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

    it('D006 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Código del producto» tiene 255 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _code=code.substring(0,5).repeat(51)
          , message=modal_new
                .fill({
                    name:name
                  , active:active
                  , code:_code
                  , family:family
                  , quantity:quantity
                  , revenue:revenue
                  , description:description
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+name+'" was created.');

        message.close();

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

