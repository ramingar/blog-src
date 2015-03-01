/*jslint undef: true */
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