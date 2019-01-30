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
        browser.pause(1000);
        browser.element(selector).setValue(value);
    }
  , getValue:(selector)=>{
        return browser.getValue(selector);
    }
  , select:(selector)=>{
        browser.waitForVisible(selector,timeout);
        return browser.element(selector);
    }
  , text:(selector)=>{
        return browser.getText(selector);
    }
  , click:(selector)=>{
        browser.waitForVisible(selector,timeout);
        browser.pause(2000);
        browser.click(selector);
    }
  , wait:(selector,reverse=false)=>{
        browser.waitForVisible(selector,timeout,reverse);
    }
};

