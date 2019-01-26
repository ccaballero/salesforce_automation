module.exports={
    timeout:30000
  , credentials:{
        administrator:{
            username:''
          , password:''
        }
    }
  , browserstack:{
        user:''
      , key:''
      , capabilities:[{
            os:'OS X'
          , os_version:'Mojave'
          , browserName:'Chrome'
          , browser_version:'72.0 beta'
        }]
    }
  , url:{
      login:'https://login.salesforce.com'
    }
};

