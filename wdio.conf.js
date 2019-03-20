exports.config={
    specs:[
        './specs/**/*.js'
    ]
  , suites:{
        init:['./specs/init.js']
      , login:['./specs/login.js']
      , products:['./specs/products/*.js']
      , functional:['./specs/products/*.functional.js']
      , acceptance:['./specs/products/*.acceptance.js']
      , negative:['./specs/products/*.negative.js']
      , domain:['./specs/products/*.domain.js']
      , temp:['./specs/products/11.show.negative.js']
    }
  , exclude:[]
  , maxInstances:1
  , sync:true
  , logLevel:'data'
  , coloredLogs:true
  , deprecationWarnings:true
  , bail:0
  , screenshotPath:'./errors/'
  , baseUrl:'https://www.salesforce.com/'
  , waitforTimeout:30000
  , connectionRetryTimeout:90000
  , connectionRetryCount:3
  , framework:'mocha'
  , reporters:['spec']
  , mochaOpts:{
        ui:'bdd'
      , timeout:500000
    }
};

