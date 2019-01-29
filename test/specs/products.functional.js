const expect=require('chai').expect
  , config=require('../config')
  , commons=require('../core/commons')
  , patterns=require('../core/patterns')
  , Launcher=require('../pages/launcher.po')
  , List=require('../pages/list.po')
  , Login=require('../pages/login.po')
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

    it('F002 - Clic en el botón «Nuevo», lanza el formulario de creación '+
        'de producto',()=>{
        let modal_new=Launcher.app('Products').new();

        expect(browser.element(patterns.new.container).value).to.not.be.null;

        modal_new.close();
    });

    it('F003 - Producto es registrado con los valores obligatorios '+
        'establecidos después de accionado el botón «Guardar y nuevo»',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:'TEST F003'
                  , year:2019
                })
                .saveandnew();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "TEST F003" was created.');

        modal_new.close();
    });

    it('F004 - Formulario «Crear Producto» se cierra al accionar el botón '+
       '«Cancelar»',()=>{
        let modal_new=Launcher.app('Products').new().cancel();

        expect(browser.element(patterns.new.container).value).to.be.null;
    });

    it('F005 - Formulario «Crear Producto» se cierra al accionar el '+
        'botón «Cerrar esta ventana (X)»',()=>{
        let modal_new=Launcher.app('Products').new().close();

        expect(browser.element(patterns.new.container).value).to.be.null;
    });

    it('F006 - Mensaje «Se creó Producto "<Nombre de Producto>"» se '+
        'muestra después de registrado un producto',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:'TEST F006'
                  , active:true
                  , code:'F006'
                  , family:'--None--'
                  , quantity:true
                  , revenue:true
                  , year:2019
                  , description:'TEST F006 F006 F006'
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "TEST F006" was created.');

        message.close();
    });
});

