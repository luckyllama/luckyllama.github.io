
class @CanvasDividingStrategy
  rectangles: []

class @VerticleRectangleCanvasDivider extends @CanvasDividingStrategy
  constructor: (width, height, count) ->
    count = count + 1 if count % 2 is 1
    @colCount = 1
    @rowCount = 1
    @rectangleWidth = width
    @rectangleHeight = height
    rectangleCount = => @rowCount * @colCount

    while rectangleCount() < count
      if @rectangleHeight / @rectangleWidth > 12
        @rowCount++
        @colCount = Math.floor @colCount / @rowCount
      else
        @colCount++
      @rectangleWidth = width / @colCount
      @rectangleHeight = height / @rowCount

    for i in [0..rectangleCount()]
      col = i % @colCount
      row = Math.floor i / @colCount
      @rectangles.push
        id: i,
        width: @rectangleWidth,
        height: @rectangleHeight,
        x: col * @rectangleWidth,
        y: row * @rectangleHeight

class @MeasureDividingStrategy
  getRectangles: (measure) -> #implement in sub class

class @HorizontalRectangleMeasureDivider extends @MeasureDividingStrategy
  getRectangles: (startX, startY, width, height, measure) ->
    rows = measure.notes.length
    rowHeight = height / rows
    rectangles = []
    for staffNotes, staff in measure.notes
      totalDuration = _.reduce staffNotes, ((sum, note) -> sum + parseInt(note.duration)), 0
      lastHeight = startY
      for note in staffNotes
        recHeight = rowHeight * (note.duration / totalDuration)
        rectangles.push
          note: note
          width: width
          height: recHeight
          y: (staff * rowHeight) + lastHeight
          x: startX
        lastHeight += recHeight
    rectangles



class @CanvasDividingStrategy
  rectangles: []

class @VerticleRectangleCanvasDivider extends @CanvasDividingStrategy
  constructor: (width, height, count) ->
    count = count + 1 if count % 2 is 1
    @colCount = 1
    @rowCount = 1
    @rectangleWidth = width
    @rectangleHeight = height
    rectangleCount = => @rowCount * @colCount

    while rectangleCount() < count
      if @rectangleHeight / @rectangleWidth > 12
        @rowCount++
        @colCount = Math.floor @colCount / @rowCount
      else
        @colCount++
      @rectangleWidth = width / @colCount
      @rectangleHeight = height / @rowCount

    for i in [0..rectangleCount()]
      col = i % @colCount
      row = Math.floor i / @colCount
      @rectangles.push
        id: i,
        width: @rectangleWidth,
        height: @rectangleHeight,
        x: col * @rectangleWidth,
        y: row * @rectangleHeight

class @MeasureDividingStrategy
  getRectangles: (measure) -> #implement in sub class

class @HorizontalRectangleMeasureDivider extends @MeasureDividingStrategy
  getRectangles: (startX, startY, width, height, measure) ->
    rows = measure.notes.length
    rowHeight = height / rows
    rectangles = []
    for staffNotes, staff in measure.notes
      totalDuration = _.reduce staffNotes, ((sum, note) -> sum + parseInt(note.duration)), 0
      lastHeight = startY
      for note in staffNotes
        recHeight = rowHeight * (note.duration / totalDuration)
        rectangles.push
          note: note
          width: width
          height: recHeight
          y: (staff * rowHeight) + lastHeight
          x: startX
        lastHeight += recHeight
    rectangles



class @CanvasDividingStrategy
  rectangles: []

class @VerticleRectangleCanvasDivider extends @CanvasDividingStrategy
  constructor: (width, height, count) ->
    count = count + 1 if count % 2 is 1
    @colCount = 1
    @rowCount = 1
    @rectangleWidth = width
    @rectangleHeight = height
    rectangleCount = => @rowCount * @colCount

    while rectangleCount() < count
      if @rectangleHeight / @rectangleWidth > 12
        @rowCount++
        @colCount = Math.floor @colCount / @rowCount
      else
        @colCount++
      @rectangleWidth = width / @colCount
      @rectangleHeight = height / @rowCount

    for i in [0..rectangleCount()]
      col = i % @colCount
      row = Math.floor i / @colCount
      @rectangles.push
        id: i,
        width: @rectangleWidth,
        height: @rectangleHeight,
        x: col * @rectangleWidth,
        y: row * @rectangleHeight

class @MeasureDividingStrategy
  getRectangles: (measure) -> #implement in sub class

class @HorizontalRectangleMeasureDivider extends @MeasureDividingStrategy
  getRectangles: (startX, startY, width, height, measure) ->
    rows = measure.notes.length
    rowHeight = height / rows
    rectangles = []
    for staffNotes, staff in measure.notes
      totalDuration = _.reduce staffNotes, ((sum, note) -> sum + parseInt(note.duration)), 0
      lastHeight = startY
      for note in staffNotes
        recHeight = rowHeight * (note.duration / totalDuration)
        rectangles.push
          note: note
          width: width
          height: recHeight
          y: (staff * rowHeight) + lastHeight
          x: startX
        lastHeight += recHeight
    rectangles



class @CanvasDividingStrategy
  rectangles: []

class @VerticleRectangleCanvasDivider extends @CanvasDividingStrategy
  constructor: (width, height, count) ->
    count = count + 1 if count % 2 is 1
    @colCount = 1
    @rowCount = 1
    @rectangleWidth = width
    @rectangleHeight = height
    rectangleCount = => @rowCount * @colCount

    while rectangleCount() < count
      if @rectangleHeight / @rectangleWidth > 12
        @rowCount++
        @colCount = Math.floor @colCount / @rowCount
      else
        @colCount++
      @rectangleWidth = width / @colCount
      @rectangleHeight = height / @rowCount

    for i in [0..rectangleCount()]
      col = i % @colCount
      row = Math.floor i / @colCount
      @rectangles.push
        id: i,
        width: @rectangleWidth,
        height: @rectangleHeight,
        x: col * @rectangleWidth,
        y: row * @rectangleHeight

class @MeasureDividingStrategy
  getRectangles: (measure) -> #implement in sub class

class @HorizontalRectangleMeasureDivider extends @MeasureDividingStrategy
  getRectangles: (startX, startY, width, height, measure) ->
    rows = measure.notes.length
    rowHeight = height / rows
    rectangles = []
    for staffNotes, staff in measure.notes
      totalDuration = _.reduce staffNotes, ((sum, note) -> sum + parseInt(note.duration)), 0
      lastHeight = startY
      for note in staffNotes
        recHeight = rowHeight * (note.duration / totalDuration)
        rectangles.push
          note: note
          width: width
          height: recHeight
          y: (staff * rowHeight) + lastHeight
          x: startX
        lastHeight += recHeight
    rectangles



class @CanvasDividingStrategy
  rectangles: []

class @VerticleRectangleCanvasDivider extends @CanvasDividingStrategy
  constructor: (width, height, count) ->
    count = count + 1 if count % 2 is 1
    @colCount = 1
    @rowCount = 1
    @rectangleWidth = width
    @rectangleHeight = height
    rectangleCount = => @rowCount * @colCount

    while rectangleCount() < count
      if @rectangleHeight / @rectangleWidth > 12
        @rowCount++
        @colCount = Math.floor @colCount / @rowCount
      else
        @colCount++
      @rectangleWidth = width / @colCount
      @rectangleHeight = height / @rowCount

    for i in [0..rectangleCount()]
      col = i % @colCount
      row = Math.floor i / @colCount
      @rectangles.push
        id: i,
        width: @rectangleWidth,
        height: @rectangleHeight,
        x: col * @rectangleWidth,
        y: row * @rectangleHeight

class @MeasureDividingStrategy
  getRectangles: (measure) -> #implement in sub class

class @HorizontalRectangleMeasureDivider extends @MeasureDividingStrategy
  getRectangles: (startX, startY, width, height, measure) ->
    rows = measure.notes.length
    rowHeight = height / rows
    rectangles = []
    for staffNotes, staff in measure.notes
      totalDuration = _.reduce staffNotes, ((sum, note) -> sum + parseInt(note.duration)), 0
      lastHeight = startY
      for note in staffNotes
        recHeight = rowHeight * (note.duration / totalDuration)
        rectangles.push
          note: note
          width: width
          height: recHeight
          y: (staff * rowHeight) + lastHeight
          x: startX
        lastHeight += recHeight
    rectangles



class window.MusicXmlFile
  constructor: (url, callback) ->
    self = @
    @measures = []
    @count = 0
    @usedKeys = []
    @usedPitchSteps = []

    load = (data) ->
      allNotes = {}
      allKeys = []
      $data = $ data

      $("part", $data).each ->
        $part = $ @
        previousAttributes = {}

        $("measure", $part).each ->
          newMeasure = new Measure @, previousAttributes
          previousAttributes = newMeasure.attributes
          self.measures.push newMeasure
          self.count += newMeasure.count
          allKeys.push newMeasure.attributes.key.name if _.indexOf(allKeys, newMeasure.attributes.key.name) is -1
          allNotes[newMeasure.attributes.key.name] ?= []
          allNotes[newMeasure.attributes.key.name].push (notes for notes in newMeasure.usedPitchSteps)

      self.usedKeys = allKeys
      _.each allKeys, (name) ->
        self.usedPitchSteps.push
          key: name,
          notes: _.chain(allNotes[name])
            .flatten()
            .uniq((note) -> note.toString true)
            .sortBy((note) -> note.isRest + note.toString true )
            .value()

      callback()?
    $.ajax(url).success load



keyInfo =
  "-7": "Cb"
  "-6": "Gb"
  "-5": "Db"
  "-4": "Ab"
  "-3": "Eb"
  "-2": "Bb"
  "-1": "F"
  "0": "C"
  "1": "G"
  "2": "D"
  "3": "A"
  "4": "E"
  "5": "B"
  "6": "F#"
  "7": "C#"

class Measure
  constructor: (@xml, previousAttributes) ->
    self = @
    $measure = $ @xml
    @number = $measure.attr("number")

    attributes = do -> # read attributes
      result = {}
      $attributes = $ "attributes", $measure
      return result if $attributes.length is 0

      $divisions = $ "divisions", $attributes
      result.divisions = $divisions.text() if $divisions.length > 0

      $staves = $ "staves", $attributes
      result.staves = $staves.text() if $staves.length > 0

      $clefs = $ "clef", $attributes
      result.clef = [] if $clefs.length > 0
      $clefs.each ->
        $clef = $ @
        result.clef.push
          number: $clef.attr "number"
          sign: $("sign", $clef).text()
          line: $("line", $clef).text()

      $key = $ "key", $attributes
      if $key.length > 0
        result.key =
          fifths: $("fifths", $key).text()
          mode: $("mode", $key).text()
        result.key.name = keyInfo[result.key.fifths]
        result.key.toString = result.key.inspect = -> @name

      #time beats beat-type
      $time = $ "time", $attributes
      if $time.length > 0
        result.time =
          beats: $("beats", $time).text()
          beatType: $("beat-type", $time).text()
          toString: -> @beats + "/" + @beatType

      result
    @attributes = $.extend {}, previousAttributes, attributes

    @notes = []
    @count = 0
    @usedPitchSteps = []
    $("note", $measure).each ->
      newNote = new Note @
      staff = (parseInt(newNote.staff) || 1) - 1
      self.notes[staff] ?= []
      self.notes[staff].push newNote
      self.count++
      self.usedPitchSteps.push newNote
    @usedPitchSteps = _.chain(@usedPitchSteps)
      .uniq((note) -> note.toString true)
      .sortBy((note) ->
        note.isRest + note.toString(true))
      .value()

class Note
  _pitchAlterMap: { "-2": "bb", "-1": "b", "0": "", "1": "#", "2": "x" }
  constructor: (@xml) ->
    $note = $ @xml
    @duration = $("duration", $note).text()
    @type = $("type", $note).text()
    @staff = $("staff", $note).text()
    $pitch = $("pitch", $note)
    if $pitch.length > 0
      @pitch =
        step: $("step", $pitch).text()
        octave: $("octave", $pitch).text()
      @pitch.alter = $("alter", $pitch).text()
      @pitch.alter = 0 if @pitch.alter is ""
    @isRest = $("rest", $note).length > 0
    @isGrace = $("grace", $note).length > 0
    @duration = 1 if @isGrace
    @type = "whole" if @type is "" and @isRest # default to whole rest if not specified
    $tie = $("tie", $note)
    @tie = $tie.attr("type") if $tie.length > 0
  toString: (simple) ->
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}" if @pitch and simple
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}#{@pitch.octave} #{@type}" if @pitch and not simple
    return "#{@type} rest" if @isRest
  toHtml: -> Note.toHtml @toString()
  @toHtml: (noteName) ->
    noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x","&#119082;")
      .replace("b", "&#9837;").replace("n", "&#9838;")

class NoteDraw
  constructor: ->

class @Settings
  constructor: ->
    @colors =
    # key F: A,Bb,C,D,E,F,G,quarter rest,whole rest
    # http://www.colourlovers.com/palette/2630757/Shifting
      "F":
        "A": "DAEEEA"
        "Bb": "EACEC4"
        "C": "43586C"
        "D": "A86060"
        "E": "904848"
        "F": "799892"
        "G": "C79A8B"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key A: A,C#,E,half rest,quarter rest,whole rest
      "A":
        "A": "0000ff"
        "C#": "0000cc"
        "E": "000099"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key Ab: Ab,C,Eb,half rest,quarter rest,whole rest
      "Ab":
        "Ab": "00ff00"
        "C": "00cc00"
        "Eb": "009900"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      "G": presetColors("G")
      "Eb": presetColors("Eb")
      "C": presetColors("C")
      "E": presetColors("E")
  getColorInfo: (key, note) ->
    hex = @colors[key][note.toString(true)]
    return { hex: "##{hex}", isWhiteFore: @needsWhiteFore(hex) }
  needsWhiteFore: (hexcolor) ->
    # http://24ways.org/2010/calculating-color-contrast/
    r = parseInt hexcolor.substr(0,2),16
    g = parseInt hexcolor.substr(2,2),16
    b = parseInt hexcolor.substr(4,2),16
    yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    if yiq >= 128 then false else true

presetColors = (key) ->
  primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"]
  secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"]
  secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"]
  complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"]
  rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"]

  preset1 =
    primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"]
    secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"]
    secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"] 
    complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"]
    rests: ["5c584c", "403d35", "817c6b", "a29d8e"]

  a = {
    # I
    "G": primary[0]
    "B": primary[1]
    "D": primary[2]
    # V
    "F#": secondaryA[0]
    "A": secondaryA[1]
    #IV
    "C": secondaryB[0]
    "E": secondaryB[1]
    # incidentals
    "G#": primary[3]
    "Gx": secondaryA[1]
    "Ab": primary[4]
    "A#": secondaryA[2]
    "Bb": secondaryA[3]
    "B#": secondaryA[3]
    "Cb": secondaryB[2]
    "C#": secondaryB[3]
    "Cx": primary[2]
    "Db": secondaryA[4]
    "D#": secondaryB[4]
    "Eb": complementary[0]
    "E#": secondaryA[0]
    "Fb": complementary[1]
    "F" : complementary[2]
    "Gb": complementary[3]
    # rests
    "quarter rest": rests[0]
    "half rest": rests[1]
    "whole rest": rests[2]
    "eighth rest": rests[3]
  }

  keys = [
    "G": { 
      "1": "G", "2": "A", "3": "B", "4": "C", "5": "D", "6": "E", "7": "F#", 
      "1#": "G#", "1x": "Gx", "1b": "Gb", "1bb": "Gbb", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    },
    "E": { 
      "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", 
      "1#": "", "1x": "", "1b": "", "1bb": "", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    }
  ]

  c = preset1
  b = {
    # I
    "G": c.primary[0]
    "B": c.primary[1]
    "D": c.primary[2]
    # V
    "F#": c.secondaryA[0]
    "A": c.secondaryA[1]
    #IV
    "C": c.secondaryB[0]
    "E": c.secondaryB[1]
    # incidentals
    "G#": c.primary[3]
    "Gx": c.secondaryA[1]
    "Ab": c.primary[4]
    "A#": c.secondaryA[2]
    "Bb": c.secondaryA[3]
    "B#": c.secondaryA[3]
    "Cb": c.secondaryB[2]
    "C#": c.secondaryB[3]
    "Cx": c.primary[2]
    "Db": c.secondaryA[4]
    "D#": c.complementary[1]
    "Eb": c.complementary[0]
    "E#": c.secondaryA[0]
    "Fb": c.complementary[1]
    "F" : c.complementary[2]
    "Gb": c.complementary[3]
    # rests
    "quarter rest": rests[2]
    "half rest": rests[0]
    "whole rest": rests[1]
    "eighth rest": rests[3]
  }
  return b



#test = new MusicXmlFile "/midi/test2.xml", ->
test = new MusicXmlFile "/midi/chopin_prelude-no4-op28-eminor.xml", ->
#test = new MusicXmlFile "/midi/brahms_stringquartet-no1-op51-movement1-cminor.xml", ->
#test = new MusicXmlFile "/midi/bach_suite-no1-cello-prelude.xml", ->
  $data = $ ".data"
  console.log test
  settings = new Settings()
  for used in test.usedPitchSteps
    $data.append "<br /> key #{used.key}: "
    for note in used.notes
      colorInfo = settings.getColorInfo used.key, note
      fore = if colorInfo.isWhiteFore then "#fff" else "#000"
      $data.append "<span style='color: #{fore}; background: #{colorInfo.hex}'>#{note.toString(true)}</span>"
  $data.append "<br /> total measures #{test.measures.length}"
  $data.append "<br /> total notes #{test.count}"
  createView settings

createView = (settings) ->
  $canvas = $(".art")
  $canvas.attr "width", parseInt($canvas.css("width"))
  $canvas.attr "height", parseInt($canvas.css("height"))
  canvas = $canvas[0]

  canvasDivider = new VerticleRectangleCanvasDivider canvas.width, canvas.height, test.measures.length
  measureDivider = new HorizontalRectangleMeasureDivider()
  view = new MusicView canvas, test, canvasDivider, measureDivider, settings

class MusicView
  constructor: (@canvas, @music, canvasDivider, measureDivider, settings) ->
    if canvasDivider not instanceof CanvasDividingStrategy
      console.log "variable 'canvasDivider' is not of type 'CanvasDividingStrategy'"
    if measureDivider not instanceof MeasureDividingStrategy
      console.log "variable 'measureDivider' is not of type 'MeasureDividingStrategy'"
    if settings not instanceof Settings
      console.log "variable 'settings' is not of type 'Settings'"

    @context = @canvas.getContext "2d"

    @context.textBaseline = "top"
    for rect in canvasDivider.rectangles
      #@context.strokeRect rect.x, rect.y, rect.width, rect.height
      @context.fillText rect.id, rect.x, rect.y
      measure = @music.measures[rect.id]
      if measure
        rectangles = measureDivider.getRectangles rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure
        key = measure.attributes.key
        for noteRect in rectangles
          @context.fillStyle = settings.getColorInfo(key, noteRect.note).hex
          @context.fillRect noteRect.x, noteRect.y, noteRect.width, noteRect.height
    #$("body").append "<img src='#{canvas.toDataURL('image/png')}' />"






class window.MusicXmlFile
  constructor: (url, callback) ->
    self = @
    @measures = []
    @count = 0
    @usedKeys = []
    @usedPitchSteps = []

    load = (data) ->
      allNotes = {}
      allKeys = []
      $data = $ data

      $("part", $data).each ->
        $part = $ @
        previousAttributes = {}

        $("measure", $part).each ->
          newMeasure = new Measure @, previousAttributes
          previousAttributes = newMeasure.attributes
          self.measures.push newMeasure
          self.count += newMeasure.count
          allKeys.push newMeasure.attributes.key.name if _.indexOf(allKeys, newMeasure.attributes.key.name) is -1
          allNotes[newMeasure.attributes.key.name] ?= []
          allNotes[newMeasure.attributes.key.name].push (notes for notes in newMeasure.usedPitchSteps)

      self.usedKeys = allKeys
      _.each allKeys, (name) ->
        self.usedPitchSteps.push
          key: name,
          notes: _.chain(allNotes[name])
            .flatten()
            .uniq((note) -> note.toString true)
            .sortBy((note) -> note.isRest + note.toString true )
            .value()

      callback()?
    $.ajax(url).success load



keyInfo =
  "-7": "Cb"
  "-6": "Gb"
  "-5": "Db"
  "-4": "Ab"
  "-3": "Eb"
  "-2": "Bb"
  "-1": "F"
  "0": "C"
  "1": "G"
  "2": "D"
  "3": "A"
  "4": "E"
  "5": "B"
  "6": "F#"
  "7": "C#"

class Measure
  constructor: (@xml, previousAttributes) ->
    self = @
    $measure = $ @xml
    @number = $measure.attr("number")

    attributes = do -> # read attributes
      result = {}
      $attributes = $ "attributes", $measure
      return result if $attributes.length is 0

      $divisions = $ "divisions", $attributes
      result.divisions = $divisions.text() if $divisions.length > 0

      $staves = $ "staves", $attributes
      result.staves = $staves.text() if $staves.length > 0

      $clefs = $ "clef", $attributes
      result.clef = [] if $clefs.length > 0
      $clefs.each ->
        $clef = $ @
        result.clef.push
          number: $clef.attr "number"
          sign: $("sign", $clef).text()
          line: $("line", $clef).text()

      $key = $ "key", $attributes
      if $key.length > 0
        result.key =
          fifths: $("fifths", $key).text()
          mode: $("mode", $key).text()
        result.key.name = keyInfo[result.key.fifths]
        result.key.toString = result.key.inspect = -> @name

      #time beats beat-type
      $time = $ "time", $attributes
      if $time.length > 0
        result.time =
          beats: $("beats", $time).text()
          beatType: $("beat-type", $time).text()
          toString: -> @beats + "/" + @beatType

      result
    @attributes = $.extend {}, previousAttributes, attributes

    @notes = []
    @count = 0
    @usedPitchSteps = []
    $("note", $measure).each ->
      newNote = new Note @
      staff = (parseInt(newNote.staff) || 1) - 1
      self.notes[staff] ?= []
      self.notes[staff].push newNote
      self.count++
      self.usedPitchSteps.push newNote
    @usedPitchSteps = _.chain(@usedPitchSteps)
      .uniq((note) -> note.toString true)
      .sortBy((note) ->
        note.isRest + note.toString(true))
      .value()

class Note
  _pitchAlterMap: { "-2": "bb", "-1": "b", "0": "", "1": "#", "2": "x" }
  constructor: (@xml) ->
    $note = $ @xml
    @duration = $("duration", $note).text()
    @type = $("type", $note).text()
    @staff = $("staff", $note).text()
    $pitch = $("pitch", $note)
    if $pitch.length > 0
      @pitch =
        step: $("step", $pitch).text()
        octave: $("octave", $pitch).text()
      @pitch.alter = $("alter", $pitch).text()
      @pitch.alter = 0 if @pitch.alter is ""
    @isRest = $("rest", $note).length > 0
    @isGrace = $("grace", $note).length > 0
    @duration = 1 if @isGrace
    @type = "whole" if @type is "" and @isRest # default to whole rest if not specified
    $tie = $("tie", $note)
    @tie = $tie.attr("type") if $tie.length > 0
  toString: (simple) ->
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}" if @pitch and simple
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}#{@pitch.octave} #{@type}" if @pitch and not simple
    return "#{@type} rest" if @isRest
  toHtml: -> Note.toHtml @toString()
  @toHtml: (noteName) ->
    noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x","&#119082;")
      .replace("b", "&#9837;").replace("n", "&#9838;")

class NoteDraw
  constructor: ->

class @Settings
  constructor: ->
    @colors =
    # key F: A,Bb,C,D,E,F,G,quarter rest,whole rest
    # http://www.colourlovers.com/palette/2630757/Shifting
      "F":
        "A": "DAEEEA"
        "Bb": "EACEC4"
        "C": "43586C"
        "D": "A86060"
        "E": "904848"
        "F": "799892"
        "G": "C79A8B"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key A: A,C#,E,half rest,quarter rest,whole rest
      "A":
        "A": "0000ff"
        "C#": "0000cc"
        "E": "000099"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key Ab: Ab,C,Eb,half rest,quarter rest,whole rest
      "Ab":
        "Ab": "00ff00"
        "C": "00cc00"
        "Eb": "009900"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      "G": presetColors("G")
      "Eb": presetColors("Eb")
      "C": presetColors("C")
      "E": presetColors("E")
  getColorInfo: (key, note) ->
    hex = @colors[key][note.toString(true)]
    return { hex: "##{hex}", isWhiteFore: @needsWhiteFore(hex) }
  needsWhiteFore: (hexcolor) ->
    # http://24ways.org/2010/calculating-color-contrast/
    r = parseInt hexcolor.substr(0,2),16
    g = parseInt hexcolor.substr(2,2),16
    b = parseInt hexcolor.substr(4,2),16
    yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    if yiq >= 128 then false else true

presetColors = (key) ->
  primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"]
  secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"]
  secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"]
  complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"]
  rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"]

  preset1 =
    primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"]
    secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"]
    secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"] 
    complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"]
    rests: ["5c584c", "403d35", "817c6b", "a29d8e"]

  a = {
    # I
    "G": primary[0]
    "B": primary[1]
    "D": primary[2]
    # V
    "F#": secondaryA[0]
    "A": secondaryA[1]
    #IV
    "C": secondaryB[0]
    "E": secondaryB[1]
    # incidentals
    "G#": primary[3]
    "Gx": secondaryA[1]
    "Ab": primary[4]
    "A#": secondaryA[2]
    "Bb": secondaryA[3]
    "B#": secondaryA[3]
    "Cb": secondaryB[2]
    "C#": secondaryB[3]
    "Cx": primary[2]
    "Db": secondaryA[4]
    "D#": secondaryB[4]
    "Eb": complementary[0]
    "E#": secondaryA[0]
    "Fb": complementary[1]
    "F" : complementary[2]
    "Gb": complementary[3]
    # rests
    "quarter rest": rests[0]
    "half rest": rests[1]
    "whole rest": rests[2]
    "eighth rest": rests[3]
  }

  keys = [
    "G": { 
      "1": "G", "2": "A", "3": "B", "4": "C", "5": "D", "6": "E", "7": "F#", 
      "1#": "G#", "1x": "Gx", "1b": "Gb", "1bb": "Gbb", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    },
    "E": { 
      "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", 
      "1#": "", "1x": "", "1b": "", "1bb": "", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    }
  ]

  c = preset1
  b = {
    # I
    "G": c.primary[0]
    "B": c.primary[1]
    "D": c.primary[2]
    # V
    "F#": c.secondaryA[0]
    "A": c.secondaryA[1]
    #IV
    "C": c.secondaryB[0]
    "E": c.secondaryB[1]
    # incidentals
    "G#": c.primary[3]
    "Gx": c.secondaryA[1]
    "Ab": c.primary[4]
    "A#": c.secondaryA[2]
    "Bb": c.secondaryA[3]
    "B#": c.secondaryA[3]
    "Cb": c.secondaryB[2]
    "C#": c.secondaryB[3]
    "Cx": c.primary[2]
    "Db": c.secondaryA[4]
    "D#": c.complementary[1]
    "Eb": c.complementary[0]
    "E#": c.secondaryA[0]
    "Fb": c.complementary[1]
    "F" : c.complementary[2]
    "Gb": c.complementary[3]
    # rests
    "quarter rest": rests[2]
    "half rest": rests[0]
    "whole rest": rests[1]
    "eighth rest": rests[3]
  }
  return b



#test = new MusicXmlFile "/midi/test2.xml", ->
test = new MusicXmlFile "/midi/chopin_prelude-no4-op28-eminor.xml", ->
#test = new MusicXmlFile "/midi/brahms_stringquartet-no1-op51-movement1-cminor.xml", ->
#test = new MusicXmlFile "/midi/bach_suite-no1-cello-prelude.xml", ->
  $data = $ ".data"
  console.log test
  settings = new Settings()
  for used in test.usedPitchSteps
    $data.append "<br /> key #{used.key}: "
    for note in used.notes
      colorInfo = settings.getColorInfo used.key, note
      fore = if colorInfo.isWhiteFore then "#fff" else "#000"
      $data.append "<span style='color: #{fore}; background: #{colorInfo.hex}'>#{note.toString(true)}</span>"
  $data.append "<br /> total measures #{test.measures.length}"
  $data.append "<br /> total notes #{test.count}"
  createView settings

createView = (settings) ->
  $canvas = $(".art")
  $canvas.attr "width", parseInt($canvas.css("width"))
  $canvas.attr "height", parseInt($canvas.css("height"))
  canvas = $canvas[0]

  canvasDivider = new VerticleRectangleCanvasDivider canvas.width, canvas.height, test.measures.length
  measureDivider = new HorizontalRectangleMeasureDivider()
  view = new MusicView canvas, test, canvasDivider, measureDivider, settings

class MusicView
  constructor: (@canvas, @music, canvasDivider, measureDivider, settings) ->
    if canvasDivider not instanceof CanvasDividingStrategy
      console.log "variable 'canvasDivider' is not of type 'CanvasDividingStrategy'"
    if measureDivider not instanceof MeasureDividingStrategy
      console.log "variable 'measureDivider' is not of type 'MeasureDividingStrategy'"
    if settings not instanceof Settings
      console.log "variable 'settings' is not of type 'Settings'"

    @context = @canvas.getContext "2d"

    @context.textBaseline = "top"
    for rect in canvasDivider.rectangles
      #@context.strokeRect rect.x, rect.y, rect.width, rect.height
      @context.fillText rect.id, rect.x, rect.y
      measure = @music.measures[rect.id]
      if measure
        rectangles = measureDivider.getRectangles rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure
        key = measure.attributes.key
        for noteRect in rectangles
          @context.fillStyle = settings.getColorInfo(key, noteRect.note).hex
          @context.fillRect noteRect.x, noteRect.y, noteRect.width, noteRect.height
    #$("body").append "<img src='#{canvas.toDataURL('image/png')}' />"






class window.MusicXmlFile
  constructor: (url, callback) ->
    self = @
    @measures = []
    @count = 0
    @usedKeys = []
    @usedPitchSteps = []

    load = (data) ->
      allNotes = {}
      allKeys = []
      $data = $ data

      $("part", $data).each ->
        $part = $ @
        previousAttributes = {}

        $("measure", $part).each ->
          newMeasure = new Measure @, previousAttributes
          previousAttributes = newMeasure.attributes
          self.measures.push newMeasure
          self.count += newMeasure.count
          allKeys.push newMeasure.attributes.key.name if _.indexOf(allKeys, newMeasure.attributes.key.name) is -1
          allNotes[newMeasure.attributes.key.name] ?= []
          allNotes[newMeasure.attributes.key.name].push (notes for notes in newMeasure.usedPitchSteps)

      self.usedKeys = allKeys
      _.each allKeys, (name) ->
        self.usedPitchSteps.push
          key: name,
          notes: _.chain(allNotes[name])
            .flatten()
            .uniq((note) -> note.toString true)
            .sortBy((note) -> note.isRest + note.toString true )
            .value()

      callback()?
    $.ajax(url).success load



keyInfo =
  "-7": "Cb"
  "-6": "Gb"
  "-5": "Db"
  "-4": "Ab"
  "-3": "Eb"
  "-2": "Bb"
  "-1": "F"
  "0": "C"
  "1": "G"
  "2": "D"
  "3": "A"
  "4": "E"
  "5": "B"
  "6": "F#"
  "7": "C#"

class Measure
  constructor: (@xml, previousAttributes) ->
    self = @
    $measure = $ @xml
    @number = $measure.attr("number")

    attributes = do -> # read attributes
      result = {}
      $attributes = $ "attributes", $measure
      return result if $attributes.length is 0

      $divisions = $ "divisions", $attributes
      result.divisions = $divisions.text() if $divisions.length > 0

      $staves = $ "staves", $attributes
      result.staves = $staves.text() if $staves.length > 0

      $clefs = $ "clef", $attributes
      result.clef = [] if $clefs.length > 0
      $clefs.each ->
        $clef = $ @
        result.clef.push
          number: $clef.attr "number"
          sign: $("sign", $clef).text()
          line: $("line", $clef).text()

      $key = $ "key", $attributes
      if $key.length > 0
        result.key =
          fifths: $("fifths", $key).text()
          mode: $("mode", $key).text()
        result.key.name = keyInfo[result.key.fifths]
        result.key.toString = result.key.inspect = -> @name

      #time beats beat-type
      $time = $ "time", $attributes
      if $time.length > 0
        result.time =
          beats: $("beats", $time).text()
          beatType: $("beat-type", $time).text()
          toString: -> @beats + "/" + @beatType

      result
    @attributes = $.extend {}, previousAttributes, attributes

    @notes = []
    @count = 0
    @usedPitchSteps = []
    $("note", $measure).each ->
      newNote = new Note @
      staff = (parseInt(newNote.staff) || 1) - 1
      self.notes[staff] ?= []
      self.notes[staff].push newNote
      self.count++
      self.usedPitchSteps.push newNote
    @usedPitchSteps = _.chain(@usedPitchSteps)
      .uniq((note) -> note.toString true)
      .sortBy((note) ->
        note.isRest + note.toString(true))
      .value()

class Note
  _pitchAlterMap: { "-2": "bb", "-1": "b", "0": "", "1": "#", "2": "x" }
  constructor: (@xml) ->
    $note = $ @xml
    @duration = $("duration", $note).text()
    @type = $("type", $note).text()
    @staff = $("staff", $note).text()
    $pitch = $("pitch", $note)
    if $pitch.length > 0
      @pitch =
        step: $("step", $pitch).text()
        octave: $("octave", $pitch).text()
      @pitch.alter = $("alter", $pitch).text()
      @pitch.alter = 0 if @pitch.alter is ""
    @isRest = $("rest", $note).length > 0
    @isGrace = $("grace", $note).length > 0
    @duration = 1 if @isGrace
    @type = "whole" if @type is "" and @isRest # default to whole rest if not specified
    $tie = $("tie", $note)
    @tie = $tie.attr("type") if $tie.length > 0
  toString: (simple) ->
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}" if @pitch and simple
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}#{@pitch.octave} #{@type}" if @pitch and not simple
    return "#{@type} rest" if @isRest
  toHtml: -> Note.toHtml @toString()
  @toHtml: (noteName) ->
    noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x","&#119082;")
      .replace("b", "&#9837;").replace("n", "&#9838;")

class NoteDraw
  constructor: ->

class @Settings
  constructor: ->
    @colors =
    # key F: A,Bb,C,D,E,F,G,quarter rest,whole rest
    # http://www.colourlovers.com/palette/2630757/Shifting
      "F":
        "A": "DAEEEA"
        "Bb": "EACEC4"
        "C": "43586C"
        "D": "A86060"
        "E": "904848"
        "F": "799892"
        "G": "C79A8B"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key A: A,C#,E,half rest,quarter rest,whole rest
      "A":
        "A": "0000ff"
        "C#": "0000cc"
        "E": "000099"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key Ab: Ab,C,Eb,half rest,quarter rest,whole rest
      "Ab":
        "Ab": "00ff00"
        "C": "00cc00"
        "Eb": "009900"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      "G": presetColors("G")
      "Eb": presetColors("Eb")
      "C": presetColors("C")
      "E": presetColors("E")
  getColorInfo: (key, note) ->
    hex = @colors[key][note.toString(true)]
    return { hex: "##{hex}", isWhiteFore: @needsWhiteFore(hex) }
  needsWhiteFore: (hexcolor) ->
    # http://24ways.org/2010/calculating-color-contrast/
    r = parseInt hexcolor.substr(0,2),16
    g = parseInt hexcolor.substr(2,2),16
    b = parseInt hexcolor.substr(4,2),16
    yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    if yiq >= 128 then false else true

presetColors = (key) ->
  primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"]
  secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"]
  secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"]
  complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"]
  rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"]

  preset1 =
    primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"]
    secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"]
    secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"] 
    complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"]
    rests: ["5c584c", "403d35", "817c6b", "a29d8e"]

  a = {
    # I
    "G": primary[0]
    "B": primary[1]
    "D": primary[2]
    # V
    "F#": secondaryA[0]
    "A": secondaryA[1]
    #IV
    "C": secondaryB[0]
    "E": secondaryB[1]
    # incidentals
    "G#": primary[3]
    "Gx": secondaryA[1]
    "Ab": primary[4]
    "A#": secondaryA[2]
    "Bb": secondaryA[3]
    "B#": secondaryA[3]
    "Cb": secondaryB[2]
    "C#": secondaryB[3]
    "Cx": primary[2]
    "Db": secondaryA[4]
    "D#": secondaryB[4]
    "Eb": complementary[0]
    "E#": secondaryA[0]
    "Fb": complementary[1]
    "F" : complementary[2]
    "Gb": complementary[3]
    # rests
    "quarter rest": rests[0]
    "half rest": rests[1]
    "whole rest": rests[2]
    "eighth rest": rests[3]
  }

  keys = [
    "G": { 
      "1": "G", "2": "A", "3": "B", "4": "C", "5": "D", "6": "E", "7": "F#", 
      "1#": "G#", "1x": "Gx", "1b": "Gb", "1bb": "Gbb", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    },
    "E": { 
      "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", 
      "1#": "", "1x": "", "1b": "", "1bb": "", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    }
  ]

  c = preset1
  b = {
    # I
    "G": c.primary[0]
    "B": c.primary[1]
    "D": c.primary[2]
    # V
    "F#": c.secondaryA[0]
    "A": c.secondaryA[1]
    #IV
    "C": c.secondaryB[0]
    "E": c.secondaryB[1]
    # incidentals
    "G#": c.primary[3]
    "Gx": c.secondaryA[1]
    "Ab": c.primary[4]
    "A#": c.secondaryA[2]
    "Bb": c.secondaryA[3]
    "B#": c.secondaryA[3]
    "Cb": c.secondaryB[2]
    "C#": c.secondaryB[3]
    "Cx": c.primary[2]
    "Db": c.secondaryA[4]
    "D#": c.complementary[1]
    "Eb": c.complementary[0]
    "E#": c.secondaryA[0]
    "Fb": c.complementary[1]
    "F" : c.complementary[2]
    "Gb": c.complementary[3]
    # rests
    "quarter rest": rests[2]
    "half rest": rests[0]
    "whole rest": rests[1]
    "eighth rest": rests[3]
  }
  return b



#test = new MusicXmlFile "/midi/test2.xml", ->
test = new MusicXmlFile "/midi/chopin_prelude-no4-op28-eminor.xml", ->
#test = new MusicXmlFile "/midi/brahms_stringquartet-no1-op51-movement1-cminor.xml", ->
#test = new MusicXmlFile "/midi/bach_suite-no1-cello-prelude.xml", ->
  $data = $ ".data"
  console.log test
  settings = new Settings()
  for used in test.usedPitchSteps
    $data.append "<br /> key #{used.key}: "
    for note in used.notes
      colorInfo = settings.getColorInfo used.key, note
      fore = if colorInfo.isWhiteFore then "#fff" else "#000"
      $data.append "<span style='color: #{fore}; background: #{colorInfo.hex}'>#{note.toString(true)}</span>"
  $data.append "<br /> total measures #{test.measures.length}"
  $data.append "<br /> total notes #{test.count}"
  createView settings

createView = (settings) ->
  $canvas = $(".art")
  $canvas.attr "width", parseInt($canvas.css("width"))
  $canvas.attr "height", parseInt($canvas.css("height"))
  canvas = $canvas[0]

  canvasDivider = new VerticleRectangleCanvasDivider canvas.width, canvas.height, test.measures.length
  measureDivider = new HorizontalRectangleMeasureDivider()
  view = new MusicView canvas, test, canvasDivider, measureDivider, settings

class MusicView
  constructor: (@canvas, @music, canvasDivider, measureDivider, settings) ->
    if canvasDivider not instanceof CanvasDividingStrategy
      console.log "variable 'canvasDivider' is not of type 'CanvasDividingStrategy'"
    if measureDivider not instanceof MeasureDividingStrategy
      console.log "variable 'measureDivider' is not of type 'MeasureDividingStrategy'"
    if settings not instanceof Settings
      console.log "variable 'settings' is not of type 'Settings'"

    @context = @canvas.getContext "2d"

    @context.textBaseline = "top"
    for rect in canvasDivider.rectangles
      #@context.strokeRect rect.x, rect.y, rect.width, rect.height
      @context.fillText rect.id, rect.x, rect.y
      measure = @music.measures[rect.id]
      if measure
        rectangles = measureDivider.getRectangles rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure
        key = measure.attributes.key
        for noteRect in rectangles
          @context.fillStyle = settings.getColorInfo(key, noteRect.note).hex
          @context.fillRect noteRect.x, noteRect.y, noteRect.width, noteRect.height
    #$("body").append "<img src='#{canvas.toDataURL('image/png')}' />"






class window.MusicXmlFile
  constructor: (url, callback) ->
    self = @
    @measures = []
    @count = 0
    @usedKeys = []
    @usedPitchSteps = []

    load = (data) ->
      allNotes = {}
      allKeys = []
      $data = $ data

      $("part", $data).each ->
        $part = $ @
        previousAttributes = {}

        $("measure", $part).each ->
          newMeasure = new Measure @, previousAttributes
          previousAttributes = newMeasure.attributes
          self.measures.push newMeasure
          self.count += newMeasure.count
          allKeys.push newMeasure.attributes.key.name if _.indexOf(allKeys, newMeasure.attributes.key.name) is -1
          allNotes[newMeasure.attributes.key.name] ?= []
          allNotes[newMeasure.attributes.key.name].push (notes for notes in newMeasure.usedPitchSteps)

      self.usedKeys = allKeys
      _.each allKeys, (name) ->
        self.usedPitchSteps.push
          key: name,
          notes: _.chain(allNotes[name])
            .flatten()
            .uniq((note) -> note.toString true)
            .sortBy((note) -> note.isRest + note.toString true )
            .value()

      callback()?
    $.ajax(url).success load



keyInfo =
  "-7": "Cb"
  "-6": "Gb"
  "-5": "Db"
  "-4": "Ab"
  "-3": "Eb"
  "-2": "Bb"
  "-1": "F"
  "0": "C"
  "1": "G"
  "2": "D"
  "3": "A"
  "4": "E"
  "5": "B"
  "6": "F#"
  "7": "C#"

class Measure
  constructor: (@xml, previousAttributes) ->
    self = @
    $measure = $ @xml
    @number = $measure.attr("number")

    attributes = do -> # read attributes
      result = {}
      $attributes = $ "attributes", $measure
      return result if $attributes.length is 0

      $divisions = $ "divisions", $attributes
      result.divisions = $divisions.text() if $divisions.length > 0

      $staves = $ "staves", $attributes
      result.staves = $staves.text() if $staves.length > 0

      $clefs = $ "clef", $attributes
      result.clef = [] if $clefs.length > 0
      $clefs.each ->
        $clef = $ @
        result.clef.push
          number: $clef.attr "number"
          sign: $("sign", $clef).text()
          line: $("line", $clef).text()

      $key = $ "key", $attributes
      if $key.length > 0
        result.key =
          fifths: $("fifths", $key).text()
          mode: $("mode", $key).text()
        result.key.name = keyInfo[result.key.fifths]
        result.key.toString = result.key.inspect = -> @name

      #time beats beat-type
      $time = $ "time", $attributes
      if $time.length > 0
        result.time =
          beats: $("beats", $time).text()
          beatType: $("beat-type", $time).text()
          toString: -> @beats + "/" + @beatType

      result
    @attributes = $.extend {}, previousAttributes, attributes

    @notes = []
    @count = 0
    @usedPitchSteps = []
    $("note", $measure).each ->
      newNote = new Note @
      staff = (parseInt(newNote.staff) || 1) - 1
      self.notes[staff] ?= []
      self.notes[staff].push newNote
      self.count++
      self.usedPitchSteps.push newNote
    @usedPitchSteps = _.chain(@usedPitchSteps)
      .uniq((note) -> note.toString true)
      .sortBy((note) ->
        note.isRest + note.toString(true))
      .value()

class Note
  _pitchAlterMap: { "-2": "bb", "-1": "b", "0": "", "1": "#", "2": "x" }
  constructor: (@xml) ->
    $note = $ @xml
    @duration = $("duration", $note).text()
    @type = $("type", $note).text()
    @staff = $("staff", $note).text()
    $pitch = $("pitch", $note)
    if $pitch.length > 0
      @pitch =
        step: $("step", $pitch).text()
        octave: $("octave", $pitch).text()
      @pitch.alter = $("alter", $pitch).text()
      @pitch.alter = 0 if @pitch.alter is ""
    @isRest = $("rest", $note).length > 0
    @isGrace = $("grace", $note).length > 0
    @duration = 1 if @isGrace
    @type = "whole" if @type is "" and @isRest # default to whole rest if not specified
    $tie = $("tie", $note)
    @tie = $tie.attr("type") if $tie.length > 0
  toString: (simple) ->
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}" if @pitch and simple
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}#{@pitch.octave} #{@type}" if @pitch and not simple
    return "#{@type} rest" if @isRest
  toHtml: -> Note.toHtml @toString()
  @toHtml: (noteName) ->
    noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x","&#119082;")
      .replace("b", "&#9837;").replace("n", "&#9838;")

class NoteDraw
  constructor: ->

class @Settings
  constructor: ->
    @colors =
    # key F: A,Bb,C,D,E,F,G,quarter rest,whole rest
    # http://www.colourlovers.com/palette/2630757/Shifting
      "F":
        "A": "DAEEEA"
        "Bb": "EACEC4"
        "C": "43586C"
        "D": "A86060"
        "E": "904848"
        "F": "799892"
        "G": "C79A8B"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key A: A,C#,E,half rest,quarter rest,whole rest
      "A":
        "A": "0000ff"
        "C#": "0000cc"
        "E": "000099"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key Ab: Ab,C,Eb,half rest,quarter rest,whole rest
      "Ab":
        "Ab": "00ff00"
        "C": "00cc00"
        "Eb": "009900"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      "G": presetColors("G")
      "Eb": presetColors("Eb")
      "C": presetColors("C")
      "E": presetColors("E")
  getColorInfo: (key, note) ->
    hex = @colors[key][note.toString(true)]
    return { hex: "##{hex}", isWhiteFore: @needsWhiteFore(hex) }
  needsWhiteFore: (hexcolor) ->
    # http://24ways.org/2010/calculating-color-contrast/
    r = parseInt hexcolor.substr(0,2),16
    g = parseInt hexcolor.substr(2,2),16
    b = parseInt hexcolor.substr(4,2),16
    yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    if yiq >= 128 then false else true

presetColors = (key) ->
  primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"]
  secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"]
  secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"]
  complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"]
  rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"]

  preset1 =
    primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"]
    secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"]
    secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"] 
    complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"]
    rests: ["5c584c", "403d35", "817c6b", "a29d8e"]

  a = {
    # I
    "G": primary[0]
    "B": primary[1]
    "D": primary[2]
    # V
    "F#": secondaryA[0]
    "A": secondaryA[1]
    #IV
    "C": secondaryB[0]
    "E": secondaryB[1]
    # incidentals
    "G#": primary[3]
    "Gx": secondaryA[1]
    "Ab": primary[4]
    "A#": secondaryA[2]
    "Bb": secondaryA[3]
    "B#": secondaryA[3]
    "Cb": secondaryB[2]
    "C#": secondaryB[3]
    "Cx": primary[2]
    "Db": secondaryA[4]
    "D#": secondaryB[4]
    "Eb": complementary[0]
    "E#": secondaryA[0]
    "Fb": complementary[1]
    "F" : complementary[2]
    "Gb": complementary[3]
    # rests
    "quarter rest": rests[0]
    "half rest": rests[1]
    "whole rest": rests[2]
    "eighth rest": rests[3]
  }

  keys = [
    "G": { 
      "1": "G", "2": "A", "3": "B", "4": "C", "5": "D", "6": "E", "7": "F#", 
      "1#": "G#", "1x": "Gx", "1b": "Gb", "1bb": "Gbb", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    },
    "E": { 
      "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", 
      "1#": "", "1x": "", "1b": "", "1bb": "", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    }
  ]

  c = preset1
  b = {
    # I
    "G": c.primary[0]
    "B": c.primary[1]
    "D": c.primary[2]
    # V
    "F#": c.secondaryA[0]
    "A": c.secondaryA[1]
    #IV
    "C": c.secondaryB[0]
    "E": c.secondaryB[1]
    # incidentals
    "G#": c.primary[3]
    "Gx": c.secondaryA[1]
    "Ab": c.primary[4]
    "A#": c.secondaryA[2]
    "Bb": c.secondaryA[3]
    "B#": c.secondaryA[3]
    "Cb": c.secondaryB[2]
    "C#": c.secondaryB[3]
    "Cx": c.primary[2]
    "Db": c.secondaryA[4]
    "D#": c.complementary[1]
    "Eb": c.complementary[0]
    "E#": c.secondaryA[0]
    "Fb": c.complementary[1]
    "F" : c.complementary[2]
    "Gb": c.complementary[3]
    # rests
    "quarter rest": rests[2]
    "half rest": rests[0]
    "whole rest": rests[1]
    "eighth rest": rests[3]
  }
  return b



#test = new MusicXmlFile "/assets/midi/test2.xml", ->
test = new MusicXmlFile "/assets/midi/chopin_prelude-no4-op28-eminor.xml", ->
#test = new MusicXmlFile "/assets/midi/brahms_stringquartet-no1-op51-movement1-cminor.xml", ->
#test = new MusicXmlFile "/assets/midi/bach_suite-no1-cello-prelude.xml", ->
  $data = $ ".data"
  console.log test
  settings = new Settings()
  for used in test.usedPitchSteps
    $data.append "<br /> key #{used.key}: "
    for note in used.notes
      colorInfo = settings.getColorInfo used.key, note
      fore = if colorInfo.isWhiteFore then "#fff" else "#000"
      $data.append "<span style='color: #{fore}; background: #{colorInfo.hex}'>#{note.toString(true)}</span>"
  $data.append "<br /> total measures #{test.measures.length}"
  $data.append "<br /> total notes #{test.count}"
  createView settings

createView = (settings) ->
  $canvas = $(".art")
  $canvas.attr "width", parseInt($canvas.css("width"))
  $canvas.attr "height", parseInt($canvas.css("height"))
  canvas = $canvas[0]

  canvasDivider = new VerticleRectangleCanvasDivider canvas.width, canvas.height, test.measures.length
  measureDivider = new HorizontalRectangleMeasureDivider()
  view = new MusicView canvas, test, canvasDivider, measureDivider, settings

class MusicView
  constructor: (@canvas, @music, canvasDivider, measureDivider, settings) ->
    if canvasDivider not instanceof CanvasDividingStrategy
      console.log "variable 'canvasDivider' is not of type 'CanvasDividingStrategy'"
    if measureDivider not instanceof MeasureDividingStrategy
      console.log "variable 'measureDivider' is not of type 'MeasureDividingStrategy'"
    if settings not instanceof Settings
      console.log "variable 'settings' is not of type 'Settings'"

    @context = @canvas.getContext "2d"

    @context.textBaseline = "top"
    for rect in canvasDivider.rectangles
      #@context.strokeRect rect.x, rect.y, rect.width, rect.height
      @context.fillText rect.id, rect.x, rect.y
      measure = @music.measures[rect.id]
      if measure
        rectangles = measureDivider.getRectangles rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure
        key = measure.attributes.key
        for noteRect in rectangles
          @context.fillStyle = settings.getColorInfo(key, noteRect.note).hex
          @context.fillRect noteRect.x, noteRect.y, noteRect.width, noteRect.height
    #$("body").append "<img src='#{canvas.toDataURL('image/png')}' />"






class window.MusicXmlFile
  constructor: (url, callback) ->
    self = @
    @measures = []
    @count = 0
    @usedKeys = []
    @usedPitchSteps = []

    load = (data) ->
      allNotes = {}
      allKeys = []
      $data = $ data

      $("part", $data).each ->
        $part = $ @
        previousAttributes = {}

        $("measure", $part).each ->
          newMeasure = new Measure @, previousAttributes
          previousAttributes = newMeasure.attributes
          self.measures.push newMeasure
          self.count += newMeasure.count
          allKeys.push newMeasure.attributes.key.name if _.indexOf(allKeys, newMeasure.attributes.key.name) is -1
          allNotes[newMeasure.attributes.key.name] ?= []
          allNotes[newMeasure.attributes.key.name].push (notes for notes in newMeasure.usedPitchSteps)

      self.usedKeys = allKeys
      _.each allKeys, (name) ->
        self.usedPitchSteps.push
          key: name,
          notes: _.chain(allNotes[name])
            .flatten()
            .uniq((note) -> note.toString true)
            .sortBy((note) -> note.isRest + note.toString true )
            .value()

      callback()?
    $.ajax(url).success load



keyInfo =
  "-7": "Cb"
  "-6": "Gb"
  "-5": "Db"
  "-4": "Ab"
  "-3": "Eb"
  "-2": "Bb"
  "-1": "F"
  "0": "C"
  "1": "G"
  "2": "D"
  "3": "A"
  "4": "E"
  "5": "B"
  "6": "F#"
  "7": "C#"

class Measure
  constructor: (@xml, previousAttributes) ->
    self = @
    $measure = $ @xml
    @number = $measure.attr("number")

    attributes = do -> # read attributes
      result = {}
      $attributes = $ "attributes", $measure
      return result if $attributes.length is 0

      $divisions = $ "divisions", $attributes
      result.divisions = $divisions.text() if $divisions.length > 0

      $staves = $ "staves", $attributes
      result.staves = $staves.text() if $staves.length > 0

      $clefs = $ "clef", $attributes
      result.clef = [] if $clefs.length > 0
      $clefs.each ->
        $clef = $ @
        result.clef.push
          number: $clef.attr "number"
          sign: $("sign", $clef).text()
          line: $("line", $clef).text()

      $key = $ "key", $attributes
      if $key.length > 0
        result.key =
          fifths: $("fifths", $key).text()
          mode: $("mode", $key).text()
        result.key.name = keyInfo[result.key.fifths]
        result.key.toString = result.key.inspect = -> @name

      #time beats beat-type
      $time = $ "time", $attributes
      if $time.length > 0
        result.time =
          beats: $("beats", $time).text()
          beatType: $("beat-type", $time).text()
          toString: -> @beats + "/" + @beatType

      result
    @attributes = $.extend {}, previousAttributes, attributes

    @notes = []
    @count = 0
    @usedPitchSteps = []
    $("note", $measure).each ->
      newNote = new Note @
      staff = (parseInt(newNote.staff) || 1) - 1
      self.notes[staff] ?= []
      self.notes[staff].push newNote
      self.count++
      self.usedPitchSteps.push newNote
    @usedPitchSteps = _.chain(@usedPitchSteps)
      .uniq((note) -> note.toString true)
      .sortBy((note) ->
        note.isRest + note.toString(true))
      .value()

class Note
  _pitchAlterMap: { "-2": "bb", "-1": "b", "0": "", "1": "#", "2": "x" }
  constructor: (@xml) ->
    $note = $ @xml
    @duration = $("duration", $note).text()
    @type = $("type", $note).text()
    @staff = $("staff", $note).text()
    $pitch = $("pitch", $note)
    if $pitch.length > 0
      @pitch =
        step: $("step", $pitch).text()
        octave: $("octave", $pitch).text()
      @pitch.alter = $("alter", $pitch).text()
      @pitch.alter = 0 if @pitch.alter is ""
    @isRest = $("rest", $note).length > 0
    @isGrace = $("grace", $note).length > 0
    @duration = 1 if @isGrace
    @type = "whole" if @type is "" and @isRest # default to whole rest if not specified
    $tie = $("tie", $note)
    @tie = $tie.attr("type") if $tie.length > 0
  toString: (simple) ->
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}" if @pitch and simple
    return "#{@pitch.step}#{@_pitchAlterMap[@pitch.alter]}#{@pitch.octave} #{@type}" if @pitch and not simple
    return "#{@type} rest" if @isRest
  toHtml: -> Note.toHtml @toString()
  @toHtml: (noteName) ->
    noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x","&#119082;")
      .replace("b", "&#9837;").replace("n", "&#9838;")

class NoteDraw
  constructor: ->

class @Settings
  constructor: ->
    @colors =
    # key F: A,Bb,C,D,E,F,G,quarter rest,whole rest
    # http://www.colourlovers.com/palette/2630757/Shifting
      "F":
        "A": "DAEEEA"
        "Bb": "EACEC4"
        "C": "43586C"
        "D": "A86060"
        "E": "904848"
        "F": "799892"
        "G": "C79A8B"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key A: A,C#,E,half rest,quarter rest,whole rest
      "A":
        "A": "0000ff"
        "C#": "0000cc"
        "E": "000099"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      # key Ab: Ab,C,Eb,half rest,quarter rest,whole rest
      "Ab":
        "Ab": "00ff00"
        "C": "00cc00"
        "Eb": "009900"
        "half rest": "cccccc"
        "quarter rest": "999999"
        "whole rest": "ffffff"
      "G": presetColors("G")
      "Eb": presetColors("Eb")
      "C": presetColors("C")
      "E": presetColors("E")
  getColorInfo: (key, note) ->
    hex = @colors[key][note.toString(true)]
    return { hex: "##{hex}", isWhiteFore: @needsWhiteFore(hex) }
  needsWhiteFore: (hexcolor) ->
    # http://24ways.org/2010/calculating-color-contrast/
    r = parseInt hexcolor.substr(0,2),16
    g = parseInt hexcolor.substr(2,2),16
    b = parseInt hexcolor.substr(4,2),16
    yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    if yiq >= 128 then false else true

presetColors = (key) ->
  primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"]
  secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"]
  secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"]
  complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"]
  rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"]

  preset1 =
    primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"]
    secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"]
    secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"] 
    complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"]
    rests: ["5c584c", "403d35", "817c6b", "a29d8e"]

  a = {
    # I
    "G": primary[0]
    "B": primary[1]
    "D": primary[2]
    # V
    "F#": secondaryA[0]
    "A": secondaryA[1]
    #IV
    "C": secondaryB[0]
    "E": secondaryB[1]
    # incidentals
    "G#": primary[3]
    "Gx": secondaryA[1]
    "Ab": primary[4]
    "A#": secondaryA[2]
    "Bb": secondaryA[3]
    "B#": secondaryA[3]
    "Cb": secondaryB[2]
    "C#": secondaryB[3]
    "Cx": primary[2]
    "Db": secondaryA[4]
    "D#": secondaryB[4]
    "Eb": complementary[0]
    "E#": secondaryA[0]
    "Fb": complementary[1]
    "F" : complementary[2]
    "Gb": complementary[3]
    # rests
    "quarter rest": rests[0]
    "half rest": rests[1]
    "whole rest": rests[2]
    "eighth rest": rests[3]
  }

  keys = [
    "G": { 
      "1": "G", "2": "A", "3": "B", "4": "C", "5": "D", "6": "E", "7": "F#", 
      "1#": "G#", "1x": "Gx", "1b": "Gb", "1bb": "Gbb", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    },
    "E": { 
      "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", 
      "1#": "", "1x": "", "1b": "", "1bb": "", "2#": "", "2x": "", "2b": "", "2bb": "",
      "3#": "", "3x": "", "3b": "", "3bb": "", "4#": "", "4x": "", "4b": "", "4bb": "",
      "5#": "", "5x": "", "5b": "", "5bb": "", "6#": "", "6x": "", "6b": "", "6bb": "",
      "7#": "", "7x": "", "7b": "", "7bb": ""
    }
  ]

  c = preset1
  b = {
    # I
    "G": c.primary[0]
    "B": c.primary[1]
    "D": c.primary[2]
    # V
    "F#": c.secondaryA[0]
    "A": c.secondaryA[1]
    #IV
    "C": c.secondaryB[0]
    "E": c.secondaryB[1]
    # incidentals
    "G#": c.primary[3]
    "Gx": c.secondaryA[1]
    "Ab": c.primary[4]
    "A#": c.secondaryA[2]
    "Bb": c.secondaryA[3]
    "B#": c.secondaryA[3]
    "Cb": c.secondaryB[2]
    "C#": c.secondaryB[3]
    "Cx": c.primary[2]
    "Db": c.secondaryA[4]
    "D#": c.complementary[1]
    "Eb": c.complementary[0]
    "E#": c.secondaryA[0]
    "Fb": c.complementary[1]
    "F" : c.complementary[2]
    "Gb": c.complementary[3]
    # rests
    "quarter rest": rests[2]
    "half rest": rests[0]
    "whole rest": rests[1]
    "eighth rest": rests[3]
  }
  return b



#test = new MusicXmlFile "/assets/midi/test2.xml", ->
test = new MusicXmlFile "/assets/midi/chopin_prelude-no4-op28-eminor.xml", ->
#test = new MusicXmlFile "/assets/midi/brahms_stringquartet-no1-op51-movement1-cminor.xml", ->
#test = new MusicXmlFile "/assets/midi/bach_suite-no1-cello-prelude.xml", ->
  $data = $ ".data"
  console.log test
  settings = new Settings()
  for used in test.usedPitchSteps
    $data.append "<br /> key #{used.key}: "
    for note in used.notes
      colorInfo = settings.getColorInfo used.key, note
      fore = if colorInfo.isWhiteFore then "#fff" else "#000"
      $data.append "<span style='color: #{fore}; background: #{colorInfo.hex}'>#{note.toString(true)}</span>"
  $data.append "<br /> total measures #{test.measures.length}"
  $data.append "<br /> total notes #{test.count}"
  createView settings

createView = (settings) ->
  $canvas = $(".art")
  $canvas.attr "width", parseInt($canvas.css("width"))
  $canvas.attr "height", parseInt($canvas.css("height"))
  canvas = $canvas[0]

  canvasDivider = new VerticleRectangleCanvasDivider canvas.width, canvas.height, test.measures.length
  measureDivider = new HorizontalRectangleMeasureDivider()
  view = new MusicView canvas, test, canvasDivider, measureDivider, settings

class MusicView
  constructor: (@canvas, @music, canvasDivider, measureDivider, settings) ->
    if canvasDivider not instanceof CanvasDividingStrategy
      console.log "variable 'canvasDivider' is not of type 'CanvasDividingStrategy'"
    if measureDivider not instanceof MeasureDividingStrategy
      console.log "variable 'measureDivider' is not of type 'MeasureDividingStrategy'"
    if settings not instanceof Settings
      console.log "variable 'settings' is not of type 'Settings'"

    @context = @canvas.getContext "2d"

    @context.textBaseline = "top"
    for rect in canvasDivider.rectangles
      #@context.strokeRect rect.x, rect.y, rect.width, rect.height
      @context.fillText rect.id, rect.x, rect.y
      measure = @music.measures[rect.id]
      if measure
        rectangles = measureDivider.getRectangles rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure
        key = measure.attributes.key
        for noteRect in rectangles
          @context.fillStyle = settings.getColorInfo(key, noteRect.note).hex
          @context.fillRect noteRect.x, noteRect.y, noteRect.width, noteRect.height
    #$("body").append "<img src='#{canvas.toDataURL('image/png')}' />"




