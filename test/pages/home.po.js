const commons=require('../core/commons');

class Home {
    static appLauncher(item){
        commons.wait('.oneWorkspace');
        commons.click('button.salesforceIdentityAppLauncherHeader');
        commons.wait('div.modal-container');
        commons.click('a[title="'+item+'"]');
    }
};

module.exports=Home;

