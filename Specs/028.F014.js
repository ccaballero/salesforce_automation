const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , List=require('../PageObjects/List.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('028.F014.js',()=>{
    var name='products.show.functional'
      , active=true
      , code='FUNCTIONAL'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F014 - «Mostrar Gráficos» está habilitado mientras se use una «vista '+
        'de lista» determinada',()=>{
        let list=Launcher.app('Products');

        list.new()
            .fill({
                name:name+' 01'
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

        expect(list.currentListView()).to.equal(name);
        expect(Common.exist(
            List.patterns.controls.format('Show charts'))).to.equal(true);

        list.listViewControls('Delete')
            .confirm(2);

        list.row(name+' 01')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

