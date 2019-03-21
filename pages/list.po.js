const Commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Card=require('./card.po')
  , Message=require('./message.po')
  , New=require('./new.po')
  , NewListView=require('./newlistview.po')
  , Row=require('./row.po');

class List {
    constructor(){
        Commons.wait(patterns.list.container);

        return this;
    }

    currentView(){
        return Commons.text(patterns.listview.title);
    }

    new(){
        Commons.click(patterns.list.new);

        return new New();
    }

    search(query){
        Commons.setValue(patterns.list.search,query);
        Commons.click(patterns.list.container, 8000);

        return this;
    }

    clearSearch(){
        Commons.click(patterns.list.clearSearch);
        Commons.click(patterns.list.container, 8000);

        return this;
    }

    displayAs(mode='Table'){
        Commons.click(patterns.list.controls.format('Display as '+mode),1000);

        return this;
    }

    displayTable(){
        Commons.click(patterns.list.item.format('Table'));

        return this;
    }

    displayKanban(){
        Commons.click(patterns.list.item.format('Kanban'));

        return this;
    }

    viewControls(){
        Commons.click(patterns.list.controls.format('List View Controls'),1000);

        return this;
    }

    viewControlsNew(){
        Commons.click(patterns.list.item.format('New'));

        return new NewListView();
    }

    refresh(){
        Commons.click(patterns.list.controls.format('Refresh'),5000);

        return this;
    }

    edit(){
        Commons.click(patterns.list.controls.format('Edit List'), 1000);

        return this;
    }

    emptyMessage(){
        return Commons.text(patterns.list.empty);
    }

    updatedInfo(delay=0){
        Commons.pause(delay);

        return Commons.text(patterns.list.updated);
    }

    row(name){
        if(Commons.exist(patterns.list.element.format(name))){
            return new Row(name);
        }else{
            return null;
        }
    }

    totalRows(){
        return Commons.selects(patterns.row.counter).length;
    }

    card(name){
        if(Commons.exist(patterns.list.element.format(name))){
            return new Card(name);
        }else{
            return null;
        }
    }

    totalCards(column){
        return Commons.selects(patterns.card.counter.format(column)).length;
    }

    keys(sequence){
        Commons.keys(sequence);

        return this;
    }

    saveEdit(successful=true){
        Commons.click(patterns.list.editActions.format('Save'));

        if(successful){
            return new Message();
        }else{
            return this;
        }
    }
}

module.exports=List;

