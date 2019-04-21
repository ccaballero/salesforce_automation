const Common=require('../Utils/Common');

class Message{
    constructor(){
        Common.wait(Message.patterns.container);

        return this;
    }

    result(){
        return Common.text(Message.patterns.result);
    }

    text(){
        return Common.text(Message.patterns.message);
    }

    close(timeout=false){
        if(!timeout){
            Common.click(Message.patterns.close);
        }

        Common.wait(Message.patterns.container,true);
    }
}

Message.patterns={
    container:'div.slds-notify'
  , result:'div.slds-notify>lightning-icon>span.slds-assistive-text'
  , message:'div.slds-notify>div.toastContent span.toastMessage'
  , close:'div.slds-notify button.toastClose'
};

module.exports=Message;

