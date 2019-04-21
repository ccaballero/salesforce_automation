const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Modal=require('../PageObjects/Modal.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('002.F002.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F002 - Clic en el botón «Nuevo», lanza el formulario de creación '+
        'de producto',()=>{
        let modal_new=Launcher.app('Products')
            .new();

        expect(Common.select(Modal.patterns.container)).to.not.equal(null);

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

