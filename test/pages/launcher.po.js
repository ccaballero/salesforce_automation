const Commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , List=require('./list.po');

class Launcher {
    constructor(){
        let url=Commons.getUrl();

        if(url.indexOf('/list')>0){
            Commons.wait(patterns.list.container);
        }else if(url.indexOf('/view')>0){
            Commons.wait(patterns.view.container);
        }else{
            Commons.wait(patterns.setup.container);
        }

        return this;
    }

    open(){
        Commons.click(patterns.launcher.menu);
        Commons.wait(patterns.launcher.container);

        return this;
    }

    close(){
        Commons.click(patterns.launcher.close);
        Commons.wait(patterns.launcher.container,true);
    }

    exists(module){
        Commons.wait(patterns.launcher.container);

        return Commons.select(patterns.launcher.item.format(module))!==null;
    }

    item(module){
        Commons.wait(patterns.launcher.container);
        Commons.click(patterns.launcher.item.format(module));

        return new List();
    }

    static app(module){
        return new Launcher().open().item(module);
    }
}

module.exports=Launcher;

