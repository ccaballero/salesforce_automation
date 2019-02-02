module.exports={
    login:{
        container:'#theloginform'
      , form:{
            username:'#username'
          , password:'#password'
          , submit:'#Login'
        }
    }
  , profile:{
        container:'div.userProfilePanel.active'
      , menu:'button.branding-userProfile-button'
      , logout:'a.logout'
    }
  , setup:{
        container:'div.setupcontent'
    }
  , launcher:{
        container:'div.modal-container'
      , menu:'//span[text()="App Launcher"]/ancestor::button'
      , close:'div.modal-container button[title="Close this window"]'
      , item:'div.modal-container a[title="{0}"]'
    }
  , list:{
        container:'div.forceListViewManager'
      , banner:'div[role="banner"] nav[role="navigation"]>ol>li>span'
      , new:'div.forceListViewManager a[title="New"]'
      , search:'div.slds-page-header input[type="search"]'
      , controls:'button[title="{0}"]'
      , item:'//span[text()="{0}"]/parent::a'
    }
  , row:{
        options:'//a[text()="{0}"]/ancestor::tr/td[last()]/span/div/a'
      , delete:'div.actionMenu a[title="Delete"]'
    }
  , modal:{
        container:'div.modal-container'
      , input:'//span[text()="{0}"]/parent::label'+
            '/following-sibling::input'
      , select:'//span[text()="Product Family"]/parent::span'+
            '/following-sibling::div/child::div/child::div/child::div/child::a'
      , textarea:'//span[text()="{0}"]/parent::label'+
            '/following-sibling::textarea'
      , option:'//a[text()="{0}"]'
      , save:'div.modal-container button[title="Save"]'
      , saveandnew:'div.modal-container button[title="Save & New"]'
      , cancel:'div.modal-container button[title="Cancel"]'
      , close:'div.modal-container button[title="Close this window"]'
      , delete:'div.modal-container button[title="Delete"]'
      , messagevalidation:'div.modal-container span.genericError'
      , errorslist:'ul.errorsList li:nth-child(1)'
    }


  , view:{
        container:'div.oneRecordHomeFlexipage'
    }
  , messages:{
        container:'div.slds-notify'
      , result:'div.slds-notify>lightning-icon>span.slds-assistive-text'
      , message:'div.slds-notify>div.toastContent span.toastMessage'
      , close:'div.slds-notify button.toastClose'
    }
  , listview:{
        current:'h1>div.triggerLink>div>span.triggerLinkText.selectedListView'
      , select:'h1>div.triggerLink>div>a.slds-button'
      , views:'div.scroller>ul[role="listbox"]>li[role="presentation"]'+
            '>a[role="option"]>span'
      , change:'//span[text()="{0}"]/parent::a[@role="option"]'
    }
  , table:{
        counter:'table.slds-table>tbody>tr'
      , headers:'table.slds-table>thead>tr>th>div>a>span:nth-child(2)'
      , sort:'//span[text()="{0}"]/parent::a'
      , headermenu:'//span[text()="{0}"]/parent::a'+
            '/following-sibling::div/button'
      , headeritem:'//span[text()="{0}"]/parent::a/following-sibling::div'+
            '/div/ul/li/a/span[text()="{1}"]/parent::a'
      , row:'//table[contains(@class,"slds-table")]/tbody/tr[{0}]'+
            '/*[contains(@class,"cellContainer")]/span/*[1]/text()'
      , rowselect:'//table[contains(@class,"slds-table")]'+
            '/tbody/tr[3]/th/span/a'
    }
};

