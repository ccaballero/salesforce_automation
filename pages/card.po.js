const Commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Confirmation=require('./confirmation.po');

class Card {
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
        Commons.click(patterns.card.options.format(this.name),1000);

        return this;
    }

    delete(){
        Commons.click(patterns.card.delete,2000);

        return new Confirmation();
    }
}

module.exports=Card;

