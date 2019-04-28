const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('024.F011.js',()=>{
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
        expect(list.rowByName(name+' 01')).to.not.equal(null);
        expect(list.rowByName(name+' 02')).to.not.equal(null);

        list.rowByName(name+' 01')
            .options()
            .delete()
            .confirm();

        list.rowByName(name+' 02')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

