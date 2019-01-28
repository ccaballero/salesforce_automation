const expect=require('chai').expect
  , credentials=require('../config').credentials.administrator
  , commons=require('../core/commons')
  , patterns=require('../core/patterns').launcher
  , Login=require('../pages/login.po');

describe('login.js',()=>{
    it('login form',()=>{
        Login.loginAs(credentials.username,credentials.password);

        commons.wait(patterns.base);
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
});

