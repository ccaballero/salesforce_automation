exports.config={
    specs:[
        './test/specs/**/*.js'
    ]
  , suites:{
        init:['./test/specs/init.js']
      , login:['./test/specs/login.js']
      , products:[
            './test/specs/products.functional.js'
          , './test/specs/products.acceptance.js'
          , './test/specs/products.negative.js'
          , './test/specs/products.domain.js'
        ]
    }
  , exclude:[]
  , maxInstances:1
  , sync:true
  , logLevel:'data'
  , coloredLogs:true
  , deprecationWarnings:true
  , bail:1
  , screenshotPath:'./errors/'
  , baseUrl:'https://www.salesforce.com/'
  , waitforTimeout:30000
  , connectionRetryTimeout:90000
  , connectionRetryCount:3
  , framework:'mocha'
  , reporters:['spec']
  , mochaOpts:{
        ui:'bdd'
      , timeout:150000
    }
};

