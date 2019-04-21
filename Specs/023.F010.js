const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , List=require('../PageObjects/List.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('023.F010.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F010 - «Mostrar como» posee los elementos: «Tabla» y '+
        '«Kanban»',()=>{
        Launcher.app('Products')
            .displayAs('Table');

        expect(Common.exist(
            List.patterns.item.format('Table'))).to.equal(true);
        expect(Common.exist(
            List.patterns.item.format('Kanban'))).to.equal(true);
    });

    after(()=>{
        Profile.profile().logout();
    });
});

