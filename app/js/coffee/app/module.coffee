define ->
  class MyModule
    constructor: ->
      @helloMessage = "Hello Module"

    sayHello: ->
      console.log @helloMessage
      return @helloMessage

  return MyModule