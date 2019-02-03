const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Confirmation=require('./confirmation.po');

class Row {
    constructor(name){
        this.name=name;
    }

    set name(name){
        this._name=name;
    }

    get name(){
        return this._name;
    }

    options(){
        commons.click(patterns.row.options.format(this.name));
        return this;
    }

    delete(){
        commons.click(patterns.row.delete);
        return new Confirmation();
    }
}

module.exports=Row;

