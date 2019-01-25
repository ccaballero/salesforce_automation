const commons=require('../core/commons')
  , patterns=require('../core/patterns').home
  , List=require('../pages/list.po');

class Home {
    static appLauncher(item){
        commons.wait(patterns.container);
        commons.click(patterns.applauncher.menu);
        commons.wait(patterns.applauncher.container);
        commons.click(patterns.applauncher.item.format(item));

        return new List();
    }
}

module.exports=Home;

