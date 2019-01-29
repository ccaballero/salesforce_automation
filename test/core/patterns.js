module.exports={
    login:{
        container:'#theloginform'
      , form:{
            username:'#username'
          , password:'#password'
          , submit:'#Login'
        }
    }
  , launcher:{
        base:'div.oneWorkspace'
      , container:'div.modal-container'
      , menu:'button.salesforceIdentityAppLauncherHeader'
      , close:'div.modal-container button[title="Close this window"]'
      , item:'a[title="{0}"]'
    }
  , list:{
        container:'div.forceListViewManager'
      , modal:'div.DESKTOP.open.active'
      , banner:'div[role="banner"] nav[role="navigation"]>ol>li>span'
      , new:'a[title="New"]'
      , search:'div.slds-page-header input[type="search"]'
      , controls:'button[title="{0}"]'
      , item:'//span[text()="{0}"]/parent::a'
    }
  , new:{
        container:'div.modal-container'
      , input:'//span[text()="{0}"]/parent::label'+
            '/following-sibling::input'
      , select:'//span[text()="Product Family"]/parent::span'+
            '/following-sibling::div/child::div/child::div/child::div/child::a'
      , textarea:'//span[text()="{0}"]/parent::label'+
            '/following-sibling::textarea'
      , option:'//a[text()="{0}"]'
      , save:'button[title="Save"]'
      , saveandnew:'button[title="Save & New"]'
      , cancel:'button[title="Cancel"]'
      , close:'button[title="Close this window"]'
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

