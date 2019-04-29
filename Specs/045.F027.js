const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , List=require('../PageObjects/List.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('045.F027.js',()=>{
    var name='products.list.functional'
      , active=true
      , code='FUNCTIONAL'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F027 - Celdas de la tabla de productos pueden ser editados',()=>{
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
            .refresh();

        expect(list.rowByName(name+' 01')).to.not.equal(null);

        list.edit()
            .keys(['Backspace','4','Enter']);

        let row=Common.text(List.patterns.tableRows.format(1),false);

        expect(row[2]).to.equal(name+' 04');
        expect(row[3]).to.equal(code);
        expect(row[4]).to.equal(description);

        list.cancelEdit();

        list.rowByName(name+' 01')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

