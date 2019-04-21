const Common=require('../Utils/Common');

class Profile {
    constructor(){
        Common.wait(Profile.patterns.container);

        return this;
    }

    logout(){
        Common.click(Profile.patterns.logout);
    }

    static profile(){
        Common.click(Profile.patterns.menu);

        return new Profile();
    }
}

Profile.patterns={
    container:'div.userProfilePanel.active'
  , menu:'button.branding-userProfile-button'
  , logout:'a.logout'
};

module.exports=Profile;

