(function() {
  requirejs.config({
    baseUrl: './',
    paths: {
      app: 'js/app',
      jquery: '../../components/jquery/jquery',
      underscore: '../../components/underscore/underscore'
    },
    shim: {
      underscore: {
        exports: '_'
      }
    }
  });

  requirejs(['app/application']);

}).call(this);
