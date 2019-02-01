const commons=require('../core/commons')
  , patterns=require('../core/patterns').profile;

class Profile {
    contructor(){
        commons.wait(patters.container);

        return this;
    }

    logout(){
        commons.click(patterns.logout);
    }

    static profile(){
        commons.click(patterns.menu);
        return new Profile();
    }
}

module.exports=Profile;

