define ['lib/domReady', 'underscore' ,'jquery', 'app/module'], (domReady, _, $, myModule)->
  # console.log $
  class MyApplication
    constructor: (module)->
      @module = new module()
      @hello_message = "Hello Application"
      #example of non AMD module use
      _.each [0..5], (el, index)->
        console.log index
      #using jquery
      $('#container').html("Hey yaaaah!")

    sayHello: ->
      console.log @hello_message
      @module.sayHello()

    start: ->
      @sayHello()

  domReady ->
    console.log "domReady"
    app = new MyApplication(myModule)
