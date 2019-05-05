const Common=require('../../Utils/Common')
  , Message=require('../Message.po')
  , Modal=require('../Modal.po');

class New{
    constructor(){
        Common.wait(Modal.patterns.container);

        return this;
    }

    fill(obj){
        if(obj.listprice){
            this.listprice=obj.listprice;
        }

        return this;
    }

    set listprice(listprice){
        Common.setValue(Modal.patterns.input.format('List Price'),listprice);
    }

    get listprice(){
        return Common.getValue(
            Modal.patterns.input.format('List Price'));
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

