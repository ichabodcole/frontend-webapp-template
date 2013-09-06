define ['underscore' ,'jquery', 'app/module'], (_, $, myModule)->
  # console.log $
  class MyApplication
    constructor: (module)->
      @module = new module()
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

  # domReady ->
  #   console.log "domReady"
  #   app = new MyApplication(myModule)
