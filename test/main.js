  requirejs.config({
    baseUrl: '../',

    paths: {
      lib: 'app/assets/js/lib',
      app: 'app/assets/js/app',
      spec: 'test/spec',

      jquery: 'app/assets/js/lib/jquery',
      underscore: 'app/assets/js/lib/underscore',

      chai: 'node_modules/chai/chai',
      mocha: 'node_modules/mocha/mocha',
      bridge: 'node_modules/grunt-mocha/phantomjs/bridge'
    },

    shim: {
      'underscore': {
        exports: '_'
      }
    }
  });

  requirejs(['chai', 'mocha', 'bridge'], function(chai){
    expect = chai.expect;
    mocha.setup('bdd');

    requirejs(['spec/module', 'spec/application'], function(){
      mocha.run();
    });
  });
