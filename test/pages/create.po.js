const commons=require('../core/commons')
  , patterns=require('../core/patterns');

class Create {
    fill(obj){
        commons.setValue(patterns.form.input.format('Product Name'),obj.name);

        if(obj.active){
            commons.click(patterns.form.input.format('Active'));
        }

        commons.setValue(patterns.form.input.format('Product Code'),obj.code);

        if(obj.family){
            commons.click(patterns.form.select.format('Product Family'));
            browser.pause(1000);
            commons.click(patterns.form.option.format('Ciencia Ficción'));
        }

        if(obj.quantity){
            commons.click(
                patterns.form.input.format('Quantity Scheduling Enabled'));
        }

        if(obj.revenue){
            commons.click(
                patterns.form.input.format('Revenue Scheduling Enabled'));
        }

        commons.setValue(patterns.form.input.format('Año'),obj.year);
        commons.setValue(
            patterns.form.textarea.format('Product Description'),
            obj.description);

        return this;
    }

    save(){
        commons.click(patterns.form.save);
        browser.pause(4000);
    }

    saveandnew(){
        commons.click(patterns.form.saveandnew);
        browser.pause(4000);
    }

    cancel(){
        commons.click(patterns.form.cancel);
        browser.pause(1000);
    }

    close(){
        commons.click(patterns.form.close);
        browser.pause(1000);
    }
}

module.exports=Create;

