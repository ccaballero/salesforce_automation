const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('001.F001.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F001 - Iniciador de Aplicación de salesforce muestra el enlace a '+
       '«Productos»',()=>{
        let launcher=new Launcher().open();

        expect(launcher.exists('Products')).to.equal(true);

        launcher.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

