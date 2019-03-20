const expect=require('chai').expect
  , credentials=require('../config').credentials.administrator
  , Commons=require('../core/commons')
  , Login=require('../pages/login.po')
  , Launcher=require('../pages/launcher.po')
  , Profile=require('../pages/profile.po');

describe('login.js',()=>{
    it('login credentials',()=>{
        Login.loginAs(credentials.username,credentials.password);

        new Launcher();
        expect(Commons.getTitle()).to.be.equal('Home | Salesforce');

        expect(Commons.getCookie('sfdc-stream')).to.be.a('string');
        expect(Commons.getCookie('sid_Client')).to.be.a('string');
        expect(Commons.getCookie('sid')).to.be.a('string');
        expect(Commons.getCookie('BrowserId')).to.be.a('string');
        expect(Commons.getCookie('clientSrc')).to.be.a('string');
        expect(Commons.getCookie('inst')).to.be.a('string');
        expect(Commons.getCookie('force-proxy-stream')).to.be.a('string');
        expect(Commons.getCookie('force-stream')).to.be.a('string');
    });

    after(()=>{
        Profile.profile().logout();
    });
});

