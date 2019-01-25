const expect=require('chai').expect;

describe('home.js',()=>{
    it('web title',()=>{
        browser.url('https://login.salesforce.com');

        expect(browser.getTitle()).to.be.equal('Login | Salesforce');
    });
});

