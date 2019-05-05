const expect=require('chai').expect
  , config=require('../config')
  , Common=require('../Utils/Common')
  , Launcher=require('../PageObjects/Launcher.po')
  , Login=require('../PageObjects/Login.po')
  , Profile=require('../PageObjects/Profile.po')
  , View=require('../PageObjects/View.po')
  , credentials=config.credentials.administrator;

describe('069.A007.js',()=>{
    var name='products.list.acceptance'
      , active=true;

    before(()=>{
        Login.loginAs(credentials.username,credentials.password);
    });

    it('A007 - Precio de producto para una lista de precios es registrado '+
        'después de accionado el botón «Guardar»',()=>{
        Launcher.app('Price Books')
            .new()
            .fill({
                name:name
              , active:active
            })
            .save();

        let list=Launcher.app('Products');

        Common.refresh();

        let message1=list.new()
                .fill({
                    name:name
                  , active:active
                })
                .save();

        expect(message1.result()).to.equal('success');
        expect(message1.text()).to.equal('Product "'+name+'" was created.');

        message1.close();

        let view=new View().related();

        let message2=view.addStandardPrice()
                .fill({
                    listprice:1
                })
                .save();

        expect(message2.result()).to.equal('success');
        expect(message2.text()).to.equal('Price Book Entry was created.');

        message2.close();

        view.addToPriceBook()
            .fill({})
            .next(false)
            .cancel();

        view.options()
            .delete()
            .confirm();

        Launcher.app('Price Books')
            .rowByIndex(1)
            .options()
            .delete()
            .confirm();
    });

    after(()=>{
        Profile.profile().logout();
    });
});

