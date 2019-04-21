const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Modal=require('../PageObjects/Modal.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('005.F004.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F004 - Formulario «Crear Producto» se cierra al accionar el botón '+
       '«Cancelar»',()=>{
        Launcher.app('Products')
            .new()
            .cancel();

        expect(Common.select(Modal.patterns.container,false)).to.equal(null);
    });

    after(()=>{
        Profile.profile().logout();
    });
});

