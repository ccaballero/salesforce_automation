require('should');

const config=require('../config')
  , commons=require('../core/commons')
  , login=require('../pages/login.po')
  , home=require('../pages/home.po')
  , credentials=config.credentials.administrator;

describe('login.salesforce.com',()=>{
    it('login form',()=>{
        login.loginAs(credentials.username,credentials.password);

        commons.wait('div.oneWorkspace');
        browser.getTitle().should.be.eql('Inicio | Salesforce');

        browser.getCookie('sfdc-stream').value.should.be.a.String();
        browser.getCookie('sid_Client').value.should.be.a.String();
        browser.getCookie('sid').value.should.be.a.String();
        browser.getCookie('BrowserId').value.should.be.a.String();
        browser.getCookie('clientSrc').value.should.be.a.String();
        browser.getCookie('inst').value.should.be.a.String();
        browser.getCookie('force-proxy-stream').value.should.be.a.String();
        browser.getCookie('force-stream').value.should.be.a.String();
    });
});

