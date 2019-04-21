const Common=require('../Utils/Common')
  , Confirmation=require('./Confirmation.po');

class Row {
    constructor(name){
        this.name=name;

        return this;
    }

    set name(name){
        this._name=name;
    }

    get name(){
        return this._name;
    }

    options(){
        Common.click(Row.patterns.options.format(this.name),1000);

        return this;
    }

    delete(){
        Common.click(Row.patterns.delete,2000);

        return new Confirmation();
    }
}

Row.patterns={
    options:'//a[text()="{0}"]/ancestor::tr/td[last()]/span/div/a'
  , delete:'div.actionMenu a[title="Delete"]'
};

module.exports=Row;

