const commons=require('../core/commons')
  , patterns=require('../core/patterns').launcher
  , List=require('../pages/list.po');

class Launcher {
    constructor(){
        commons.wait(patterns.base);
        return this;
    }

    open(){
        commons.click(patterns.menu);
        commons.wait(patterns.container);
        return this;
    }

    close(){
        commons.click(patterns.close);
    }

    exists(module){
        commons.wait(patterns.container);

        return commons.select(
            patterns.item.format(module)).value!==null;
    }

    item(module){
        commons.wait(patterns.container);
        commons.click(patterns.item.format(module));

        return new List();
    }

    static app(module){
        return new Launcher().open().item(module);
    }
}

module.exports=Launcher;

