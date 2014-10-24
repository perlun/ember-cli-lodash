'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-lodash',

  included: function included(app) {
    this.app = app;
    app.import(app.bowerDirectory + '/lodash/dist/lodash.min.js');

    // special thanks to https://github.com/rwjblue/ember-cli-pretender
    app.import('vendor/ember-cli-lodash/shim.js', {
      type: 'vendor',
      exports: { 'lodash': ['default'] }
    });
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },


};
