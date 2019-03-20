const expect=require('chai').expect
  , config=require('../../config')
  , Launcher=require('../../pages/launcher.po')
  , Login=require('../../pages/login.po')
  , Profile=require('../../pages/profile.po')
  , View=require('../../pages/view.po')
  , credentials=config.credentials.administrator;

describe('products/03.new.acceptance.js',()=>{
    var name='products.new.acceptance';

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('A001 - Producto es registrado con los valores obligatorios '+
       'establecidos después de accionado el botón «Guardar»',()=>{
        let modal_new=Launcher.app('Products').new()
          , message=modal_new
                .fill({
                    name:name
                })
                .save();

        expect(message.result()).to.equal('success');
        expect(message.text()).to.equal('Product "'+name+'" was created.');

        message.close();

        let view=new View();

        expect(view.title()).to.equal(name);
        expect(view.subtitle('Product Code')).to.equal('');
        expect(view.subtitle('Product Family')).to.equal('');

        view.details();

        expect(view.data('Product Name')).to.equal(name);
        expect(view.checked('Active')).to.equal(false);
        expect(view.data('Product Code')).to.equal('');
        expect(view.data('Product Family')).to.equal('');
        expect(view.checked('Quantity Scheduling Enabled')).to.equal(false);
        expect(view.checked('Revenue Scheduling Enabled')).to.equal(false);
        expect(view.data('Product Description')).to.equal('');

        view.options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

