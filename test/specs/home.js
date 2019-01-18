require('should');

describe('login.salesforce.com',()=>{
    it('testing title',()=>{
        browser.url('https://login.salesforce.com');

        browser.getTitle().should.be.eql('Iniciar sesión | Salesforce');
    });
});

