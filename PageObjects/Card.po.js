const Common=require('../Utils/Common')
  , Confirmation=require('./Confirmation.po');

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
        Common.click(Card.patterns.options.format(this.name),1000);

        return this;
    }

    delete(){
        Common.click(Card.patterns.delete,2000);

        return new Confirmation();
    }
}

Card.patterns={
    options:'//a[text()="{0}"]/parent::p/following-sibling::button'
  , delete:'div.actionMenu a[title="Delete"]'
};

module.exports=Card;

