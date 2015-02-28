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
        
        defaultTitle: 'Rafael Minguet García\'s Blog',
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
    },
    
    concat: {
      dist1: {
        src: [
          './public/assets/js/jquery.js',
          './public/assets/js/bootstrap.js'
        ],
        dest: './public/assets/js/production.js',
      },
      dist2: {
        src: [
          './public/assets/css/bootstrap.css',
          './public/assets/css/business-casual.css',
          './public/assets/css/site.css',
        ],
        dest: './public/assets/css/production.css',
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
    }
    
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
  /* grunt tasks */
  grunt.registerTask(
    'default',
    ['assemble', 'concat', 'uglify',
     'cssmin', 'imagemin', 'htmlmin']
  );

};