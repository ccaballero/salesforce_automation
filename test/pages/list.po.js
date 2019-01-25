const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Create=require('../pages/create.po');

class List {
    constructor(){
        commons.wait(patterns.list.container);
    }

    new(){
        commons.click(patterns.list.create);
        return new Create();
    }
}

module.exports=List;

