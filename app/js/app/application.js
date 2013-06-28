(function() {
  define(['underscore', 'jquery', 'app/module'], function(_, $, myModule) {
    var MyApplication;
    return MyApplication = (function() {
      function MyApplication(module) {
        this.module = new module();
        this.helloMessage = "Hello Application";
        $('#container').html("Hey yaaaah!");
      }

      MyApplication.prototype.sayHello = function() {
        console.log(this.helloMessage);
        this.module.sayHello();
        return this.helloMessage;
      };

      MyApplication.prototype.start = function() {
        return this.sayHello();
      };

      return MyApplication;

    })();
  });

}).call(this);
