const expect=require('chai').expect
  , config=require('../../config')
  , Common=require('../../Utils/Common')
  , Pattern=require('../../Utils/Pattern')
  , Launcher=require('../../PageObjects/Launcher.po')
  , Login=require('../../PageObjects/Login.po')
  , Profile=require('../../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('products/02.new.functional.js',()=>{
    var name='products.new.functional'
      , active=true
      , code='FUNCTIONAL'
      , family='--None--'
      , quantity=true
      , revenue=true
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F076 - Clic en el botón «Nuevo», lanza el formulario de creación de '+
        'lista de precios',()=>{
        let modal_new=Launcher.app('Price Books').new('PriceBook');

        expect(Common.select(Pattern.modal.container)).to.not.equal(null);

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

