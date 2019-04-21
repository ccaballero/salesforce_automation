const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('012.D004.js',()=>{
    var name='products.new.domain';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('D004 - Formulario «Crear Producto» no realiza el registro, cuando el '+
        'campo «Nombre del producto» tiene 256 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _name=name.substring(0,5).repeat(51)+'_';

        modal_new.name=_name;

        expect(modal_new.name.length).to.equal(255);
        expect(modal_new.name).to.equal(_name.substring(0,255));

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

