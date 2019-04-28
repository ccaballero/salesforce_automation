const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , List=require('../PageObjects/List.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('029.N004.js',()=>{
    var name='products.filter.negative'
      , active=true
      , code='NEGATIVE'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('N004 - «Mostrar filtros» está deshabilitado mientras no se use una '+
        '«vista de lista» determinada',()=>{
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
            List.patterns.controls.format('Hide filters'))).to.equal(true);

        list.changeListView('Recently Viewed');

        expect(list.currentListView()).to.equal('Recently Viewed');
        expect(Common.exist(
            List.patterns.controls.format('Hide filters'))).to.equal(false);

        list.changeListView(name)
            .listViewControls('Delete')
            .confirm(2);

        list.rowByName(name+' 01')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

