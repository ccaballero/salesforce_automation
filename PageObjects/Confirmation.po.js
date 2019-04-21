const Common=require('../Utils/Common')
  , Message=require('./Message.po')
  , Modal=require('./Modal.po');

class Confirmation {
    constructor(){
        Common.wait(Modal.patterns.container);

        return this;
    }

    confirm(type=1){
        switch(type){
            case 1:
                Common.click(Modal.patterns.delete);
                break;
            case 2:
                Common.click(Modal.patterns.delete2);
                break;
        }

        return new Message();
    }

    cancel(){
        Common.click(Modal.patterns.cancel);
        Common.wait(Modal.patterns.container,true);
    }

    close(){
        Common.click(Modal.patterns.close);
        Common.wait(Modal.patterns.container,true);
    }
}

module.exports=Confirmation;

