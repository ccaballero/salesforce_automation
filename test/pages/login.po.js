const config=require('../config')
  , commons=require('../core/commons')
  , patterns=require('../core/patterns').login;

class Login {
    constructor(username,password){
        browser.url(config.url.login);
        commons.wait(patterns.container);

        this.username=username;
        this.password=password;

        return this;
    }

    set username(username){
        commons.setValue(patterns.form.username,username);

        return this;
    }

    get username(){
        return commons.getValue(patterns.form.username);
    }

    set password(password){
        commons.setValue(patterns.form.password,password);

        return this;
    }

    get password(){
        return commons.getValue(patterns.form.password);
    }

    submit(){
        commons.click(patterns.form.submit);

        return this;
    }

    static loginAs(username,password){
        return new Login(username,password).submit();
    }
}

module.exports=Login;

