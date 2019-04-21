const config=require('../config')
  , Common=require('../Utils/Common');

class Login {
    constructor(username,password){
        Common.setUrl(config.url.login);
        Common.wait(Login.patterns.container);

        this.username=username;
        this.password=password;

        return this;
    }

    set username(username){
        Common.setValue(Login.patterns.username,username);

        return this;
    }

    get username(){
        return Common.getValue(Login.patterns.username);
    }

    set password(password){
        Common.setValue(Login.patterns.password,password);

        return this;
    }

    get password(){
        return Common.getValue(Login.patterns.password);
    }

    submit(){
        Common.click(Login.patterns.submit);

        return this;
    }

    static loginAs(username,password){
        return new Login(username,password).submit();
    }
}

Login.patterns={
    container:'#theloginform'
  , username:'#username'
  , password:'#password'
  , submit:'#Login'
};

module.exports=Login;

