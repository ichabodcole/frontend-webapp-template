requirejs.config({
  baseUrl: 'assets/js'

  paths: {
    lib: 'lib'
    app: 'app'
  }

  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    }
  }
})

requirejs([
  'lib/domReady',
  'lib/jquery',
  'lib/underscore',
  'app/module',
  'app/application'
])