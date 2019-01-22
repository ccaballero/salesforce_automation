const commons=require('../core/commons');

class List {
    constructor(){
        commons.wait('div.forceListViewManager');
    }

    clickNew(){
        commons.click('a[title="Nuevo"]');
        return this;
    }

    submitNew(obj){
        let form_input='//span[contains(text(),"{0}")]/parent::label/following-sibling::input';

        commons.setValue(form_input.format('Nombre del producto'),obj.name);
//        commons.setValue(form_input.format('Activo'),obj.active);
        commons.setValue(form_input.format('Código del producto'),obj.code);
        commons.setValue(form_input.format('Año'),obj.year);
        commons.setValue(form_input.format('Descripción del producto'),obj.description);

        commons.click('button.forceActionButton[title="Guardar"]');
    }
};

module.exports=List;

