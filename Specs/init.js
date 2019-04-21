const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common');

describe('init.js',()=>{
    it('web title',()=>{
        Common.setUrl(config.url.login);

        expect(Common.getTitle()).to.be.equal('Login | Salesforce');
    });
});

