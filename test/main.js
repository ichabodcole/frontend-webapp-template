  requirejs.config({
    baseUrl: '../',

    paths: {
      jquery: 'app/assets/js/lib/jquery',
      underscore: 'app/assets/js/lib/underscore',

      lib: 'app/assets/js/lib',
      app: 'app/assets/js/app',
      spec: 'test/spec',

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
