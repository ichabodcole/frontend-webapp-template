var path = require('path');
var lrSnippet = require('connect-livereload')();

var folderMount = function folderMount(connect, point){
  return connect.static(path.resolve(point));
};

var buildDir = 'build/';

module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    mocha: {
      all: ['test/**/*.html'],
      options: {
        reporter: 'Nyan',
        run: false
      }
    },
    sass: {
      dist: {
        expand: true,
        cwd: 'app/styles',
        src: ['**/*.scss'],
        dest: buildDir + 'styles',
        ext: '.css'
      }
    },
    clean: {
      build: [buildDir]
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'app',
        src: ['**/*', '!**/*.coffee', '!**/*.scss', '!bower_components/**'],
        dest: buildDir
      },
      bower: {
        expand: true,
        cwd: 'app',
        src: ['bower_components/**/*.js', 'bower_components/**/*.css'],
        dest: buildDir
      }
    },
    coffee: {
      app: {
        expand: true,
        cwd: 'app/scripts',
        src: ['**/*.coffee'],
        dest: buildDir + 'scripts',
        ext: '.js'
      },
      test: {
        expand: true,
        cwd: 'test/spec/coffee',
        src: ['**/*.coffee'],
        dest: 'test/spec',
        ext: '.js'
      }
    },
    watch: {
      // livereload: {
      //   files: [
      //     buildDir + '**/*.html',
      //     buildDir + '**/*.css',
      //     buildDir + '**/*.js',
      //     '!bower_components/**',
      //     'test/**/*.html',
      //     'test/**/*.js'
      //   ],
      //   options: {
      //     livereload: true
      //   },
      // }
      options: {
        livereload: true
      },

      compile_app: {
        files: ['app/**/*.coffee', '!app/bower_components/**'],
        tasks: ['coffee:app']
      },
      compile_test: {
        files: ['test/**/*.coffee'],
        tasks: ['coffee:test']
      },
      sass: {
        files: ['**/*.scss', '!app/bower_components/**'],
        tasks: ['sass']
      },
      copy: {
        files: ['app/**/*.html', '!app/bower_components/**'],
        tasks: ['copy:dist']
      },
      test: {
        files: ['test/**/*.js', 'test/*.html'],
        tasks: ['mocha']
      }
    },
    connect: {
      livereload: {
        options: {
          base: './build',
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

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', [
      'clean',
      'coffee',
      'connect',
      'sass',
      'copy',
      'watch',
      'mocha'
    ]);
};