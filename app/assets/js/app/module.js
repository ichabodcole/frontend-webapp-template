(function() {
  define(function() {
    var MyModule;
    MyModule = (function() {
      function MyModule() {
        this.helloMessage = "Hello Module";
      }

      MyModule.prototype.sayHello = function() {
        console.log(this.helloMessage);
        return this.helloMessage;
      };

      return MyModule;

    })();
    return MyModule;
  });

}).call(this);
