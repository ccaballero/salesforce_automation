const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('049.A003.js',()=>{
    var name='products.list.acceptance'
      , active=true
      , code='ACCEPTANCE'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('A003 - Tabla de productos registra la información modificada de '+
        'las celdas editadas',()=>{
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
            .saveAndNew(false)
            .fill({
                name:name+' 03'
              , active:active
              , code:code
              , description:description
            })
            .save();

        Launcher.app('Products')
            .refresh();

        expect(list.totalRows()).to.equal(3);
        expect(list.row(name+' 01')).to.not.equal(null);
        expect(list.row(name+' 02')).to.not.equal(null);
        expect(list.row(name+' 03')).to.not.equal(null);
        expect(list.row(name+' 04')).to.equal(null);

        let message=Launcher.app('Products')
            .refresh()
            .edit()
            .keys(['Backspace','4','Enter'])
            .saveEdit();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Your changes are saved.');

        Launcher.app('Products').refresh();

        expect(list.totalRows()).to.equal(3);
        expect(list.row(name+' 01')).to.not.equal(null);
        expect(list.row(name+' 02')).to.not.equal(null);
        expect(list.row(name+' 03')).to.equal(null);
        expect(list.row(name+' 04')).to.not.equal(null);

        list.row(name+' 01')
            .options()
            .delete()
            .confirm();

        list.row(name+' 02')
            .options()
            .delete()
            .confirm();

        list.row(name+' 04')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

