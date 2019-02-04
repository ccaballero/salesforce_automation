const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , New=require('./new.po')
  , Row=require('./row.po');

class List {
    constructor(){
        commons.wait(patterns.list.container);
    }

    new(){
        commons.click(patterns.list.new);
        return new New();
    }

    row(name){
        if(commons.exist(patterns.row.container.format(name))){
            return new Row(name);
        }else{
            return null;
        }
    }

    search(query){
        commons.setValue(patterns.list.search,query);
        commons.click(patterns.list.container);
        browser.pause(8000);

        return this;
    }

    clearsearch(){
        commons.click(patterns.list.clearsearch);
        commons.click(patterns.list.container);
        browser.pause(8000);

        return this;
    }

    emptymessage(){
        return commons.text(patterns.list.empty);
    }

    totalrows(){
        return commons.selects(patterns.row.counter).value.length;
    }

    refresh(){
        commons.click(patterns.list.controls.format('Refresh'));
        browser.pause(5000);

        return this;
    }
}

module.exports=List;

