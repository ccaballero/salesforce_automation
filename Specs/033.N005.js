const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('033.N005.js',()=>{
    var name='products.filter.negative';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('N005 - Mensaje «No hay elementos para mostrar» se muestra cuando no '+
        'existen productos bajo una vista de lista',()=>{
        let list=Launcher.app('Products');

        list.listViewControls('New')
            .fill({
                name:name+' 01'
            })
            .save();

        expect(list.currentListView(1,3000)).to.equal(name+' 01');

        expect(list.emptyMessage()).to.equal('No items to display.');

        list.listViewControls('Delete')
            .confirm(2);
    });

    after(()=>{
        Profile.profile().logout();
    });
});

