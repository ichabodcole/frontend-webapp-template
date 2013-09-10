requirejs.config({
  baseUrl: './'

  paths: {
    app: 'scripts/app'
    jquery: './bower_components/jquery/jquery'
    underscore: './bower_components/underscore/underscore'
  }

  shim: {
    'underscore': {
      exports: '_'
    }
  }
})

requirejs ['app/module', 'app/application'], (Module, Application)->
  app = new Application(Module);
  app.start();