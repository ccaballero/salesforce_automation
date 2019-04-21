const Common=require('../../Utils/Common')
  , Message=require('../Message.po')
  , Modal=require('../Modal.po');

class New{
    constructor(){
        Common.wait(Modal.patterns.container);

        return this;
    }

    fill(obj){
        if(obj.name){
            this.name=obj.name;
        }

        if(obj.active){
            Common.click(Modal.patterns.input.format('Active'));
        }

        if(obj.code){
            this.code=obj.code;
        }

        if(obj.family){
            Common.click(Modal.patterns.select.format('Product Family'),1000);
            Common.click(Modal.patterns.option.format(obj.family));
        }

        if(obj.quantity){
            Common.click(
                Modal.patterns.input.format('Quantity Scheduling Enabled'));
        }

        if(obj.revenue){
            Common.click(
                Modal.patterns.input.format('Revenue Scheduling Enabled'));
        }

        if(obj.description){
            this.description=obj.description;
        }

        return this;
    }

    set name(name){
        Common.setValue(Modal.patterns.input.format('Product Name'),name);
    }

    get name(){
        return Common.getValue(Modal.patterns.input.format('Product Name'));
    }

    set code(code){
        Common.setValue(Modal.patterns.input.format('Product Code'),code);
    }

    get code(){
        return Common.getValue(Modal.patterns.input.format('Product Code'));
    }

    set description(description){
        Common.setValue(Modal.patterns.textarea.format('Product Description'),
            description);
    }

    get description(){
        return Common.getValue(
            Modal.patterns.textarea.format('Product Description'));
    }

    save(successful=true){
        Common.click(Modal.patterns.save);

        if(successful){
            return new Message();
        }else{
            return this;
        }
    }

    saveAndNew(successful=true){
        Common.click(Modal.patterns.saveAndNew);

        if(successful){
            return new Message();
        }else{
            Common.wait(Modal.patterns.container,false,3000);

            return this;
        }
    }

    cancel(){
        Common.click(Modal.patterns.cancel);
        Common.wait(Modal.patterns.container,true);
    }

    close(){
        Common.click(Modal.patterns.close);
        Common.wait(Modal.patterns.container,true);
    }

    messageValidation(){
        return Common.text(Modal.patterns.messageValidation);
    }

    errorsList(){
        return Common.text(Modal.patterns.errorsList);
    }
}

module.exports=New;

