const commons=require('../core/commons');

class Home {
    static appLauncher(item){
        commons.wait('#oneHeader');
        commons.click('button.salesforceIdentityAppLauncherHeader');
        commons.wait('div.modal-container');
        commons.click('li.oneAppLauncherItem>a[title="'+item+'"]');
    }
};

module.exports=Home;

