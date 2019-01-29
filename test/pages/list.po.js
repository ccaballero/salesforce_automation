const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , New=require('../pages/new.po');

class List {
    constructor(){
        commons.wait(patterns.list.container);
    }

    new(){
        commons.click(patterns.list.new);

        return new New();
    }
}

module.exports=List;

