require('should');

describe('login.salesforce.com',()=>{
    it('web title',()=>{
        browser.url('https://login.salesforce.com');

        browser.getTitle().should.be.eql('Login | Salesforce');
    });
});

