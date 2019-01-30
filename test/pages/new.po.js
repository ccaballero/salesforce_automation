const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Message=require('../pages/message.po');

class New{
    constructor(){
        commons.wait(patterns.new.container);
    }

    fill(obj){
        if(obj.name){
            this.name=obj.name;
        }

        if(obj.active){
            commons.click(patterns.new.input.format('Active'));
        }

        if(obj.code){
            this.code=obj.code;
        }

        if(obj.family){
            commons.click(patterns.new.select.format('Product Family'));
            browser.pause(2000);
            commons.click(patterns.new.option.format(obj.family));
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
            this.description=obj.description;
        }

        return this;
    }

    set name(name){
        commons.setValue(patterns.new.input.format('Product Name'),name);
    }

    get name(){
        return commons.getValue(patterns.new.input.format('Product Name'));
    }

    set code(code){
        commons.setValue(patterns.new.input.format('Product Code'),code);
    }

    get code(){
        return commons.getValue(patterns.new.input.format('Product Code'));
    }

    set description(description){
        commons.setValue(patterns.new.textarea.format('Product Description'),
            description);
    }

    get description(){
        return commons.getValue(
            patterns.new.textarea.format('Product Description'));
    }

    save(successful=true){
        commons.click(patterns.new.save);
        if(successful){
            return new Message();
        }
    }

    saveandnew(successful=true){
        commons.click(patterns.new.saveandnew);
        if(successful){
            return new Message();
        }
    }

    cancel(){
        commons.click(patterns.new.cancel);
        commons.wait(patterns.new.container,true);
    }

    close(){
        commons.click(patterns.new.close);
        commons.wait(patterns.new.container,true);
    }

    messagevalidation(){
        return commons.text(patterns.new.messagevalidation);
    }

    errorslist(){
        return commons.text(patterns.new.errorslist);
    }
}

module.exports=New;

