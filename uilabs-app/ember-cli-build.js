/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
	lessOptions: {
		paths: [
  		'bower_components/semantic-ui',
  		'node_modules/ui-lab'
		]
	 },
    SemanticUI: {
				css: false,
				javascript: true,
				fonts: true
			}
  }),
  mergeTrees = require('broccoli-merge-trees'),
  pickFiles = require('broccoli-static-compiler'),
  trees = [];

  trees.push(
  pickFiles('bower_components/roboto-fontface/', {
    srcDir: '/',
    files: ['fonts/*.*', 'css/*.css'],
    destDir: '/assets/themes/default/assets/'
  })
);

app.import({
    development: app.bowerDirectory + '/Squire/build/squire-raw.js',
    production: app.bowerDirectory + '/Squire/build/squire.js'
  });

app.import({
    development: app.bowerDirectory + '/semantic-dateTimePicker/src/js/bootstrap-datetimepicker.js',
    production: app.bowerDirectory + '/semantic-dateTimePicker/build/js/bootstrap-datetimepicker.min.js'
  });

	trees.push(app.toTree());
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

  	return mergeTrees(trees, {overwrite: true});
};
