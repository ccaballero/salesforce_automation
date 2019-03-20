const expect=require('chai').expect
  , config=require('../../config')
  , Commons=require('../../core/commons')
  , patterns=require('../../core/patterns')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , View=require('../../pages/view.po')
  , credentials=config.credentials.administrator;

describe('products/02.new.functional.js',()=>{
    var name='products.new.functional'
      , active=true
      , code='FUNCTIONAL'
      , family='--None--'
      , quantity=true
      , revenue=true
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('F002 - Clic en el botón «Nuevo», lanza el formulario de creación '+
        'de producto',()=>{
        let modal_new=Launcher.app('Products').new();

        expect(Commons.select(patterns.modal.container)).to.not.equal(null);

        modal_new.close();
    });

    it('F003 - Producto es registrado con los valores obligatorios '+
        'establecidos después de accionado el botón «Guardar y nuevo»',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:name
                })
                .saveAndNew();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+name+'" was created.');

        modal_new.close();

        new View()
            .details()
            .options()
            .delete()
            .confirm();
    });

    it('F004 - Formulario «Crear Producto» se cierra al accionar el botón '+
       '«Cancelar»',()=>{
        Launcher.app('Products')
            .new()
            .cancel();

        expect(Commons.select(patterns.modal.container)).to.equal(null);
    });

    it('F005 - Formulario «Crear Producto» se cierra al accionar el '+
        'botón «Cerrar esta ventana (X)»',()=>{
        Launcher.app('Products')
            .new()
            .close();

        expect(Commons.select(patterns.modal.container)).to.equal(null);
    });

    it('F006 - Mensaje «Se creó Producto "<Nombre de Producto>"» se '+
        'muestra después de registrado un producto',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:name
                  , active:active
                  , code:code
                  , family:family
                  , quantity:quantity
                  , revenue:revenue
                  , description:description
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+name+'" was created.');

        message.close();

        new View()
            .details()
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

