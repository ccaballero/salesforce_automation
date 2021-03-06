const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , List=require('../PageObjects/List.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('038.F020.js',()=>{
    var name='products.list.functional '.repeat(8)
      , active=true
      , code='FUNCTIONAL'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F020 - Columnas en la tabla de productos permiten '+
        '«Ajustar Texto»',()=>{
        let list=Launcher.app('Products');

        list.new()
            .fill({
                name:name
              , active:active
              , code:code
              , description:description
            })
            .save();

        Launcher.app('Products');

        list.headerOptions('Product Name')
            .headerOptionsItem('Product Name','Clip text');

        expect(Common.size(List.patterns.tableRow1.format(1)).height)
            .to.equal(29);

        list.rowByIndex(1)
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

