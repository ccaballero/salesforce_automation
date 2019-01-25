const expect=require('chai').expect;

const config=require('../config')
  , commons=require('../core/commons')
  , login=require('../pages/login.po')
  , credentials=config.credentials.administrator;

describe('login.js',()=>{
    it('login form',()=>{
        login.loginAs(credentials.username,credentials.password);

        commons.wait('div.oneWorkspace');
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

