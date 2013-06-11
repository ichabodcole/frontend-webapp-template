(function() {
  define(['lib/domReady', 'underscore', 'jquery', 'app/module'], function(domReady, _, $, myModule) {
    var MyApplication;

    MyApplication = (function() {
      function MyApplication(module) {
        this.module = new module();
        this.hello_message = "Hello Application";
        _.each([0, 1, 2, 3, 4, 5], function(el, index) {
          return console.log(index);
        });
        $('#container').html("Hey yaaaah!");
      }

      MyApplication.prototype.sayHello = function() {
        console.log(this.hello_message);
        return this.module.sayHello();
      };

      MyApplication.prototype.start = function() {
        return this.sayHello();
      };

      return MyApplication;

    })();
    return domReady(function() {
      var app;

      console.log("domReady");
      return app = new MyApplication(myModule);
    });
  });

}).call(this);
