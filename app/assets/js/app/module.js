(function() {
  define(function() {
    var MyModule;

    MyModule = (function() {
      function MyModule() {
        this.helloMessage = "Hello Module";
      }

      MyModule.prototype.sayHello = function() {
        return console.log(this.helloMessage);
      };

      return MyModule;

    })();
    return MyModule;
  });

}).call(this);
