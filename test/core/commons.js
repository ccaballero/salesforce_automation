const timeout=require('../config').timeout;

if(!String.prototype.format){
    String.prototype.format=function(){
        var args=arguments;

        return this.replace(/{(\d+)}/g,function(match,number){
            return typeof args[number]!='undefined'?args[number]:match;
        });
    };
}

module.exports={
    setValue:(selector,value)=>{
        browser.waitForVisible(selector,timeout);
        browser.element(selector).setValue(value);
    }
  , click:(selector)=>{
        browser.waitForVisible(selector,timeout);
        browser.element(selector).click();
    }
  , wait:(selector)=>{
        browser.waitForVisible(selector,timeout);
    }
};

