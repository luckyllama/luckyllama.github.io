
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

