'use strict';
module.exports = function(grunt) {
  
  // Load all NPM grunt tasks
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/plugins/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'assets/css/main.min.css': [
            'assets/less/main.less'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
    watch: {
      less: {
        files: [
          'assets/less/*.less'
        ],
        tasks: ['recess', 'copy']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify', 'copy']
      },
      coffee: {
        files: [
          "assets/js/**/*.coffee"
        ],
        tasks: ['coffee', 'copy']
      }
    },

    copy: {
      main: {
        files: [
          { expand: true, src: ['assets/**'], dest: '_site/' }
        ]
      }
    },

    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    },

    coffee: {
      compileWithMaps: {
        options: {
          sourceMap: true
        },
        files: {
          'assets/js/projects/sorting/sorting.js': 'assets/js/projects/sorting/sorting.coffee', // 1:1 compile
          'assets/js/projects/barrier-grid/main.js': 'assets/js/projects/barrier-grid/main.coffee', // 1:1 compile
          //'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // concat then compile into single file
        }
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'recess',
    'uglify',
    'imagemin',
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};