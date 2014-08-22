(($) ->

  Array::shuffle = -> @sort -> 0.5 - Math.random()

  class SortingAlgorithm
    initList: [1..15]
    constructor: (initList) ->
      @initList = initList.slice()
      @solve()
    solve: -> # defined in implementing class
    @generateList: (max = 15) ->
      return [1..max].shuffle()

  class Bubblesort extends SortingAlgorithm
    log: []
    constructor: (initList) -> 
      @log = [initList]
      super initList
    solve: ->
      list = @initList.slice()
      bound = list.length - 1
      while true
        t = 0
        for j in [0..bound]
          if list[j] > list[j+1]
            [list[j], list[j+1]] = [list[j+1], list[j]]
            @log.push list.slice()
            t = j 
        break if t is 0
        bound = t
      return

  class Mergesort extends SortingAlgorithm
    log: []
    constructor: (initList) ->
      @log = [initList]
      super initList
    solve: ->
      list = @initList.slice()
      self = @
      mergesort = (list) ->
        if list.length <= 1
          return (elem for elem in list)
        m = Math.floor(list.length / 2)
        arr1 = mergesort(list.slice 0, m)
        arr2 = mergesort(list.slice m)
        result = []
        p1 = p2 = 0
        while true
          if p1 >= arr1.length
            if p2 >= arr2.length
              return result 
            result.push arr2[p2]
            p2 += 1
          else if p2 >= arr2.length or arr1[p1] < arr2[p2]
            result.push arr1[p1]
            p1 += 1
          else
            result.push arr2[p2]
            p2 += 1
          self.log.push list.slice()
      mergesort list

  class Quicksort extends SortingAlgorithm
    log: []
    constructor: (initList) ->
      @log = [initList]
      super initList
    solve: ->
      list = @initList.slice()
      self = @
      swap = (i, j) ->
        return if i == j
        [list[i], list[j]] = [list[j], list[i]]
        self.log.push list.slice()
     
      divide = (v, start, end) ->
        first_big = start
        j = start
        while j <= end
          if list[j] < v
            swap first_big, j
            first_big += 1
          j += 1
        first_big
     
      partition = (start, end) ->
        v = list[end]
        first_big = divide v, start, end-1
        swap first_big, end
        first_big
     
      qs = (start, end) ->
        return if start >= end
        m = partition start, end
        qs start, m-1
        qs m+1, end
     
      qs 0, list.length - 1

  class Heapsort extends SortingAlgorithm
    log: []
    constructor: (initList) ->
      @log = [initList]
      super initList
    solve: ->
      list = @initList.slice()
      self = @
      heap_sort = (list) ->
        put_array_in_heap_order(list)
        end = list.length - 1
        while end > 0
          [list[0], list[end]] = [list[end], list[0]]
          self.log.push list.slice()
          sift_element_down_heap list, 0, end
          end -= 1
       
      put_array_in_heap_order = (list) ->
        i = list.length / 2 - 1
        i = Math.floor i
        while i >= 0
          sift_element_down_heap list, i, list.length
          i -= 1
       
      sift_element_down_heap = (heap, i, max) ->
        while i < max
          i_big = i
          c1 = 2*i + 1
          c2 = c1 + 1
          if c1 < max and heap[c1] > heap[i_big]
            i_big = c1
          if c2 < max and heap[c2] > heap[i_big]
            i_big = c2
          return if i_big is i
          [heap[i], heap[i_big]] = [heap[i_big], heap[i]]
          i = i_big

      heap_sort list

  class Insertionsort extends SortingAlgorithm
    log: []
    constructor: (initList) ->
      @log = [initList]
      super initList
    solve: ->
      list = @initList.slice()
      length = list.length
      i = -1
      while length--
        temp = list[++i]
        j = i
        while j-- and list[j] > temp
          list[j+1] = list[j]
        list[j+1] = temp
        @log.push list.slice()

  class Selectionsort extends SortingAlgorithm
    log: []
    constructor: (initList) ->
      @log = [initList]
      super initList
    solve: ->
      list = @initList.slice()
      for i in [0..list.length - 1]
        k = i
        for j in [i+1..list.length-1]
          if list[j] < list[k]
            k = j
        [list[i], list[k]] = [list[k], list[i]]
        @log.push list.slice()


  class SortingView
    constructor: (@$el) -> 
      do @createHtml

      initList = SortingAlgorithm.generateList()
      algorithms = 
        bubblesort: new Bubblesort(initList)
        heapsort: new Heapsort(initList)
        insertionsort: new Insertionsort(initList)
        mergesort: new Mergesort(initList)
        quicksort: new Quicksort(initList)
        selectionsort: new Selectionsort(initList)
      
      getSelectedAlgorithm = ->
          return $("#algorithm", @$el).val()

      self = @
      $("#algorithm", @$el).on "change", -> self.render algorithms[$(@).val()].log
      $(window).on "resize", -> self.render algorithms[getSelectedAlgorithm()].log
      
      @render algorithms[getSelectedAlgorithm()].log, initList

    render: (logs, initList) ->
      return if logs.length is 0 # nothing to see here, move along

      display = new SvgDisplay $(".visual", @$el), logs
      $(".facts .init-list span", @$el).text initList.join() if initList?
      $(".facts .total-steps span", @$el).text logs.length

      return
    createHtml: () ->
      $controls = $("<div>").addClass("controls").html("<label for='algorithm'>Algorithm: </label>")
      $controls.append($("<select id='algorithm' name='algorithm'>")
        .append($("<option>").text("bubblesort"))
        .append($("<option>").text("heapsort"))
        .append($("<option>").text("insertionsort"))
        .append($("<option>").text("selectionsort"))
        .append($("<option>").text("quicksort")))
      @$el.append($controls)
      @$el.append $("<div class='visual'>")
      $facts = $("<div class='facts'>")
      $facts.append($("<div class='x-axis'>"))
        .append($("<div>").addClass("x-axis").text("20%"))
        .append($("<div>").addClass("x-axis").text("40%"))
        .append($("<div>").addClass("x-axis").text("60%"))
        .append($("<div>").addClass("x-axis").text("80%"))
        .append($("<div>").addClass("init-list").html("Initial list: <span></span>"))
        .append($("<div>").addClass("total-steps").html("Logged <span></span> steps."))
        .append($("<div>").addClass("current-array"))
      @$el.append($facts)

  # The canvas display isn't currently used because it's easier to create onhover effects in svg.
  class CanvasDisplay
    toFullColorHex = (hex) -> "#11#{hex}#{hex}"
    constructor: ($el, logs) ->
      if not Modernizr.canvas
        $el.before $("<p>").text("This feature is only supported on IE 9+, and most alternate browsers (e.g. Chome, Firefox).")
        return

      $canvas = $("canvas", $el)
      if $canvas.length is 0
        $canvas = $("<canvas>")
        $el.append $canvas

      canvas = $canvas[0]
      canvas.width = $el.width()
      canvas.height = $el.height()

      context = canvas.getContext("2d")
      context.clearRect 0, 0, canvas.width, canvas.height
      stepWidth = canvas.width / logs.length
      lineDistance = canvas.height / logs[0].length
      context.lineWidth = 1

      for logIndex in [1..logs.length-1]
        context.beginPath()
        context.strokeStyle = "#eee"
        context.moveTo logIndex * stepWidth, 0
        context.lineTo logIndex * stepWidth, canvas.height
        context.stroke()

      context.lineWidth = 5

      for logIndex in [0..logs.length-1]
        log = logs[logIndex]
        nextLog = logs[logIndex+1] if logIndex < logs.length-1
        nextLog = logs[logIndex] if logIndex is logs.length-1

        for elementIndex in [0..log.length-1]
          currentElementIndex = log.indexOf(elementIndex)
          nextElementIndex = nextLog.indexOf(elementIndex)

          context.beginPath()
          context.strokeStyle = toFullColorHex(Math.floor(elementIndex / log.length * 255).toString(16))
          context.moveTo logIndex * stepWidth, lineDistance * (currentElementIndex) + (lineDistance / 2)
          context.lineTo (logIndex + 1) * stepWidth, lineDistance * (nextElementIndex) + (lineDistance / 2)
          context.stroke()

  class SvgDisplay
    toFullColorHex = (hex) -> "#11#{hex}#{hex}"
    constructor: ($el, logs) ->
      if not Modernizr.svg
        $el.before $("<p>").text("This feature is only supported on IE 9+, and most alternate browsers (e.g. Chome, Firefox).")
        return

      svgNS = "http://www.w3.org/2000/svg"
      $("svg", $el).remove()
      svg = document.createElementNS svgNS, "svg"
      svg.setAttribute "version", "1.2"
      svg.setAttribute "baseProfile", "tiny"
      svg.setAttribute "style", "width: #{$el.width()}px; height: #{$el.height()}px"

      stepWidth = $el.width() / logs.length
      lineDistance = $el.height() / logs[0].length

      # create background grid at each step with onhover effects
      grid = document.createElementNS svgNS, "g"
      for logIndex in [0..logs.length-1]
        rect = document.createElementNS svgNS, "rect"
        rect.setAttribute "x", logIndex * stepWidth
        rect.setAttribute "y", -1
        rect.setAttribute "width", stepWidth
        rect.setAttribute "height", $el.height() + 2
        rect.setAttribute "fill", "white"
        rect.setAttribute "style", "stroke: #eee;"
        currentIndex = logIndex
        rect.addEventListener "mouseover", ( (index) -> 
          return (evt) ->
            evt.target.setAttribute("fill", "#f9f9f9")
            $el.siblings(".facts").find(".current-array").text logs[index].join()
          )(logIndex)
        rect.addEventListener "mouseout", (evt) -> 
          evt.target.setAttribute("fill", "white")
          $el.siblings(".facts").find(".current-array").text ""
          return
        grid.appendChild rect
      svg.appendChild grid

      # create all lines from logs
      lines = document.createElementNS svgNS, "g"
      for logIndex in [0..logs.length-1]
        log = logs[logIndex]
        nextLog = logs[logIndex+1] if logIndex < logs.length-1
        nextLog = logs[logIndex] if logIndex is logs.length-1

        for elementIndex in [0..log.length]
          currentElementIndex = log.indexOf(elementIndex)
          nextElementIndex = nextLog.indexOf(elementIndex)
          
          line = document.createElementNS svgNS, "line"
          line.setAttribute "x1", logIndex * stepWidth
          line.setAttribute "y1", lineDistance * (currentElementIndex) + (lineDistance / 2)
          line.setAttribute "x2", (logIndex + 1) * stepWidth
          line.setAttribute "y2", lineDistance * (nextElementIndex) + (lineDistance / 2)
          strokeStyle = toFullColorHex(Math.floor(elementIndex / log.length * 255).toString(16))
          line.setAttribute "style", "stroke: #{strokeStyle}; stroke-width: 5;"
          lines.appendChild line
      svg.appendChild lines

      $el.append svg

  $ ->
    view = new SortingView $(".sorting")

)(jQuery)