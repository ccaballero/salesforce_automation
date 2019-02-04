const expect=require('chai').expect
  , config=require('../config')
  , Commons=require('../core/commons');

describe('init.js',()=>{
    it('web title',()=>{
        Commons.setUrl(config.url.login);

        expect(Commons.getTitle()).to.be.equal('Login | Salesforce');
    });
});

