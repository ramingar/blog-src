/*jslint undef: true */
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
          sortby: 'post.data.posted',
          sortorder: 'desc'
        }],
        helpers: './helpers/**/*.js',
        
        defaultTitle: 'Rafael Minguet García',
        postsLayout: 'posts-layout.hbs'
      },
      skeleton: {
        files: [{
          cwd: './public',
          dest: '../dist/',
          expand: true,
          src: ['**/*.hbs', '**/*.md']
        }]
      }
    },
    
    concat: {
      dist1: {
        src: [
          './public/assets/js/jquery.js',
          './public/assets/js/bootstrap.js',
          './public/assets/js/pagination.js'
        ],
        dest: './public/assets/js/production.js'
      },
      dist2: {
        src: [
          './public/assets/css/bootstrap.css',
          './public/assets/css/site.css'
        ],
        dest: './public/assets/css/production.css'
      },
      dist3: {
        src: [
          './public/assets/js/parallax.min.js'
        ],
        dest: './public/assets/js/parallax.min.js'
      }
    },
    
    uglify: {
      build: {
        src: './public/assets/js/production.js',
        dest: '../dist/assets/js/production.min.js'
      }
    },
    
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './public/assets/css/',
          src: ['production.css'],
          dest: '../dist/assets/css/',
          ext: '.min.css'
        }]
      }
    },
    
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: './public/assets/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '../dist/assets/img/'
        }]
      }
    },
    
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '../dist/',
          src: '**/*.html',
          dest: '../dist/'
        }]
      }
    },
    
    copy: {
      main: {
        files: [{
          expand: true,
          filter: 'isFile',
          cwd: './public/assets/fonts/',
          src: ['*'],
          dest: '../dist/assets/fonts/'
        }]
      }
    }
    
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  /* grunt tasks */
  grunt.registerTask(
    'default',
    ['assemble', 'concat', 'uglify',
      'cssmin', 'imagemin', 'htmlmin', 'copy']
  );

};