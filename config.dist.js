module.exports={
    timeout:30000
  , url:{
      login:'https://login.salesforce.com'
    }
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
  , docker:{
        host:'127.0.0.1'
      , port:4444
    }
};

