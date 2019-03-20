const Commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Confirmation=require('./confirmation.po');

class View {
    constructor(){
        Commons.wait(patterns.view.container);
    }

    title(){
        return Commons.text(patterns.view.title);
    }

    subtitle(attribute){
        return Commons.text(patterns.view.subtitle.format(attribute));
    }

    related(){
        Commons.click(patterns.view.tabs.format('Related'));

        return this;
    }

    details(){
        Commons.click(patterns.view.tabs.format('Details'));
        return this;
    }

    data(attribute){
        return Commons.text(patterns.view.details.format(attribute));
    }

    checked(attribute){
        return Commons.attribute(
            patterns.view.checked.format(attribute),'class')==='checked';
    }

    options(){
        Commons.click(patterns.view.options);

        return this;
    }

    delete(){
        Commons.click(patterns.view.delete);

        return new Confirmation();
    }
}

module.exports=View;

