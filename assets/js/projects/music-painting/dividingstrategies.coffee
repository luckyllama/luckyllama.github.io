
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

