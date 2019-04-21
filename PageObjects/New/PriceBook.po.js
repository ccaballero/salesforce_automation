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

        if(obj.description){
            this.description=obj.description;
        }

        if(obj.standard){
            Common.click(
                Modal.patterns.input.format('Is Standard Price Book'));
        }

        return this;
    }

    set name(name){
        Common.setValue(Modal.patterns.input.format('Product Book Name'),name);
    }

    get name(){
        return Common.getValue(
            Modal.patterns.input.format('Product Book Name'));
    }

    set description(description){
        Common.setValue(Modal.patterns.textarea.format('Description'),
            description);
    }

    get description(){
        return Common.getValue(
            Modal.patterns.textarea.format('Description'));
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

