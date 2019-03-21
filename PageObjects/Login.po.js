const config=require('../config')
  , Commons=require('../core/commons')
  , patterns=require('../core/patterns').login;

class Login {
    constructor(username,password){
        Commons.setUrl(config.url.login);
        Commons.wait(patterns.container);

        this.username=username;
        this.password=password;

        return this;
    }

    set username(username){
        Commons.setValue(patterns.form.username,username);

        return this;
    }

    get username(){
        return Commons.getValue(patterns.form.username);
    }

    set password(password){
        Commons.setValue(patterns.form.password,password);

        return this;
    }

    get password(){
        return Commons.getValue(patterns.form.password);
    }

    submit(){
        Commons.click(patterns.form.submit);

        return this;
    }

    static loginAs(username,password){
        return new Login(username,password).submit();
    }
}

module.exports=Login;

