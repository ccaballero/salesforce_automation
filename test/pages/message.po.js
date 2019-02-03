const commons=require('../core/commons')
  , patterns=require('../core/patterns');

class Message{
    constructor(){
        commons.wait(patterns.messages.container);
    }

    result(){
        return commons.text(patterns.messages.result);
    }

    text(){
        return commons.text(patterns.messages.message);
    }

    close(timeout=false){
        if(!timeout){
            commons.click(patterns.messages.close);
        }
        commons.wait(patterns.messages.container,true);
    }
}

module.exports=Message;

