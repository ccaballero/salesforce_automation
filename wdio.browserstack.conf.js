const {browserstack}=require('./test/config');

var config=require('./wdio.conf').config;

config.services=['browserstack'];
config.capabilities=browserstack.capabilities;
config.user=browserstack.user;
config.key=browserstack.key;

exports.config=config;

