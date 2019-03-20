const expect=require('chai').expect
  , config=require('../../config')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , credentials=config.credentials.administrator;

describe('products/09.display.functions.js',()=>{
    var name='products.display.functions'
      , active=true
      , code='FUNCTIONS'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F011 - Opción «Tabla» en «Mostrar como», muestra los productos en '+
        'formato tabular',()=>{
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
            .displayAs('Table')
            .displayTable();

        expect(list.totalRows()).to.equal(2);
        expect(list.row(name+' 01')).to.not.equal(null);
        expect(list.row(name+' 02')).to.not.equal(null);

        list.row(name+' 01')
            .options()
            .delete()
            .confirm();

        list.row(name+' 02')
            .options()
            .delete()
            .confirm();
    });

    it('F012 - Opción «Kanban» en «Mostrar como», muestra los productos en '+
        'formato de columnas',()=>{
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
            .displayAs('Table')
            .displayKanban();

        expect(list.totalCards('-- None --')).to.equal(2);
        expect(list.card(name+' 01')).to.not.equal(null);
        expect(list.card(name+' 02')).to.not.equal(null);

        list.card(name+' 01')
            .options()
            .delete()
            .confirm();

        list.card(name+' 02')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

