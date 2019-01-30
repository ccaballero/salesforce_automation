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
          , name='TEST '+'D003 '.repeat(50)
          , message=modal_new
                .fill({
                    name:name
                  , active:true
                  , code:'D003'
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
          , name='TEST '+'D004 '.repeat(50)+'$';

        modal_new.name=name;

        expect(modal_new.name.length).to.equal(255);
        expect(modal_new.name).to.equal(name.substring(0,255));

        modal_new.close();
    });

    it('D005 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Código del producto» tiene 0 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , code=''
          , message=modal_new
                .fill({
                    name:'D005'
                  , active:true
                  , code:code
                  , family:'--None--'
                  , quantity:true
                  , revenue:true
                  , year:2019
                  , description:'TEST D005 D005 D005'
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "D005" was created.');

        message.close();
    });

    it('D006 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Código del producto» tiene 255 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , code='TEST '+'D006 '.repeat(50)
          , message=modal_new
                .fill({
                    name:'D006'
                  , active:true
                  , code:code
                  , family:'--None--'
                  , quantity:true
                  , revenue:true
                  , year:2019
                  , description:'TEST D006 D006 D006'
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "D006" was created.');

        message.close();
    });

    it('D007 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Código del producto» tiene 256 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , code='TEST '+'D007 '.repeat(50)+'$';

        modal_new.code=code;

        expect(modal_new.code.length).to.equal(255);
        expect(modal_new.code).to.equal(code.substring(0,255));

        modal_new.close();
    });

    it('D008 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 0 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , description=''
          , message=modal_new
                .fill({
                    name:'D008'
                  , active:true
                  , code:'D008'
                  , family:'--None--'
                  , quantity:true
                  , revenue:true
                  , year:2019
                  , description:description
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "D008" was created.');

        message.close();
    });

    it('D009 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 4000 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , description='TEST '+'D009 '.repeat(799)
          , message=modal_new
                .fill({
                    name:'D009'
                  , active:true
                  , code:'D009'
                  , family:'--None--'
                  , quantity:true
                  , revenue:true
                  , year:2019
                  , description:description
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "D009" was created.');

        message.close();
    });

    it('D010 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 4001 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , description='TEST '+'D010 '.repeat(799)+'$';

        modal_new.description=description;

        expect(modal_new.description.length).to.equal(4000);
        expect(modal_new.description).to.equal(description.substring(0,4000));

        modal_new.close();
    });
});

