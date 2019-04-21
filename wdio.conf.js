exports.config={
    specs:[
        './Specs/*.js'
    ]
  , suites:(()=>{
        let base='./Specs/'
          , dict={
                A:[3,35,49,51,52,56,69,80,95,102,110,117,122,128,156,169,171,
                    172,173,180,199,208,215,225,232,237,242,266,276,295,299,
                    305,313]
              , N:[7,22,27,29,33,36,54,60,72,85,86,99,103,114,132,143,148,150,
                    154,175,179,183,204,205,212,216,229,245,269,293,302,309]
              , D:[9,10,11,12,13,14,15,16,17,18,62,63,64,65,66,67,74,75,88,89,
                    90,91,92,93,134,135,136,137,138,139,140,185,186,187,188,
                    189,190,191,192,193,194,247,248,249,250,251,252,253,254,
                    255,256,257,258,259,260,261,262,263,271,272,273,274,280,
                    281,283]
              , a:0
              , n:0
              , d:0
              , f:0
            }
          , list={
                init:[base+'init.js']
              , login:[base+'login.js']
            };

        for(let i=1;i<=315;i++){
            if(dict.A.includes(i)){
                list['A'+parseInt(++dict.a).toString().padStart(3,'0')]=
                    [base+parseInt(i).toString().padStart(3,'0')+'.A'+
                        parseInt(dict.a).toString().padStart(3,'0')+'.js'];
            }else if(dict.N.includes(i)){
                list['N'+parseInt(++dict.n).toString().padStart(3,'0')]=
                    [base+parseInt(i).toString().padStart(3,'0')+'.N'+
                        parseInt(dict.n).toString().padStart(3,'0')+'.js'];
            }else if(dict.D.includes(i)){
                list['D'+parseInt(++dict.d).toString().padStart(3,'0')]=
                    [base+parseInt(i).toString().padStart(3,'0')+'.D'+
                        parseInt(dict.d).toString().padStart(3,'0')+'.js'];
            }else{
                list['F'+parseInt(++dict.f).toString().padStart(3,'0')]=
                    [base+parseInt(i).toString().padStart(3,'0')+'.F'+
                        parseInt(dict.f).toString().padStart(3,'0')+'.js'];
            }
        }

        return list;
    })()
  , exclude:[]
  , maxInstances:1
  , sync:true
  , logLevel:'data'
  , coloredLogs:true
  , deprecationWarnings:true
  , bail:0
  , screenshotPath:'./Errors/'
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

