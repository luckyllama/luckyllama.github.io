
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




