const Common=require('../Utils/Common')
  , List=require('./List.po')
  , Setup=require('./Setup.po')
  , View=require('./View.po');

class Launcher {
    constructor(){
        let url=Common.getUrl();

        if(url.indexOf('/list')>0){
            Common.wait(List.patterns.container);
        }else if(url.indexOf('/view')>0){
            Common.wait(View.patterns.container);
        }else{
            Common.wait(Setup.patterns.container);
        }

        return this;
    }

    open(){
        Common.click(Launcher.patterns.menu);
        Common.wait(Launcher.patterns.container);

        return this;
    }

    close(){
        Common.click(Launcher.patterns.close);
        Common.wait(Launcher.patterns.container,true);
    }

    exists(module){
        Common.wait(Launcher.patterns.container);

        return Common.select(Launcher.patterns.item.format(module))!==null;
    }

    item(module){
        Common.wait(Launcher.patterns.container);
        Common.click(Launcher.patterns.item.format(module));

        return new List(module);
    }

    static app(module){
        return new Launcher().open().item(module);
    }
}

Launcher.patterns={
    container:'div.modal-container'
  , menu:'//span[text()="App Launcher"]/ancestor::button'
  , item:'div.modal-container a[title="{0}"]'
  , close:'div.modal-container button[title="Close this window"]'
};

module.exports=Launcher;

