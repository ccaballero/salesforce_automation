require('should');

const config=require('../config')
  , commons=require('../core/commons')
  , Home=require('../pages/home.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
  , credentials=config.credentials.administrator;

describe('lightning.force.com',()=>{
    it('products list',()=>{
        Login.loginAs(credentials.username,credentials.password);
        Home.appLauncher('Productos');

        let list_products=new List();
        list_products.clickNew()
            .submitNew({
                name:'Test Product'
              , active:true
              , code:'00001'
              , family:null
              , year:2018
              , description:'Test Product Automation'
            });

        browser.pause(24000);
    });
});

