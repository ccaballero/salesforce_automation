const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , View=require('../PageObjects/View.po')
  , credentials=config.credentials.administrator;

describe('008.F006.js',()=>{
    var name='products.new.functional'
      , active=true
      , code='FUNCTIONAL'
      , family='--None--'
      , quantity=true
      , revenue=true
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F006 - Mensaje «Se creó Producto "<Nombre de Producto>"» se '+
        'muestra después de registrado un producto',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:name
                  , active:active
                  , code:code
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

