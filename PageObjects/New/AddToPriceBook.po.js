const Common=require('../../Utils/Common')
  , Message=require('../Message.po')
  , Modal=require('../Modal.po');

class New{
    constructor(){
        Common.wait(Modal.patterns.container);

        return this;
    }

    fill(){
        return this;
    }

    next(successful=true){
        Common.click(New.patterns.next);

        if(successful){
            return new Message();
        }else{
            return this;
        }
    }

    cancel(){
        Common.click(New.patterns.cancel);
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

New.patterns={
    cancel:'//div[contains(@class,"modal-container")]/div[3]/button[1]'
  , next:'//div[contains(@class,"modal-container")]/div[3]/button[2]'
};

module.exports=New;

