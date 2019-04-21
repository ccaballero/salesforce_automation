const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('018.D010.js',()=>{
    var description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('D010 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 4001 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _description=description.substring(0,5).repeat(800)+'_';

        modal_new.description=_description;

        expect(modal_new.description.length).to.equal(4000);
        expect(modal_new.description).to.equal(_description.substring(0,4000));

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

