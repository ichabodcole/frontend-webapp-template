  requirejs.config({
    baseUrl: './',
    paths: {
       app: '../app/js/app',
       spec: 'spec',
       jquery: '../components/jquery/jquery',
       underscore: '../components/underscore/underscore',
       chai: '../node_modules/chai/chai',
       mocha: '../node_modules/mocha/mocha',
       bridge: '../node_modules/grunt-mocha/phantomjs/bridge'
    },
    shim: {
       underscore: {
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
