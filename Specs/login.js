const expect=require('chai').expect
  , credentials=require('../config').credentials.administrator
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po');

describe('login.js',()=>{
    it('login credentials',()=>{
        Login.loginAs(credentials.username,credentials.password);

        // wait for main container loads
        new Launcher();

        expect(Common.getTitle()).to.be.equal('Home | Salesforce');

        expect(Common.getCookie('sfdc-stream')).to.be.a('string');
        expect(Common.getCookie('sid_Client')).to.be.a('string');
        expect(Common.getCookie('sid')).to.be.a('string');
        expect(Common.getCookie('BrowserId')).to.be.a('string');
        expect(Common.getCookie('clientSrc')).to.be.a('string');
        expect(Common.getCookie('inst')).to.be.a('string');
        expect(Common.getCookie('force-proxy-stream')).to.be.a('string');
        expect(Common.getCookie('force-stream')).to.be.a('string');
    });

    after(()=>{
        Profile.profile().logout();
    });
});

