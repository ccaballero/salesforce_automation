const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('019.F007.js',()=>{
    var name='products.search.functional'
      , active=true
      , code='FUNCTIONAL'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F007 - «Buscar en esta lista...» filtra los elementos a partir de '+
       'contenido en el campo «Nombre del producto»',()=>{
        let list=Launcher.app('Products');

        list.new()
            .fill({
                name:name+' 01'
              , active:active
              , code:code
              , description:description
            })
            .saveAndNew(false)
            .fill({
                name:name+' 02'
              , active:active
              , code:code
              , description:description
            })
            .save();

        Launcher.app('Products')
            .refresh()
            .search('01');

        expect(list.totalRows()).to.equal(1);
        expect(list.rowByName(name+' 01')).to.not.equal(null);
        expect(list.rowByName(name+' 02')).to.equal(null);

        list.clearSearch()
            .rowByName(name+' 01')
            .options()
            .delete()
            .confirm();

        Launcher.app('Products')
            .refresh()
            .search('02');

        expect(list.totalRows()).to.equal(1);
        expect(list.rowByName(name+' 01')).to.equal(null);
        expect(list.rowByName(name+' 02')).to.not.equal(null);

        list.clearSearch()
            .rowByName(name+' 02')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

