const expect=require('chai').expect
  , credentials=require('../config').credentials.administrator
  , commons=require('../core/commons')
  , Login=require('../pages/login.po')
  , Launcher=require('../pages/launcher.po')
  , Profile=require('../pages/profile.po');

describe('login.js',()=>{
    it('login credentials',()=>{
        Login.loginAs(credentials.username,credentials.password);

        new Launcher();
        expect(browser.getTitle()).to.be.equal('Home | Salesforce');

        expect(browser.getCookie('sfdc-stream').value).to.be.a('string');
        expect(browser.getCookie('sid_Client').value).to.be.a('string');
        expect(browser.getCookie('sid').value).to.be.a('string');
        expect(browser.getCookie('BrowserId').value).to.be.a('string');
        expect(browser.getCookie('clientSrc').value).to.be.a('string');
        expect(browser.getCookie('inst').value).to.be.a('string');
        expect(browser.getCookie('force-proxy-stream').value).to.be.a('string');
        expect(browser.getCookie('force-stream').value).to.be.a('string');
    });

    after(()=>{
        Profile.profile().logout();
    });
});

