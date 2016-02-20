/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // http://discuss.emberjs.com/t/why-is-it-so-difficult-to-add-bootstrap/6682#post_9 - Milano
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts' });

  app.import('bower_components/select2/select2.css');
  app.import('bower_components/select2-bootstrap-css/select2-bootstrap.min.css');
  app.import('bower_components/select2/select2.png', { destDir: 'assets' });
  app.import('bower_components/select2/select2x2.png', { destDir: 'assets' });
  app.import('bower_components/select2/select2-spinner.gif', { destDir: 'assets' });
  app.import('bower_components/select2/select2.min.js');

  return app.toTree();
};
