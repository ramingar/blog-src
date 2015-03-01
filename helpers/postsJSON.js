/*jslint undef: true */
// Source: http://stackoverflow.com/questions/497790
var Dates = (function () {
  'use strict';

  var convert = function (d) {
    // Converts the date in d to a date-object. The input can be:
    //   a date object: returned without modification
    //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
    //   a number     : Interpreted as number of milliseconds
    //                  since 1 Jan 1970 (a timestamp) 
    //   a string     : Any format supported by the javascript engine, like
    //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
    //  an object     : Interpreted as an object with year, month and date
    //                  attributes.  **NOTE** month is 0-11.
    return (
      d.constructor === Date ? d :
      d.constructor === Array ? new Date(d[0], d[1], d[2]) :
      d.constructor === Number ? new Date(d) :
      d.constructor === String ? new Date(d) :
      typeof d === "object" ? new Date(d.year, d.month, d.date) :
      NaN
    );
  },
    compare = function (a, b) {
      // Compare two dates (could be of any type supported by the convert
      // function above) and returns:
      //  -1 : if a < b
      //   0 : if a = b
      //   1 : if a > b
      // NaN : if a or b is an illegal date
      // NOTE: The code inside isFinite does an assignment (=).
      return (
        isFinite(a = this.convert(a).valueOf()) &&
        isFinite(b = this.convert(b).valueOf()) ?
        (a > b) - (a < b) :
        NaN
      );
    },
    inRange = function (d, start, end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
     return (
          isFinite(d = this.convert(d).valueOf()) &&
          isFinite(start = this.convert(start).valueOf()) &&
          isFinite(end = this.convert(end).valueOf()) ?
          start <= d && d <= end :
          NaN
      );
  };
  
  return {
    convert : convert,
    compare : compare,
    inRange : inRange
  };
  
})();

module.exports.register = function (Handlebars, options) {
  'use strict';

  /**
  * Array of posts following this structure:
  *
  *  post: {
  *    data: {
  *      'titleOfThisPage': ...,
  *      'posted': ...,
  *      headerImage: url...,
  *    },
  *    tags: ['tag1','tag2',...],
  *    dest: urlToPost (post8.html),
  *    content: content of the md...
  *  }
  *
  * @params posts Collection of posts
  * @params mode ['text'|'object']
  *
  */
  Handlebars.registerHelper('postsJSON', function (posts, mode) {
    
    var json = [],
      ii = 0;
    
    posts.sort(function (a, b) {
      // Compare b w/ a because we want reversed sort.
      return Dates.compare(b.post.data.posted, a.post.data.posted);
    });
    
    posts.forEach(function (item) {
      var post = {};
      
      post.data = {};
      post.data.titleOfThisPage = posts[ii].post.data.titleOfThisPage;
      post.data.posted = posts[ii].post.data.posted;
      post.data.headerImage = posts[ii].post.data.headerImage;
      
      post.tags = posts[ii].post.tags;
      post.dest = posts[ii].post.dest;
      post.content = posts[ii].pages[0].page.split(/\-\ \-\ \-/)[1].split(/\s+/).slice(1, 50).join(" ");
      
      json[ii] = post;
      ii += 1;
    });
    
    switch (mode) {
    case 'text':
      return JSON.stringify(json);
    case 'object':
      return json;
    default:
      return json;
    }
    
  });

};
