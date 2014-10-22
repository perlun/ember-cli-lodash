'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-lodash',

  included: function included(app) {
    this.app = app;
    app.import(app.bowerDirectory + '/lodash/dist/lodash.min.js');
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },


};
