/*jslint undef: true */
var pagination = (function () {
  'use strict';
  
  var $elements = $('div.postExcerpt'),
      
    next = function (many) {
      // Display posts
      for (var ii=0; ii<many; ii++) {
        var $displayed = $('div.postExcerpt.displayed');
        if ($displayed.last().next().length>0) {
          $displayed.last().next().addClass('displayed').removeClass('hidden');
        }
      }
      
      // Hide posts
      for (var ii=0; ii<many; ii++) {
        var $displayed = $('div.postExcerpt.displayed');
        $displayed.first().addClass('hidden').removeClass('displayed');
      }
      
      this.checkButtons();
    },
      
    previous = function (many) {
      // count = number of posts displayed at the moment (they will be hide later)
      var count = $('div.postExcerpt.displayed').length;
      
      // Display posts
      for (var ii=0; ii<many; ii++) {
        var $displayed = $('div.postExcerpt.displayed');
        if ($displayed.first().prev().length>0) {
          $displayed.first().prev().addClass('displayed').removeClass('hidden');
        }
      }
      
      // Hide posts
      for (var ii=0; ii<count; ii++) {
        var $displayed = $('div.postExcerpt.displayed');
        $displayed.last().addClass('hidden').removeClass('displayed');
      }

      this.checkButtons();
    },
      
    checkButtons = function () {
      if (
        $('div.postExcerpt').index($('div.postExcerpt.displayed').last())
        == $('div.postExcerpt').length-1
      ){
        $('#next').addClass('hidden');
      } else {
        $('#next').removeClass('hidden');
      }
      
      if (
        $('div.postExcerpt').index($('div.postExcerpt.displayed').first()) <= 0
      ){
        $('#previous').addClass('hidden');
      } else {
        $('#previous').removeClass('hidden');
      }
    }
  
  ;
  
  /** Métodos y propiedades públicas */
  return {
    next : next,
    previous : previous,
    checkButtons : checkButtons
  };
})();