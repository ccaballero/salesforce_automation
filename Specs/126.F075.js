const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('128.F075.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F075 - En el iniciador de aplicación de salesforce puede verse el '+
        'enlace a «Listas de precios»',()=>{
        let launcher=new Launcher().open();

        expect(launcher.exists('Price Books')).to.equal(true);

        launcher.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

