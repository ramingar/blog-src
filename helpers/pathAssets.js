/*jslint undef: true */
module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('pathAssets', function (posts, mode) {
    return '/assets/';
  });

};