const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('022.N002.js',()=>{
    var name='products.search.negative'
      , active=true
      , code='NEGATIVE'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('N002 - Mensaje «No hay elementos para mostrar» se muestra cuando la '+
       'búsqueda no presenta resultados',()=>{
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
            .search('not found');

        expect(list.emptyMessage()).to.equal('No items to display.');

        list.clearSearch()
            .row(name)
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

