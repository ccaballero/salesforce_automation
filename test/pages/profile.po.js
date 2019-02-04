const Commons=require('../core/commons')
  , patterns=require('../core/patterns').profile;

class Profile {
    contructor(){
        Commons.wait(patterns.container);

        return this;
    }

    logout(){
        Commons.click(patterns.logout);
    }

    static profile(){
        Commons.click(patterns.menu);

        return new Profile();
    }
}

module.exports=Profile;

