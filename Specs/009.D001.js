const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('009.D001.js',()=>{
    var active=true
      , code='DOMAIN'
      , family='--None--'
      , quantity=true
      , revenue=true
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('D001 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Nombre del producto» tiene 0 caracteres',()=>{
        let modal_new=Launcher.app('Products').new();

        modal_new
            .fill({
                name:''
              , active:active
              , code:code
              , family:family
              , quantity:quantity
              , revenue:revenue
              , description:description
            })
            .save(false);

        expect(modal_new.messageValidation())
            .to.equal('Review the errors on this page.');
        expect(modal_new.errorsList())
            .to.equal('These required fields must be completed: Product Name');

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

