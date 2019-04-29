const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , List=require('../PageObjects/List.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('046.F028.js',()=>{
    var name='products.list.functional'
      , active=true
      , code='FUNCTIONAL'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F028 - Tabla de productos muestra la Opción «Guardar» cuando existen '+
        'elementos editados',()=>{
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

        expect(Common.select(List.patterns.editActions.format('Save')))
            .to.not.equal(null);

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

