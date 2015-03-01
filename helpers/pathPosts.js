/*jslint undef: true */
module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('pathPosts', function (posts, mode) {
    return '/posts/';
  });

};