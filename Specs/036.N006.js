const expect=require('chai').expect
  , config=require('../config')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , credentials=config.credentials.administrator;

describe('036.N006.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('N006 - Mensaje «No hay elementos para mostrar» cuando ningún '+
        'producto ha sido registrado',()=>{
        let list=Launcher.app('Products')
          , message=list.emptyMessage();

        expect(message[0])
            .to.equal('You haven\'t viewed any products recently.');
        expect(message[1]).to.equal('Try switching list views.');
    });

    after(()=>{
        Profile.profile().logout();
    });
});

