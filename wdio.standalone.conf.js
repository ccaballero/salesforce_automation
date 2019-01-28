var config=require('./wdio.conf').config;

config.services=['selenium-standalone'];
config.capabilities=[{
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
          , 'intl.accept_languages':'en'
        }
    }
}];

exports.config=config;

