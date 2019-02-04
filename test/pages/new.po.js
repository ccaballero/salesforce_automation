const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Message=require('./message.po');

class New{
    constructor(){
        commons.wait(patterns.modal.container);
    }

    fill(obj){
        if(obj.name){
            this.name=obj.name;
        }

        if(obj.active){
            commons.click(patterns.modal.input.format('Active'));
        }

        if(obj.code){
            this.code=obj.code;
        }

        if(obj.family){
            commons.click(patterns.modal.select.format('Product Family'),1000);
            commons.click(patterns.modal.option.format(obj.family));
        }

        if(obj.quantity){
            commons.click(
                patterns.modal.input.format('Quantity Scheduling Enabled'));
        }

        if(obj.revenue){
            commons.click(
                patterns.modal.input.format('Revenue Scheduling Enabled'));
        }

        if(obj.description){
            this.description=obj.description;
        }

        return this;
    }

    set name(name){
        commons.setValue(patterns.modal.input.format('Product Name'),name);
    }

    get name(){
        return commons.getValue(patterns.modal.input.format('Product Name'));
    }

    set code(code){
        commons.setValue(patterns.modal.input.format('Product Code'),code);
    }

    get code(){
        return commons.getValue(patterns.modal.input.format('Product Code'));
    }

    set description(description){
        commons.setValue(patterns.modal.textarea.format('Product Description'),
            description);
    }

    get description(){
        return commons.getValue(
            patterns.modal.textarea.format('Product Description'));
    }

    save(successful=true){
        commons.click(patterns.modal.save);
        if(successful){
            return new Message();
        }else{
            return this;
        }
    }

    saveAndNew(successful=true){
        commons.click(patterns.modal.saveAndNew);
        if(successful){
            return new Message();
        }else{
            browser.pause(3000);
            commons.wait(patterns.modal.container);

            return this;
        }
    }

    cancel(){
        commons.click(patterns.modal.cancel);
        commons.wait(patterns.modal.container,true);
    }

    close(){
        commons.click(patterns.modal.close);
        commons.wait(patterns.modal.container,true);
    }

    messageValidation(){
        return commons.text(patterns.modal.messageValidation);
    }

    errorsList(){
        return commons.text(patterns.modal.errorsList);
    }
}

module.exports=New;

