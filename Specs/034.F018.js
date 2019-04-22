const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('034.F018.js',()=>{
    var name='products.filter.functional'
      , active=true
      , code='FUNCTIONAL'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F014 - Activar un «Vista de Lista» creada, filtra los productos '+
        'basados en sus criterios establecidos',()=>{
        let list=Launcher.app('Products');

        list.new()
            .fill({
                name:name
              , active:active
              , code:code
              , description:description
            })
            .save();

        Launcher.app('Products')
            .refresh()
            .listViewControls('New')
            .fill({
                name:name
            })
            .save();

        expect(list.currentListView(1,3000)).to.equal(name);

        expect(list.totalRows()).to.equal(1);
        expect(list.row(name)).to.not.equal(null);

        list.listViewControls('Delete')
            .confirm(2);

        list.row(name)
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

