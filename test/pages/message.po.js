const Commons=require('../core/commons')
  , patterns=require('../core/patterns');

class Message{
    constructor(){
        Commons.wait(patterns.messages.container);
    }

    result(){
        return Commons.text(patterns.messages.result);
    }

    text(){
        return Commons.text(patterns.messages.message);
    }

    close(timeout=false){
        if(!timeout){
            Commons.click(patterns.messages.close);
        }
        Commons.wait(patterns.messages.container,true);
    }
}

module.exports=Message;

