const Commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Message=require('./message.po');

class New{
    constructor(){
        Commons.wait(patterns.modal.container);

        return this;
    }

    fill(obj){
        if(obj.name){
            this.name=obj.name;
        }

        if(obj.active){
            Commons.click(patterns.modal.input.format('Active'));
        }

        if(obj.code){
            this.code=obj.code;
        }

        if(obj.family){
            Commons.click(patterns.modal.select.format('Product Family'),1000);
            Commons.click(patterns.modal.option.format(obj.family));
        }

        if(obj.quantity){
            Commons.click(
                patterns.modal.input.format('Quantity Scheduling Enabled'));
        }

        if(obj.revenue){
            Commons.click(
                patterns.modal.input.format('Revenue Scheduling Enabled'));
        }

        if(obj.description){
            this.description=obj.description;
        }

        return this;
    }

    set name(name){
        Commons.setValue(patterns.modal.input.format('Product Name'),name);
    }

    get name(){
        return Commons.getValue(patterns.modal.input.format('Product Name'));
    }

    set code(code){
        Commons.setValue(patterns.modal.input.format('Product Code'),code);
    }

    get code(){
        return Commons.getValue(patterns.modal.input.format('Product Code'));
    }

    set description(description){
        Commons.setValue(patterns.modal.textarea.format('Product Description'),
            description);
    }

    get description(){
        return Commons.getValue(
            patterns.modal.textarea.format('Product Description'));
    }

    save(successful=true){
        Commons.click(patterns.modal.save);

        if(successful){
            return new Message();
        }else{
            return this;
        }
    }

    saveAndNew(successful=true){
        Commons.click(patterns.modal.saveAndNew);

        if(successful){
            return new Message();
        }else{
            Commons.wait(patterns.modal.container,false,3000);

            return this;
        }
    }

    cancel(){
        Commons.click(patterns.modal.cancel);
        Commons.wait(patterns.modal.container,true);
    }

    close(){
        Commons.click(patterns.modal.close);
        Commons.wait(patterns.modal.container,true);
    }

    messageValidation(){
        return Commons.text(patterns.modal.messageValidation);
    }

    errorsList(){
        return Commons.text(patterns.modal.errorsList);
    }
}

module.exports=New;

