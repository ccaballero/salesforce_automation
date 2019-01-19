require('should');

const config=require('../config')
  , commons=require('../core/commons')
  , login=require('../pages/login.po')
  , home=require('../pages/home.po')
  , credentials=config.credentials.administrator;

describe('login.salesforce.com',()=>{
    it('testing login',()=>{
        browser.url(config.url.login);

        login.loginAs(credentials.username,credentials.password);
        home.appLauncher('Productos');

        browser.pause(2000);
    });
});

