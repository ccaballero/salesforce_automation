const expect=require('chai').expect
  , config=require('../../config')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , credentials=config.credentials.administrator;

describe('products/11.show.negative.js',()=>{
    var name='products.show.negative'
      , active=true
      , code='NEGATIVE'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('N003 - «Mostrar Gráficos» está deshabilitado mientras no se use una '+
       '«vista de lista» determinada',()=>{
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
            .refresh()
            .viewControls()
            .viewControlsNew()
            .fill({
                name:name
            })
            .save();

        list.row(name+' 01')
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

