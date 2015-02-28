module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    
    assemble: {
      options: {
        layout: 'main.hbs',
        layoutdir: './public/layouts/',
        partials: './public/partials/**/*.hbs',
        collections: [{
          name: 'posts',
          inflection: 'post',
          sortby: 'posted',
          sortorder: 'desc'
        }],
        helpers: './helpers/**/*.js',
        
        defaultTitle: 'Rafael Minguet\'s Blog',
        pathAssets: '/assets/',
        postsLayout: 'postsLayout.hbs'
      },
      skeleton: {
        files: [{
          cwd: './public',
          dest: '../dist/',
          expand: true,
          src: ['**/*.hbs', '**/*.md']
        }]
      },
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble']);

};