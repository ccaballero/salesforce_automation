const commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Card=require('./card.po')
  , New=require('./new.po')
  , Row=require('./row.po');

class List {
    constructor(){
        commons.wait(patterns.list.container);
    }

    new(){
        commons.click(patterns.list.new);

        return new New();
    }

    row(name){
        if(commons.exist(patterns.list.element.format(name))){
            return new Row(name);
        }else{
            return null;
        }
    }

    search(query){
        commons.setValue(patterns.list.search,query);
        commons.click(patterns.list.container);
        browser.pause(8000);

        return this;
    }

    clearSearch(){
        commons.click(patterns.list.clearSearch);
        commons.click(patterns.list.container);
        browser.pause(8000);

        return this;
    }

    emptyMessage(){
        return commons.text(patterns.list.empty);
    }

    totalRows(){
        return commons.selects(patterns.row.counter).value.length;
    }

    refresh(){
        commons.click(patterns.list.controls.format('Refresh'));
        browser.pause(5000);

        return this;
    }

    displayAs(mode='Table'){
        commons.click(patterns.list.controls.format('Display as '+mode));
        browser.pause(1000);

        return this;
    }

    displayTable(){
        commons.click(patterns.list.item.format('Table'));
        return this;
    }

    displayKanban(){
        commons.click(patterns.list.item.format('Kanban'));
        return this;
    }

    totalCards(column){
        return commons.selects(
            patterns.card.counter.format(column)).value.length;
    }

    card(name){
        if(commons.exist(patterns.list.element.format(name))){
            return new Card(name);
        }else{
            return null;
        }
    }
}

module.exports=List;

