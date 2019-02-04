const expect=require('chai').expect
  , config=require('../../config')
  , patterns=require('../../core/patterns')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , View=require('../../pages/view.po')
  , credentials=config.credentials.administrator;

describe('products/search.negative.js',()=>{
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

        expect(list.emptymessage()).to.equal('No items to display.');

        list.clearsearch()
            .row(name)
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

