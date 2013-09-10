define ['underscore' ,'jquery'], (_, $)->
  # console.log $
  class Application
    constructor: (Module)->
      @module = new Module()
      @helloMessage = "Hello Application"
      #example of non AMD module using underscore
      # _.each [0..5], (el, index)->
      #   console.log index
      #using jquery
      $('#container').html("Hey yaaaah!")

    sayHello: ->
      console.log @helloMessage
      @module.sayHello()
      return @helloMessage

    start: ->
      @sayHello()

  return Application;

  # domReady ->
  #   console.log "domReady"
  #   app = new MyApplication(myModule)
