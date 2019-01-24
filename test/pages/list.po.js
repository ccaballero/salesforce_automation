const commons=require('../core/commons')
  , xpath={
        input:'//span[contains(text(),"{0}")]/parent::label'+
            '/following-sibling::input'
      , select:'//span[contains(text(),"Product Family")]/parent::span'+
            '/following-sibling::div/child::div/child::div/child::div/child::a'
      , textarea:'//span[contains(text(),"{0}")]/parent::label'+
            '/following-sibling::textarea'
      , option:'//a[contains(text(),"{0}")]'
    };

class List {
    constructor(){
        commons.wait('div.forceListViewManager');
    }

    clickNew(){
        commons.click('a[title="New"]');
        return this;
    }

    submitNew(obj){
        commons.setValue(xpath.input.format('Product Name'),obj.name);

        if(obj.active){
            commons.click(xpath.input.format('Active'));
        }

        commons.setValue(xpath.input.format('Product Code'),obj.code);

        if(obj.family){
            commons.click(xpath.select.format('Product Family'));
            browser.pause(1000);
            commons.click(xpath.option.format('Ciencia Ficción'));
        }

        if(obj.quantity){
            commons.click(xpath.input.format('Quantity Scheduling Enabled'));
        }

        if(obj.revenue){
            commons.click(xpath.input.format('Revenue Scheduling Enabled'));
        }

        commons.setValue(xpath.input.format('Año'),obj.year);
        commons.setValue(
            xpath.textarea.format('Product Description'),obj.description);

        commons.click('button.forceActionButton[title="Save"]');
    }
};

module.exports=List;

