// eslint-disable-next-line import/no-extraneous-dependencies
const FtpDeploy = require('ftp-deploy');
const config = require('./config');

const ftpDeploy = new FtpDeploy();

const deployConfig = {
  user: config.ftp.user,
  password: config.ftp.password,
  host: 'ftp.powweb.com',
  port: 21,
  localRoot: './dist',
  remoteRoot: '/htdocs/',
  include: ['*', '**/*'],
  exclude: ['dist/**/*.map'],
  deleteRemote: true,
  forcePasv: true,
};

// use with promises
ftpDeploy.deploy(deployConfig)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err));
