define ->
  class Module
    constructor: ->
      @helloMessage = "Hello Module"

    sayHello: ->
      console.log @helloMessage
      return @helloMessage

  return Module