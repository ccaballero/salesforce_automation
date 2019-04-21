const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('015.D007.js',()=>{
    var code='DOMAIN';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('D007 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Código del producto» tiene 256 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _code=code.substring(0,5).repeat(51)+'_';

        modal_new.code=_code;

        expect(modal_new.code.length).to.equal(255);
        expect(modal_new.code).to.equal(_code.substring(0,255));

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

