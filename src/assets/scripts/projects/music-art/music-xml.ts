///ts:ref=lodash
/// <reference path="../../vendor/lodash.d.ts"/> ///ts:ref:generated
///ts:ref=jquery
/// <reference path="../../vendor/jquery.d.ts"/> ///ts:ref:generated

module MusicXml {
   class Pitch {
      constructor(public step:string, public octave:string, public alter:string) {}
   }

   export class Note {
      private _pitchAlterMap = { "-2": "bb", "-1": "b", "0": "", "1": "#", "2": "x" };
      duration: number;
      type: string;
      staff: string;
      pitch: Pitch;
      isRest: boolean;
      isGrace: boolean;
      tie: string;

      constructor (public xml: any) {
         var $note: JQuery = $(xml);
         this.duration = parseInt($("duration", $note).text());
         this.type = $("type", $note).text();
         this.staff = $("staff", $note).text();
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
      toString (simple: boolean) : string {
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

   export class File {
      /*measures: Array;*/
      count: number = 0;

      constructor (url: string, callback: () => any) {

      }
   }

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
    $.ajax(url).success load*/
