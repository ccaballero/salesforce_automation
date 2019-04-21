module.exports={
    list:{
        banner:'div[role="banner"] nav[role="navigation"]>ol>li>span'
    }
  , table:{
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
    }
};

