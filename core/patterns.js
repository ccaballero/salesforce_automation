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
      , empty:'div.emptyContent p'
      , search:'div.slds-page-header input[type="search"]'
      , clearSearch:'button[data-element-id="searchClear"]'
      , controls:'button[title="{0}"]'
      , item:'//span[text()="{0}"]/parent::a'
      , element:'//a[text()="{0}"]'
      , editActions:'//span[text()="{0}"]/parent::button'
      , updated:'div.forceListViewManagerHeader>div:nth-child(2)>div>'+
            'p span:nth-child(2)'
    }
  , row:{
        counter:'table.slds-table>tbody tr'
      , options:'//a[text()="{0}"]/ancestor::tr/td[last()]/span/div/a'
      , delete:'div.actionMenu a[title="Delete"]'
    }
  , card:{
        counter:'//span[text()="{0}"]/ancestor::h2/following-sibling::div'+
            '/descendant::ul/child::li'
      , options:'//a[text()="{0}"]/parent::p/following-sibling::button'
      , delete:'div.actionMenu a[title="Delete"]'
    }
  , modal:{
        container:'div.modal-container'
      , input:'//span[text()="{0}"]/parent::label'+
            '/following-sibling::input'
      , select:'//span[text()="{0}"]/parent::span'+
            '/following-sibling::div/child::div/child::div/child::div/child::a'
      , textarea:'//span[text()="{0}"]/parent::label'+
            '/following-sibling::textarea'
      , option:'//a[text()="{0}"]'
      , save:'div.modal-container button[title="Save"]'
      , saveAndNew:'div.modal-container button[title="Save & New"]'
      , cancel:'div.modal-container button[title="Cancel"]'
      , close:'div.modal-container button[title="Close this window"]'
      , delete:'div.modal-container button[title="Delete"]'
      , messageValidation:'div.modal-container span.genericError'
      , errorsList:'ul.errorsList li:nth-child(1)'
    }
  , messages:{
        container:'div.slds-notify'
      , result:'div.slds-notify>lightning-icon>span.slds-assistive-text'
      , message:'div.slds-notify>div.toastContent span.toastMessage'
      , close:'div.slds-notify button.toastClose'
    }
  , view:{
        container:'div.region-main'
      , title:'header h1>span'
      , subtitle:'//span[text()="{0}"]/parent::div/child::div/child::div/span'
      , options:'ul.branding-actions>li.oneActionsDropDown a'
      , delete:'div.actionMenu a[title="Delete"]'
      , tabs:'//span[text()="{0}"]/ancestor::a'
      , details:'//span[text()="{0}"]/parent::div/following-sibling::div'+
            '/child::span/child::span'
      , checked:'//span[text()="{0}"]/parent::div/following-sibling::div'+
            '/child::span/child::span/child::img'
    }
  , listview:{
        title:'div[role="banner"] h1 span:nth-child(2)'
    }
  , newlistview:{
        input:'//label[text()="{0}"]/following-sibling::div/input'
      , save:'button.test-confirmButton'
    }

/*  , table:{
        headers:'table.slds-table>thead>tr>th>div>a>span:nth-child(2)'
      , sort:'//span[text()="{0}"]/parent::a'
      , headerMenu:'//span[text()="{0}"]/parent::a'+
            '/following-sibling::div/button'
      , headerItem:'//span[text()="{0}"]/parent::a/following-sibling::div'+
            '/div/ul/li/a/span[text()="{1}"]/parent::a'
      , row:'//table[contains(@class,"slds-table")]/tbody/tr[{0}]'+
            '/*[contains(@class,"cellContainer")]/span/*[1]/text()'
      , rowSelect:'//table[contains(@class,"slds-table")]'+
            '/tbody/tr[3]/th/span/a'
    }*/
};

