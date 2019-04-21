const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('026.F013.js',()=>{
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

