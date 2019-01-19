exports.config={
    specs:[
        './test/specs/**/*.js'
    ]
  , suites:{
        home:['./test/specs/home.js']
      , login:['./test/specs/login.js']
    }
  , exclude:[]
  , maxInstances:1
  , capabilities:[{
        maxInstances:1
      , browserName:'chrome'
//    },{
//        maxInstances:1
//      , browserName:'firefox'
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

