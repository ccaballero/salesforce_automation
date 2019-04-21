const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('007.N001.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('N001 - Clic en el botón «Guardar» para un formulario vacío '+
        'envía el mensaje «Revise los errores de esta página»',()=>{
        let modal_new=Launcher.app('Products').new();

        modal_new
            .fill({})
            .save(false);

        expect(modal_new.messageValidation())
            .to.equal('Review the errors on this page.');

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

