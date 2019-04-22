const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('032.F017.js',()=>{
    var name='products.listview.functional';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F017 - «Vistas de Lista» muestra el elemento «Vistos '+
        'recientemente»',()=>{
        let list=Launcher.app('Products');

        expect(list.currentListView(2,3000)).to.equal('Recently Viewed');

        list.listViewControls('New')
            .fill({
                name:name+' 01'
            })
            .save();

        expect(list.currentListView(1,3000)).to.equal(name+' 01');

        list.changeListView('Recently Viewed');

        expect(list.currentListView(1,3000)).to.equal('Recently Viewed');

        list.changeListView(name+' 01');
        list.listViewControls('Delete')
            .confirm(2);
    });

    after(()=>{
        Profile.profile().logout();
    });
});

