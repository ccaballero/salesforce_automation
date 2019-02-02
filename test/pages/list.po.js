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

    findRow(name){
        return new Row(name);
    }
}

module.exports=List;

