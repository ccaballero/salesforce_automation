const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Message=require('./message.po');

class Confirmation {
    constructor(){
        commons.wait(patterns.modal.container);
    }

    confirm(){
        commons.click(patterns.modal.delete);

        return new Message();
    }

    cancel(){
        commons.click(patterns.modal.cancel);
        commons.wait(patterns.modal.container,true);
    }

    close(){
        commons.click(patterns.modal.close);
        commons.wait(patterns.modal.container,true);
    }
}

module.exports=Confirmation;

