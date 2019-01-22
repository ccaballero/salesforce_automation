exports.config={
    specs:[
        './test/specs/**/*.js'
    ]
  , suites:{
        home:['./test/specs/home.js']
      , login:['./test/specs/login.js']
      , products:['./test/specs/products.js']
    }
  , exclude:[]
  , maxInstances:1
  , capabilities:[{
        maxInstances:1
      , browserName:'chrome'
      , chromeOptions:{
            args:[
                'disable-web-security'
              , 'disable-infobars'
              , 'disable-popup-blocking'
              , 'disable-notifications'
            ]
          , prefs:{
                'profile.default_content_settings.popups':2
              , 'profile.default_content_settings.notifications':2
            }
        }
//  },{
//      maxInstances:1
//    , browserName:'firefox'
    }]
  , sync:true
  , logLevel:'silent'
  , coloredLogs:true
  , deprecationWarnings:true
  , bail:1
  , screenshotPath:'./errors/'
  , baseUrl:'https://www.salesforce.com/'
  , waitforTimeout:300000
  , connectionRetryTimeout:90000
  , connectionRetryCount:3
  , services:['selenium-standalone']
  , framework:'mocha'
  , reporters:['spec']
  , mochaOpts:{
        ui:'bdd'
      , timeout:150000
    }
};

