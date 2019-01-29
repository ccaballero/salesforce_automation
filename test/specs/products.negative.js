const expect=require('chai').expect
  , config=require('../config')
  , commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Launcher=require('../pages/launcher.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
  , credentials=config.credentials.administrator;

describe('products.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('N001 - Clic en el botón «Guardar» para un formulario vacío '+
        'envía el mensaje «Revise los errores de esta página»',()=>{
        let modal_new=Launcher.app('Products').new();

        modal_new
            .fill({})
            .save(false);

        expect(modal_new.messagevalidation())
            .to.equal('Review the errors on this page.');

        modal_new.close();
    });
});

