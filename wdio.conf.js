exports.config={
    specs:[
        './test/specs/**/*.js'
    ]
  , suites:{
        init:['./test/specs/init.js']
      , login:['./test/specs/login.js']
      , products:[
            './test/specs/products/new.start.js'
          , './test/specs/products/new.functional.js'
          , './test/specs/products/new.acceptance.js'
          , './test/specs/products/new.negative.js'
          , './test/specs/products/new.domain.js'
        ]
      , functional:[
            './test/specs/products/new.functional.js'
        ]
      , acceptance:[
            './test/specs/products/new.acceptance.js'
        ]
      , negative:[
            './test/specs/products/new.negative.js'
        ]
      , domain:[
            './test/specs/products/new.domain.js'
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

