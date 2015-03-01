/*jslint undef: true */
module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('monthSpanish', function (month) {
    var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
                  'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return months[parseInt(month, 10) - 1];
  });

};