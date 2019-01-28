const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Message=require('../pages/message.po');

class New{
    constructor(){
        commons.wait(patterns.new.container);
    }

    fill(obj){
        commons.setValue(patterns.new.input.format('Product Name'),obj.name);

        if(obj.active){
            commons.click(patterns.new.input.format('Active'));
        }

        if(obj.code){
            commons.setValue(patterns.new.input.format('Product Code'),obj.code);
        }

        if(obj.family){
            commons.click(patterns.new.select.format('Product Family'));
            browser.pause(1000);
            commons.click(patterns.new.option.format('Ciencia Ficción'));
        }

        if(obj.quantity){
            commons.click(
                patterns.new.input.format('Quantity Scheduling Enabled'));
        }

        if(obj.revenue){
            commons.click(
                patterns.new.input.format('Revenue Scheduling Enabled'));
        }

        if(obj.year){
            commons.setValue(patterns.new.input.format('Año'),obj.year);
        }

        if(obj.description){
            commons.setValue(
                patterns.new.textarea.format('Product Description'),
                obj.description);
        }

        return this;
    }

    save(){
        commons.click(patterns.new.save);
        return new Message();
    }

    saveandnew(){
        commons.click(patterns.new.saveandnew);
        browser.pause(4000);
    }

    cancel(){
        commons.click(patterns.new.cancel);
        browser.pause(1000);
    }

    close(){
        commons.click(patterns.new.close);
        browser.pause(1000);
    }
}

module.exports=New;

