const expect=require('chai').expect
  , config=require('../config')
  , commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Launcher=require('../pages/launcher.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
  , Profile=require('../pages/profile.po')
  , credentials=config.credentials.administrator;

describe('products.functional.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F001 - Iniciador de Aplicación de salesforce muestra el enlace a '+
       '«Productos»',()=>{
        let launcher=new Launcher().open();

        expect(launcher.exists('Products')).to.equal(true);

        launcher.close();
    });

    after(()=>{
        new Profile().logout();
    });
});

