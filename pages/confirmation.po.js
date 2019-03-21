const Commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Message=require('./message.po');

class Confirmation {
    constructor(){
        Commons.wait(patterns.modal.container);

        return this;
    }

    confirm(){
        Commons.click(patterns.modal.delete);

        return new Message();
    }

    cancel(){
        Commons.click(patterns.modal.cancel);
        Commons.wait(patterns.modal.container,true);
    }

    close(){
        Commons.click(patterns.modal.close);
        Commons.wait(patterns.modal.container,true);
    }
}

module.exports=Confirmation;

