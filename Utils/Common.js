/* global browser */
const timeout=require('../config').timeout;

// polyfill for add format method and parsing string style {0},
// to varying args sent
if(!String.prototype.format){
    String.prototype.format=function(){
        var args=arguments;

        return this.replace(/{(\d+)}/g,function(match,number){
            return typeof args[number]!='undefined'?args[number]:match;
        });
    };
}

class Common {
    static setUrl(url){
        browser.url(url);
    }

    static getUrl(){
        return browser.getUrl();
    }

    static getTitle(){
        return browser.getTitle();
    }

    static wait(selector,reverse=false,delay=0){
        if(delay){
            browser.pause(delay);
        }

        browser.waitForVisible(selector,timeout,reverse);
    }

    static setValue(selector,value){
        browser.waitForVisible(selector,timeout);
        browser.pause(1000);
        browser.element(selector).setValue(value);
    }

    static getValue(selector){
        return browser.getValue(selector);
    }

    static click(selector,delay=0){
        browser.waitForVisible(selector,timeout);
        browser.pause(2000);
        browser.click(selector);

        if(delay){
            browser.pause(delay);
        }
    }

    static getCookie(cookie){
        return browser.getCookie(cookie).value;
    }

    static select(selector,wait=true){
        if(wait){
            browser.waitForVisible(selector,timeout);
        }

        return browser.element(selector).value;
    }

    static text(selector,wait=true){
        if(wait){
            browser.waitForVisible(selector,timeout);
        }

        return browser.getText(selector);
    }

    static selects(selector,wait=true){
        if(wait){
            browser.waitForVisible(selector,timeout);
        }

        return browser.elements(selector).value;
    }

    static exist(selector){
        return browser.isExisting(selector);
    }

    static attribute(selector,attribute){
        return browser.getAttribute(selector,attribute).trim();
    }

    static pause(delay){
        // miliseconds
        browser.pause(delay);
    }

    static keys(sequence){
        browser.keys(sequence);
    }

    static size(selector){
        return browser.getElementSize(selector);
    }

    static refresh(){
        browser.refresh();
    }
}

module.exports=Common;

