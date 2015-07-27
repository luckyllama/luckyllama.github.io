
module MusicXml {
   class Pitch {
      constructor(public step:string, public octave:string, public alter:string) {}
   }

   export class Note {
      private _pitchAlterMap = { "-2": "bb", "-1": "b", "0": "", "1": "#", "2": "x" };
      duration: number;
      type: string;
      staff: number;
      pitch: Pitch;
      isRest: boolean;
      isGrace: boolean;
      tie: string;

      constructor (public xml: any) {
         var $note: JQuery = $(xml);
         this.duration = parseInt($("duration", $note).text());
         this.type = $("type", $note).text();
         this.staff = parseInt($("staff", $note).text());
         var $pitch = $("pitch", $note);
         if ($pitch.length > 0) {
            this.pitch = new Pitch($("step", $pitch).text(), $("octave", $pitch).text(), $("alter", $pitch).text());
         }
         this.isRest = $("rest", $note).length > 0;
         // default to a whole rest if not defined
         if (this.isRest && this.type == "") {
            this.type == "whole"
         }
         this.isGrace = $("grace", $note).length > 0;
         // give a small duration if gracenote (default is 0 duration)
         if (this.isGrace) { this.duration = 1; }
         this.tie = $("tie", $note).attr("type");
      }
      toString (simple: boolean = true) : string {
         if (simple && this.pitch) {
            return `${this.pitch.step}${this._pitchAlterMap[this.pitch.alter]}`;
         } else if (!simple && this.pitch) {
            return `${this.pitch.step}${this._pitchAlterMap[this.pitch.alter]}${this.pitch.octave} ${this.type}`;
         } else if (this.isRest) {
            return `${this.type} rest`;
         } else {
            return "";
         }
      }
      static toHtml (noteString: string) : string {
         return noteString.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x","&#119082;")
            .replace("b", "&#9837;").replace("n", "&#9838;");
      }
      toHtml () : string {
        return Note.toHtml(this.toString());
      }
   }

   export class Measure {
      number: number = 0;
      attributes: MeasureAttributes;
      notes: Array<Array<Note>> = [];
      count: number = 0;
      usedPitchSteps: Array<Note> = [];
      constructor (public xml: any, previousAttributes) {
         var $measure = $(xml);
         this.number = parseInt($measure.attr("number"));

         var $attributes = $("attributes", $measure);
         this.attributes = new MeasureAttributes($attributes, previousAttributes);

         _.each($("note", $measure), function (note) {
            var newNote = new Note(note);
            var staff = (newNote.staff || 1) - 1;
            this.notes[staff] = this.notes[staff] || [];
            this.notes[staff].push(newNote);
            this.count++;
            this.usedPitchSteps.push(newNote);
         }, this);
         this.usedPitchSteps = _(this.usedPitchSteps)
            .uniq(function (note) { note.toString(true); })
            .sortBy(function (note) { note.isRest + note.toString(true); })
            .value();
      }
   }

   class MeasureAttributes {
      divisions: number;
      staves: number;
      clef: Array<any>;
      key: any;
      time: any;
      constructor ($attributes, previousAttributes) {
         $.extend(this, previousAttributes);

         if ($attributes.length === 0) { return; }

         var $divisions = $("divisions", $attributes);
         if ($divisions.length > 0) { this.divisions = parseInt($divisions.text()); }

         var $staves = $("staves", $attributes);
         if ($staves.length > 0) { this.staves = parseInt($staves.text()); }

         var $clefs = $("clef", $attributes);
         if ($clefs.length > 0) { this.clef = []; }
         _.each($clefs, function (clef) {
            var $clef = $(clef);
            this.clef.push({
               number: $clef.attr("number"),
               sign: $("sign", $clef).text(),
               line: $("line", $clef).text()
            });
         });

         var $key = $("key", $attributes);
         if ($key.length > 0) {
            this.key = {
               fifths: $("fifths", $key).text(),
               mode: $("mode", $key).text()
            };
            this.key.name = KeyInfo[this.key.fifths];
            this.key.toString = this.key.inspect = function () { return this.name; };
         }

         var $time = $("time", $attributes);
         if ($time.length > 0) {
            this.time = {
               beats: $("beats", $time).text(),
               beatType: $("beat-type", $time).text(),
               toString: function () { return `${this.beats}/${this.beatType}`; }
            };
         }
      }
   }
   /*class Measure
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
      .value()*/



   export class File {
      /*measures: Array;*/
      count: number = 0;
      usedKeys: Array<string>;
      usedPitchSteps: Array<string>;

      constructor (url: string, callback: () => any) {
         var load = function (data) {
            var allNotes = {};
            var allKeys = [];
            var $data = $(data);

            _.each($("part", $data), function (part) {
               var $part = $(part);
               var previousAttributes = {};

               _.each($("measure", $part), function (measure) {

               }, this);
            }, this);
         };
      }
   }
   /*MusicXmlFile
     constructor(url, callback) ->
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

       */

   var KeyInfo = {
      "-7": "Cb",
      "-6": "Gb",
      "-5": "Db",
      "-4": "Ab",
      "-3": "Eb",
      "-2": "Bb",
      "-1": "F",
      "0": "C",
      "1": "G",
      "2": "D",
      "3": "A",
      "4": "E",
      "5": "B",
      "6": "F#",
      "7": "C#"
   };
}
