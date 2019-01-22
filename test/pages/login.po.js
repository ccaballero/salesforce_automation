const config=require('../config')
  , commons=require('../core/commons');

class Login {
    constructor(){
        browser.url(config.url.login);
        commons.wait('#theloginform');
    }

    setUsername(username){
        commons.setValue('#username',username);
    }

    setPassword(password){
        commons.setValue('#password',password);
    }

    submit(){
        commons.click('#Login');
    }

    static loginAs(username,password){
        let login=new Login();
        login.setUsername(username);
        login.setPassword(password);
        login.submit();
    }
};

module.exports=Login;

