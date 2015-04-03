 /*jshint unused:false */

/***************

  This file allow to configure a proxy system plugged into BrowserSync
  in order to redirect backend requests while still serving and watching
  files from the web project

  IMPORTANT: The proxy is disabled by default.

  If you want to enable it, watch at the configuration options and finally
  change the `module.exports` at the end of the file

***************/

'use strict';

var httpProxy = require('http-proxy');
var chalk = require('chalk');
// Added - Taken from Dr Mike's example
var dateformat = require('dateformat');

// Added
var enableProxy  = true;

/*
 * Location of your backend server
 */

// Added
var proxyTarget  = 'http://localhost:3000/';
var proxyContext = new RegExp('/api/');

var proxy = httpProxy.createProxyServer({
  target: proxyTarget
});

proxy.on('error', function(error, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  console.error(chalk.red('[Proxy]'), error);
});

/*
 * The proxy middleware is an Express middleware added to BrowserSync to
 * handle backend request and proxy them to your backend.
 */
function proxyMiddleware(req, res, next) {
  // check if url is a candidate for proxying
  if (proxyContext.test(req.url)) {
    var time = '['+chalk.grey(dateformat(new Date(), 'HH:MM:ss'))+']';
    var prefix = chalk.magenta('http-proxy:');
    var requestUrl = chalk.green(req.method + ' ' + req.url);
    console.log(time, prefix, requestUrl);
    proxy.web(req, res);
  }
  else {
    next();
  }

  /*
   * This test is the switch of each request to determine if the request is
   * for a static file to be handled by BrowserSync or a backend request to proxy.
   *
   * The existing test is a standard check on the files extensions but it may fail
   * for your needs. If you can, you could also check on a context in the url which
   * may be more reliable but can't be generic.
   */
  // if (/\.(html|css|js|png|jpg|jpeg|gif|ico|xml|rss|txt|eot|svg|ttf|woff|woff2|cur)(\?((r|v|rel|rev)=[\-\.\w]*)?)?$/.test(req.url)) {
  //   next();
  // } else {
  //   proxy.web(req, res);
  // }
}

/*
 * This is where you activate or not your proxy.
 *
 * The first line activate if and the second one ignored it
 */

// module.exports = [proxyMiddleware];

// module.exports = function() {
//   return [];

// Added
module.exports = function() {
  console.log('enableProxy: ' + enableProxy);
  return enableProxy ? [proxyMiddleware] : [];  
};
