/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      optional: [ 'es7.asyncFunctions' ]
    }
  });

  app.import('vendor/babel-browser-polyfill.js', { prepend: true });

  return app.toTree();
};
