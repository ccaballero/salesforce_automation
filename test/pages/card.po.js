const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Confirmation=require('./confirmation.po');

class Card {
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
        commons.click(patterns.card.options.format(this.name));
        browser.pause(1000);

        return this;
    }

    delete(){
        commons.click(patterns.card.delete);
        browser.pause(2000);

        return new Confirmation();
    }
}

module.exports=Card;

