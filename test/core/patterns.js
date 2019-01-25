module.exports={ login:{ container:'#theloginform'
      , form:{
            username:'#username'
          , password:'#password'
          , submit:'#Login'
        }
    }
  , home:{
        container:'.oneWorkspace'
      , applauncher:{
            menu:'button.salesforceIdentityAppLauncherHeader'
          , container:'div.modal-container'
          , item:'a[title="{0}"]'
        }
    }
  , list:{
        container:'div.forceListViewManager'
      , create:'a[title="New"]'
      , modal:'div.DESKTOP.open.active'
    }
  , form:{
        input:'//span[contains(text(),"{0}")]/parent::label'+
            '/following-sibling::input'
      , select:'//span[contains(text(),"Product Family")]/parent::span'+
            '/following-sibling::div/child::div/child::div/child::div/child::a'
      , textarea:'//span[contains(text(),"{0}")]/parent::label'+
            '/following-sibling::textarea'
      , option:'//a[contains(text(),"{0}")]'
      , save:'button[title="Save"]'
      , saveandnew:'button[title="Save & New"]'
      , cancel:'button[title="Cancel"]'
      , close:'button[title="Close this window"]'
    }
  , messages:{
        successful:'span[contains(text(),"{0}")]'
    }
};

