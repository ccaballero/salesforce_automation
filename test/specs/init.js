const expect=require('chai').expect
  , config=require('../config');

describe('init.js',()=>{
    it('web title',()=>{
        browser.url(config.url.login);

        expect(browser.getTitle()).to.be.equal('Login | Salesforce');
    });
});

