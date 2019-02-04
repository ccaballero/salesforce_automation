const Commons=require('../core/commons')
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
        Commons.click(patterns.row.options.format(this.name),1000);

        return this;
    }

    delete(){
        Commons.click(patterns.row.delete,2000);

        return new Confirmation();
    }
}

module.exports=Row;

