const expect=require('chai').expect
  , config=require('../config')
  , commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Launcher=require('../pages/launcher.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
  , credentials=config.credentials.administrator;

describe('products.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('A001 - Producto es registrado con los valores obligatorios '+
       'establecidos después de accionado el botón «Guardar»',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:'TEST A001'
                  , year:2019
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "TEST A001" was created.');

        message.close();
    });
});

