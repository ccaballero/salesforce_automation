const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Confirmation=require('./confirmation.po');

class View {
    constructor(){
        commons.wait(patterns.view.container);
    }

    title(){
        return commons.text(patterns.view.title);
    }

    subtitle(attribute){
        return commons.text(patterns.view.subtitle.format(attribute));
    }

    related(){
        commons.click(patterns.view.tabs.format('Related'));

        return this;
    }

    details(){
        commons.click(patterns.view.tabs.format('Details'));
        return this;
    }

    data(attribute){
        return commons.text(patterns.view.details.format(attribute));
    }

    checked(attribute){
        return commons.attribute(
            patterns.view.checked.format(attribute),'class')==='checked';
    }

    options(){
        commons.click(patterns.view.options);

        return this;
    }

    delete(){
        commons.click(patterns.view.delete);

        return new Confirmation();
    }
}

module.exports=View;

