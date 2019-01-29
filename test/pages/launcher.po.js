const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , List=require('../pages/list.po');

class Launcher {
    constructor(){
        let url=browser.getUrl();

        if(url.indexOf('/list')>0){
            commons.wait(patterns.list.container);
        }else if(url.indexOf('/view')>0){
            commons.wait(patterns.view.container);
        }else{
            commons.wait(patterns.launcher.base);
        }

        return this;
    }

    open(){
        commons.click(patterns.launcher.menu);
        commons.wait(patterns.launcher.container);
        return this;
    }

    close(){
        commons.click(patterns.launcher.close);
        commons.wait(patterns.launcher.container,true);
    }

    exists(module){
        commons.wait(patterns.launcher.container);

        return commons.select(
            patterns.launcher.item.format(module)).value!==null;
    }

    item(module){
        commons.wait(patterns.launcher.container);
        commons.click(patterns.launcher.item.format(module));

        return new List();
    }

    static app(module){
        return new Launcher().open().item(module);
    }
}

module.exports=Launcher;

