const Commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , List=require('./list.po');

class NewListView{
    constructor(){
        Commons.wait(patterns.modal.container);
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
        Commons.setValue(patterns.newlistview.input.format('List Name'),name);
    }

    get name(){
        return Commons.getValue(patterns.newlistview.input.format('List Name'));
    }

    set api(api){
        Commons.setValue(patterns.newlistview.input.format('List API Name'),api);
    }

    get api(){
        return Commons.getValue(patterns.newlistview.input.format('List API Name'));
    }

    save(){
        Commons.click(patterns.newlistview.save);

        return new List();
    }
}

module.exports=NewListView;

