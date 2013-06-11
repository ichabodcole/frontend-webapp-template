requirejs.config({
  baseUrl: 'assets/js'

  paths: {
    lib: 'lib'
    app: 'app'
    jquery: 'lib/jquery'
    underscore: 'lib/underscore'
  }

  shim: {
    'underscore': {
      exports: '_'
    }
  }
})

requirejs ['app/application']