const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Modal=require('../PageObjects/Modal.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('006.F005.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F005 - Formulario «Crear Producto» se cierra al accionar el '+
        'botón «Cerrar esta ventana (X)»',()=>{
        Launcher.app('Products')
            .new()
            .close();

        expect(Common.select(Modal.patterns.container,false)).to.equal(null);
    });

    after(()=>{
        Profile.profile().logout();
    });
});

