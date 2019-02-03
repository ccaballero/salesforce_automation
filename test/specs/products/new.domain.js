const expect=require('chai').expect
  , config=require('../../config')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , View=require('../../pages/view.po')
  , credentials=config.credentials.administrator;

describe('products/new.domain.js',()=>{
    var name='products.new.domain'
      , active=true
      , code='DOMAIN'
      , family='--None--'
      , quantity=true
      , revenue=true
      , description='PRODUCT DESCRIPTION';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('D001 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Nombre del producto» tiene 0 caracteres',()=>{
        let modal_new=Launcher.app('Products').new();

        modal_new
            .fill({
                name:''
              , active:active
              , code:code
              , family:family
              , quantity:quantity
              , revenue:quantity
              , description:description
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
          , _name=name.substring(0,1)
          , message=modal_new
                .fill({
                    name:_name
                  , active:active
                  , code:code
                  , family:family
                  , quantity:quantity
                  , revenue:revenue
                  , description:description
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+_name+'" was created.');

        message.close();

        new View()
            .details()
            .options()
            .delete()
            .confirm();
    });

    it('D003 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Nombre del producto» tiene 255 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _name=name.substring(0,5).repeat(51)
          , message=modal_new
                .fill({
                    name:_name
                  , active:active
                  , code:code
                  , family:family
                  , quantity:quantity
                  , revenue:revenue
                  , description:description
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+_name+'" was created.');

        message.close(true);

        new View()
            .details()
            .options()
            .delete()
            .confirm();
    });

    it('D004 - Formulario «Crear Producto» no realiza el registro, cuando el '+
        'campo «Nombre del producto» tiene 256 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _name=name.substring(0,5).repeat(51)+'_';

        modal_new.name=_name;

        expect(modal_new.name.length).to.equal(255);
        expect(modal_new.name).to.equal(_name.substring(0,255));

        modal_new.close();
    });

    it('D005 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Código del producto» tiene 0 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:name
                  , active:active
                  , code:''
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

    it('D006 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Código del producto» tiene 255 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _code=code.substring(0,5).repeat(51)
          , message=modal_new
                .fill({
                    name:name
                  , active:active
                  , code:_code
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

    it('D007 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Código del producto» tiene 256 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _code=code.substring(0,5).repeat(51)+'_';

        modal_new.code=_code;

        expect(modal_new.code.length).to.equal(255);
        expect(modal_new.code).to.equal(_code.substring(0,255));

        modal_new.close();
    });

    it('D008 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 0 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:name
                  , active:active
                  , code:code
                  , family:family
                  , quantity:quantity
                  , revenue:revenue
                  , description:''
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

    it('D009 - Formulario «Crear Producto» realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 4000 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _description=description.substring(0,5).repeat(800)
          , message=modal_new
                .fill({
                    name:name
                  , active:active
                  , code:code
                  , family:family
                  , quantity:quantity
                  , revenue:revenue
                  , description:_description
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

    it('D010 - Formulario «Crear Producto» no realiza el registro, cuando el '+
       'campo «Descripción del producto» tiene 4001 caracteres',()=>{
        let modal_new=Launcher.app('Products').new()
          , _description=description.substring(0,5).repeat(800)+'_';

        modal_new.description=_description;

        expect(modal_new.description.length).to.equal(4000);
        expect(modal_new.description).to.equal(_description.substring(0,4000));

        modal_new.close();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

