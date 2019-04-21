const Common=require('../Utils/Common')
  , Confirmation=require('./Confirmation.po');

class View {
    constructor(){
        Common.wait(View.patterns.container);

        return this;
    }

    title(){
        return Common.text(View.patterns.title,false);
    }

    subtitle(attribute){
        return Common.text(View.patterns.subtitle.format(attribute));
    }

    related(){
        Common.click(View.patterns.tabs.format('Related'));

        return this;
    }

    details(){
        Common.click(View.patterns.tabs.format('Details'));

        return this;
    }

    data(attribute){
        return Common.text(View.patterns.details.format(attribute));
    }

    checked(attribute){
        return Common.attribute(
            View.patterns.checked.format(attribute),'class')==='checked';
    }

    options(){
        Common.click(View.patterns.options);

        return this;
    }

    delete(){
        Common.click(View.patterns.delete);

        return new Confirmation();
    }
}

View.patterns={
    container:'div.region-main'
  , tabs:'//span[text()="{0}"]/ancestor::a'
  , options:'ul.branding-actions>li.oneActionsDropDown a'
  , delete:'div.actionMenu a[title="Delete"]'
  , title:'header h1>div>span'
  , subtitle:'//span[text()="{0}"]/parent::div/child::div/child::div/span'
  , details:'//span[text()="{0}"]/parent::div/following-sibling::div'+
        '/child::span/child::span'
  , checked:'//span[text()="{0}"]/parent::div/following-sibling::div'+
        '/child::span/child::span/child::img'
};

module.exports=View;

