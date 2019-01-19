const timeout=require('../config').timeout;

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

