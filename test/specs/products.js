require('should');

const config=require('../config')
  , commons=require('../core/commons')
  , Home=require('../pages/home.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
  , credentials=config.credentials.administrator
  , xpath={
        message:'//span[contains(text(),"{0}")]'
    };

describe('lightning.force.com',()=>{
    it('products create',()=>{
        Login.loginAs(credentials.username,credentials.password);
        Home.appLauncher('Products');

        new List()
            .clickNew()
            .submitNew({
                name:'Test Product'
              , active:true
              , code:'00001'
              , family:'Ciencia Ficción'
              , quantity:true
              , revenue:true
              , year:2018
              , description:'Test Product Automation'
            });

        browser.pause(3000);
        browser.element(xpath.message.format('success')).should.be.an.Object();
        browser.element(
            xpath.message.format(' was created.'))
            .should.be.an.Object();
    });
});

