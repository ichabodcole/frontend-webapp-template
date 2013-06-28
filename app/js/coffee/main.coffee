requirejs.config({
  baseUrl: './'

  paths: {
    app: 'js/app'
  }

  shim: {
    'underscore': {
      exports: '_'
    }
  }
})

requirejs ['app/application']