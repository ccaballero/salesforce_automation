exports.config={
    specs:[
        './test/specs/**/*.js'
    ]
  , suites:{
        init:['./test/specs/init.js']
      , login:['./test/specs/login.js']
      , products:['./test/specs/products/*.js']
      , functional:[
            './test/specs/products/*.functional.js'
        ]
      , acceptance:[
            './test/specs/products/*.acceptance.js'
        ]
      , negative:[
            './test/specs/products/*.negative.js'
        ]
      , domain:[
            './test/specs/products/*.domain.js'
        ]
      , temp:[
            './test/specs/products/search.negative.js'
        ]
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

