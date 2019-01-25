const expect=require('chai').expect
  , config=require('../config')
  , patterns=require('../core/patterns')
  , Home=require('../pages/home.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
  , credentials=config.credentials.administrator;

describe('products.js',()=>{
    var list;

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
        list=Home.appLauncher('Products');
    });

    it('product new => close',()=>{
        list
            .new()
            .close();

        expect(browser.element(patterns.list.modal).value).to.be.null;
    });

    it('product new => cancel',()=>{
        list
            .new()
            .close();

        expect(browser.element(patterns.list.modal).value).to.be.null;
    });

    it('product new => save',()=>{
        list
            .new()
            .fill({
                name:'Test Product'
              , active:true
              , code:'00001'
              , family:'Ciencia Ficción'
              , quantity:true
              , revenue:true
              , year:2018
              , description:'Test Product Automation'
            })
            .save();

//        browser.element(patterns.messages.successful.format('success'))
//            .should.be.an('object');
//        browser.element(patterns.messages.successful.format(' was created.'))
//            .should.be.an('object');
    });
});

