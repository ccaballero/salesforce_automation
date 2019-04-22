const Common=require('../Utils/Common')
  , Card=require('./Card.po')
  , Confirmation=require('./Confirmation.po')
  , Message=require('./Message.po')
  , New_Product=require('./New/Product.po')
  , New_PriceBook=require('./New/PriceBook.po')
  , New_ListView=require('./New/ListView.po')
  , Row=require('./Row.po');

class List {
    constructor(module){
        this.module=module;
        Common.wait(List.patterns.container);

        return this;
    }

    new(){
        Common.click(List.patterns.new);

        switch(this.module){
            case 'Products':
                return new New_Product();
            case 'Price Books':
                return new New_PriceBook();
        }
    }

    updatedInfo(delay=0){
        Common.pause(delay);

        return Common.text(List.patterns.updated);
    }

    refresh(){
        Common.click(List.patterns.controls.format('Refresh'),5000);

        return this;
    }

    search(query){
        Common.setValue(List.patterns.search,query);
        Common.click(List.patterns.container, 8000);

        return this;
    }

    clearSearch(){
        Common.click(List.patterns.clearSearch);
        Common.click(List.patterns.container, 8000);

        return this;
    }

    row(name){
        if(Common.exist(List.patterns.element.format(name))){
            return new Row(name);
        }else{
            return null;
        }
    }

    totalRows(){
        return Common.selects(List.patterns.rows).length;
    }

    card(name){
        if(Common.exist(List.patterns.element.format(name))){
            return new Card(name);
        }else{
            return null;
        }
    }

    totalCards(column){
        return Common.selects(List.patterns.cards.format(column)).length;
    }

    emptyMessage(){
        return Common.text(List.patterns.empty);
    }

    displayAs(mode='Table'){
        Common.click(List.patterns.controls.format('Display as '+mode),1000);

        return this;
    }

    displayTable(){
        Common.click(List.patterns.item.format('Table'));

        return this;
    }

    displayKanban(){
        Common.click(List.patterns.item.format('Kanban'));

        return this;
    }

    listViewControls(option){
        Common.click(List.patterns.controls.format('List View Controls'),1000);

        Common.click(List.patterns.item.format(option));

        switch(option){
            case 'New':
                return new New_ListView();
            case 'Delete':
                return new Confirmation();
            default:
                return this;
        }
    }

    currentListView(type=1,delay=0){
        Common.pause(delay);

        switch(type){
            case 1:
                return Common.text(List.patterns.listView);
            case 2:
                return Common.text(List.patterns.listView2);
        }
    }

    changeListView(listview){
        Common.click(List.patterns.pickListView,1000);
        Common.click(List.patterns.selectListView.format(listview),1000);

        return this;
    }

    edit(){
        Common.click(List.patterns.controls.format('Edit List'), 1000);

        return this;
    }

    keys(sequence){
        Common.keys(sequence);

        return this;
    }

    saveEdit(successful=true){
        Common.click(List.patterns.editActions.format('Save'));

        if(successful){
            return new Message();
        }else{
            return this;
        }
    }
}

List.patterns={
    container:'div.forceListViewManager'
  , new:'div.forceListViewManager a[title="New"]'
  , controls:'button[title="{0}"]'
  , search:'div.slds-page-header input[type="search"]'
  , clearSearch:'button[data-element-id="searchClear"]'
  , element:'//a[text()="{0}"]'
  , rows:'table.slds-table>tbody tr'
  , cards:'//span[text()="{0}"]/ancestor::h2/following-sibling::div'+
        '/descendant::ul/child::li'
  , empty:'div.emptyContent p'
  , item:'//span[text()="{0}"]/parent::a'
  , updated:'div.forceListViewManagerHeader>div:nth-child(2)>div>'+
        'p span:nth-child(2)'
  , listView:'div[role="banner"] h1>div>div>span:nth-child(2)'
  , listView2:'div[role="banner"] h1 span:nth-child(2)'
  , pickListView:'div[role="banner"] h1>div'
  , selectListView:'//span[text()="{0}"]/ancestor::a'
  , editActions:'//span[text()="{0}"]/parent::button'
};

module.exports=List;

