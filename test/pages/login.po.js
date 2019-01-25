const config=require('../config')
  , commons=require('../core/commons')
  , patterns=require('../core/patterns').login;

class Login {
    constructor(){
        browser.url(config.url.login);
        commons.wait(patterns.container);
    }

    setUsername(username){
        commons.setValue(patterns.form.username,username);
    }

    setPassword(password){
        commons.setValue(patterns.form.password,password);
    }

    submit(){
        commons.click(patterns.form.submit);
    }

    static loginAs(username,password){
        let login=new Login();
        login.setUsername(username);
        login.setPassword(password);
        login.submit();
    }
}

module.exports=Login;

