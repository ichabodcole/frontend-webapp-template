var path = require('path');
var lrSnippet = require('connect-livereload')();

var folderMount = function folderMount(connect, point){
  return connect.static(path.resolve(point));
};

module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    bower: {
      target: {
        rjsConfig: 'app/js/main.js'
      },
      test: {
        rjsConfig: 'test/main.js'
      }
    },
    mocha: {
      all: ['test/**/*.html'],
      options: {
        reporter: 'Nyan',
        run: false
      }
    },
    sass: {
      dist: {
        files: {
          'app/styles/main.css': 'app/styles/sass/main.scss'
        }
      }
    },
    coffee: {
      app: {
        files: [
          {
            expand: true,
            cwd: 'app/js/coffee',
            src: ['**/*.coffee'],
            dest: 'app/js',
            ext: '.js'
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'test/spec/coffee',
            src: ['**/*.coffee'],
            dest: 'test/spec',
            ext: '.js'
          }
        ]
      }
    },
    watch: {
      livereload: {
        files: [
          'app/**/*.html',
          'app/**/*.css',
          'app/**/*.js',
          'test/**/*.html',
          'test/**/*.js'
        ],
        options: {
          livereload: true
        }
      },
      compile_app: {
        files: ['app/**/*.coffee'],
        tasks: ['coffee:app', 'bower']
      },
      compile_test: {
        files: ['test/**/*.coffee'],
        tasks: ['coffee:test', 'bower']
      },
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
      test: {
        files: ['test/**/*.js', 'test/*.html'],
        tasks: ['mocha']
      }
    },
    connect: {
      livereload: {
        options: {
          // base: '/',
          hostname: 'localhost',
          port: 9000,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, options.base)];
          }
        }
      },
      test: {
        options: {
          hostname: 'localhost',
          port: 9005,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, options.base)];
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['coffee', 'connect', 'watch', 'mocha', 'sass', 'bower']);
};