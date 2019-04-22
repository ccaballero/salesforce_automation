const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('031.F016.js',()=>{
    var name='products.listview.functional';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F016 - «Vistas de Lista» muestra los elementos registrados',()=>{
        let list=Launcher.app('Products');

        expect(list.currentListView(2,3000)).to.equal('Recently Viewed');

        list.listViewControls('New')
            .fill({
                name:name+' 01'
            })
            .save();

        expect(list.currentListView(1,3000)).to.equal(name+' 01');

        list.listViewControls('New')
            .fill({
                name:name+' 02'
            })
            .save();

        expect(list.currentListView(1,3000)).to.equal(name+' 02');

        list.listViewControls('New')
            .fill({
                name:name+' 03'
            })
            .save();

        expect(list.currentListView(1,3000)).to.equal(name+' 03');

        list.changeListView(name+' 01');
        list.listViewControls('Delete')
            .confirm(2);

        list.changeListView(name+' 02');
        list.listViewControls('Delete')
            .confirm(2);

        list.changeListView(name+' 03');
        list.listViewControls('Delete')
            .confirm(2);
    });

    after(()=>{
        Profile.profile().logout();
    });
});

