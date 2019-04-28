const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('037.F019.js',()=>{
    var name='products.list.functional'
      , active=true
      , code='FUNCTIONAL'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F019 - Columnas en la tabla de productos pueden reordenar la lista '+
        'dinámicamente',()=>{
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
                name:name+' 03'
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
            .refresh();

        expect(list.totalRows()).to.equal(3);

        list.sortByHeader('Product Name');

        expect(list.rowByIndex(1).name).to.equal(name+' 01');
        expect(list.rowByIndex(2).name).to.equal(name+' 02');
        expect(list.rowByIndex(3).name).to.equal(name+' 03');

        list.sortByHeader('Product Name');

        expect(list.rowByIndex(1).name).to.equal(name+' 03');
        expect(list.rowByIndex(2).name).to.equal(name+' 02');
        expect(list.rowByIndex(3).name).to.equal(name+' 01');

        list.rowByName(name+' 01')
            .options()
            .delete()
            .confirm();

        list.rowByName(name+' 02')
            .options()
            .delete()
            .confirm();

        list.rowByName(name+' 03')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

