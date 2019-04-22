const Common=require('../../Utils/Common')
  , Modal=require('../Modal.po');

class New{
    constructor(){
        Common.wait(Modal.patterns.container);

        return this;
    }

    fill(obj){
        if(obj.name){
            this.name=obj.name;
        }

        if(obj.api){
            this.api=obj.api;
        }

        return this;
    }

    set name(name){
        Common.setValue(New.patterns.input.format('List Name'),name);
    }

    get name(){
        return Common.getValue(New.patterns.input.format('List Name'));
    }

    set api(api){
        Common.setValue(New.patterns.input.format('List API Name'),api);
    }

    get api(){
        return Common.getValue(New.patterns.input.format('List API Name'));
    }

    save(){
        Common.click(New.patterns.save);

        return this;
    }
}

New.patterns={
    input:'//label[text()="{0}"]/following-sibling::div/input'
  , save:'button.test-confirmButton'
};

module.exports=New;

