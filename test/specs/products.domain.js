const expect=require('chai').expect
  , config=require('../config')
  , commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Launcher=require('../pages/launcher.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
  , credentials=config.credentials.administrator;

describe('products.domain.js',()=>{
    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('D001 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Nombre del producto» tiene 0 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , name=''

        modal_new
            .fill({
                name:name
              , active:true
              , code:'D001'
              , family:'--None--'
              , quantity:true
              , revenue:true
              , year:2019
              , description:'TEST D001 D001 D001'
            })
            .save(false);

        expect(modal_new.messagevalidation())
            .to.equal('Review the errors on this page.');
        expect(modal_new.errorslist())
            .to.equal('These required fields must be completed: Product Name');

        modal_new.close();
    });

    it('D002 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Nombre del producto» tiene 1 carácter',()=>{
        let modal_new=Launcher.app('Products').new()
          , name='D'
          , message=modal_new
                .fill({
                    name:name
                  , active:true
                  , code:'D002'
                  , family:'--None--'
                  , quantity:true
                  , revenue:true
                  , year:2019
                  , description:'TEST D002 D002 D002'
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+name+'" was created.');

        message.close();
    });

    it('D003 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Nombre del producto» tiene 255 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , name='TEST '+'D003 '.repeat(49)
          , message=modal_new
                .fill({
                    name:name
                  , active:true
                  , code:'D002'
                  , family:'--None--'
                  , quantity:true
                  , revenue:true
                  , year:2019
                  , description:'TEST D003 D003 D003'
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+name+'" was created.');

        message.close();
    });

    it('D004 - Formulario «Crear Producto» no realiza el registro, cuando el '+
        'campo «Nombre del producto» tiene 256 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , name='TEST '+'D004 '.repeat(49)+'$';

        modal_new
            .fill({
                name:name
              , active:true
              , code:'D004'
              , family:'--None--'
              , quantity:true
              , revenue:true
              , year:2019
              , description:'TEST D004 D004 D004'
            })
            .save(false);

        expect(modal_new.messagevalidation())
            .to.equal('Review the errors on this page.');
        expect(modal_new.errorslist())
            .to.equal('These required fields must be completed: Product Name');

        modal_new.close();
    });

    it('D005 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Código del producto» tiene 0 caracteres',()=>{
    });
    it('D005 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Código del producto» tiene 255 caracteres',()=>{
    });
    it('D005 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Código del producto» tiene 256 caracteres',()=>{
    });
    it('D005 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 0 caracteres',()=>{
    });
    it('D005 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 4000 caracteres',()=>{
    });
    it('D005 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 4001 caracteres',()=>{
    });
});

