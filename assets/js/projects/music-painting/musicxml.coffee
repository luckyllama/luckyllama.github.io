
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