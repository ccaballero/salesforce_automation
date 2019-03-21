const expect=require('chai').expect
  , config=require('../../config')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , credentials=config.credentials.administrator;

describe('products/10.display.functions.js',()=>{
    var name='products.display.functions'
      , active=true
      , code='FUNCTIONS'
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F013 - Botón «Actualizar», reenvía las peticiones de consulta al '+
       'servidor',()=>{
        let list=Launcher.app('Products');

        expect(list.updatedInfo()).to.equal('Updated a few seconds ago');
        expect(list.updatedInfo(65000)).to.equal('Updated a minute ago');

        list.refresh();

        expect(list.updatedInfo(5000)).to.equal('Updated a few seconds ago');
    });

    after(()=>{
        Profile.profile().logout();
    });
});

