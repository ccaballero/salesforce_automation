const expect=require('chai').expect
  , config=require('../../config')
  , commons=require('../../core/commons')
  , patterns=require('../../core/patterns')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , credentials=config.credentials.administrator;

describe('products/08.display.start.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F010 - «Mostrar como» posee los elementos: «Tabla» y '+
        '«Kanban»',()=>{
        Launcher.app('Products')
            .displayAs('Table');

        expect(commons.exist(
            patterns.list.item.format('Table'))).to.equal(true);
        expect(commons.exist(
            patterns.list.item.format('Kanban'))).to.equal(true);
    });

    after(()=>{
        Profile.profile().logout();
    });
});

