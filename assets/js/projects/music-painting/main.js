(function() {
  var Measure, MusicView, Note, NoteDraw, createView, keyInfo, presetColors, test, _ref, _ref1, _ref2, _ref3, _ref4,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.CanvasDividingStrategy = (function() {
    function CanvasDividingStrategy() {}

    CanvasDividingStrategy.prototype.rectangles = [];

    return CanvasDividingStrategy;

  })();

  this.VerticleRectangleCanvasDivider = (function(_super) {
    __extends(VerticleRectangleCanvasDivider, _super);

    function VerticleRectangleCanvasDivider(width, height, count) {
      var col, i, rectangleCount, row, _i, _ref,
        _this = this;
      if (count % 2 === 1) {
        count = count + 1;
      }
      this.colCount = 1;
      this.rowCount = 1;
      this.rectangleWidth = width;
      this.rectangleHeight = height;
      rectangleCount = function() {
        return _this.rowCount * _this.colCount;
      };
      while (rectangleCount() < count) {
        if (this.rectangleHeight / this.rectangleWidth > 12) {
          this.rowCount++;
          this.colCount = Math.floor(this.colCount / this.rowCount);
        } else {
          this.colCount++;
        }
        this.rectangleWidth = width / this.colCount;
        this.rectangleHeight = height / this.rowCount;
      }
      for (i = _i = 0, _ref = rectangleCount(); 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        col = i % this.colCount;
        row = Math.floor(i / this.colCount);
        this.rectangles.push({
          id: i,
          width: this.rectangleWidth,
          height: this.rectangleHeight,
          x: col * this.rectangleWidth,
          y: row * this.rectangleHeight
        });
      }
    }

    return VerticleRectangleCanvasDivider;

  })(this.CanvasDividingStrategy);

  this.MeasureDividingStrategy = (function() {
    function MeasureDividingStrategy() {}

    MeasureDividingStrategy.prototype.getRectangles = function(measure) {};

    return MeasureDividingStrategy;

  })();

  this.HorizontalRectangleMeasureDivider = (function(_super) {
    __extends(HorizontalRectangleMeasureDivider, _super);

    function HorizontalRectangleMeasureDivider() {
      _ref = HorizontalRectangleMeasureDivider.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HorizontalRectangleMeasureDivider.prototype.getRectangles = function(startX, startY, width, height, measure) {
      var lastHeight, note, recHeight, rectangles, rowHeight, rows, staff, staffNotes, totalDuration, _i, _j, _len, _len1, _ref1;
      rows = measure.notes.length;
      rowHeight = height / rows;
      rectangles = [];
      _ref1 = measure.notes;
      for (staff = _i = 0, _len = _ref1.length; _i < _len; staff = ++_i) {
        staffNotes = _ref1[staff];
        totalDuration = _.reduce(staffNotes, (function(sum, note) {
          return sum + parseInt(note.duration);
        }), 0);
        lastHeight = startY;
        for (_j = 0, _len1 = staffNotes.length; _j < _len1; _j++) {
          note = staffNotes[_j];
          recHeight = rowHeight * (note.duration / totalDuration);
          rectangles.push({
            note: note,
            width: width,
            height: recHeight,
            y: (staff * rowHeight) + lastHeight,
            x: startX
          });
          lastHeight += recHeight;
        }
      }
      return rectangles;
    };

    return HorizontalRectangleMeasureDivider;

  })(this.MeasureDividingStrategy);

  this.CanvasDividingStrategy = (function() {
    function CanvasDividingStrategy() {}

    CanvasDividingStrategy.prototype.rectangles = [];

    return CanvasDividingStrategy;

  })();

  this.VerticleRectangleCanvasDivider = (function(_super) {
    __extends(VerticleRectangleCanvasDivider, _super);

    function VerticleRectangleCanvasDivider(width, height, count) {
      var col, i, rectangleCount, row, _i, _ref1,
        _this = this;
      if (count % 2 === 1) {
        count = count + 1;
      }
      this.colCount = 1;
      this.rowCount = 1;
      this.rectangleWidth = width;
      this.rectangleHeight = height;
      rectangleCount = function() {
        return _this.rowCount * _this.colCount;
      };
      while (rectangleCount() < count) {
        if (this.rectangleHeight / this.rectangleWidth > 12) {
          this.rowCount++;
          this.colCount = Math.floor(this.colCount / this.rowCount);
        } else {
          this.colCount++;
        }
        this.rectangleWidth = width / this.colCount;
        this.rectangleHeight = height / this.rowCount;
      }
      for (i = _i = 0, _ref1 = rectangleCount(); 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
        col = i % this.colCount;
        row = Math.floor(i / this.colCount);
        this.rectangles.push({
          id: i,
          width: this.rectangleWidth,
          height: this.rectangleHeight,
          x: col * this.rectangleWidth,
          y: row * this.rectangleHeight
        });
      }
    }

    return VerticleRectangleCanvasDivider;

  })(this.CanvasDividingStrategy);

  this.MeasureDividingStrategy = (function() {
    function MeasureDividingStrategy() {}

    MeasureDividingStrategy.prototype.getRectangles = function(measure) {};

    return MeasureDividingStrategy;

  })();

  this.HorizontalRectangleMeasureDivider = (function(_super) {
    __extends(HorizontalRectangleMeasureDivider, _super);

    function HorizontalRectangleMeasureDivider() {
      _ref1 = HorizontalRectangleMeasureDivider.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    HorizontalRectangleMeasureDivider.prototype.getRectangles = function(startX, startY, width, height, measure) {
      var lastHeight, note, recHeight, rectangles, rowHeight, rows, staff, staffNotes, totalDuration, _i, _j, _len, _len1, _ref2;
      rows = measure.notes.length;
      rowHeight = height / rows;
      rectangles = [];
      _ref2 = measure.notes;
      for (staff = _i = 0, _len = _ref2.length; _i < _len; staff = ++_i) {
        staffNotes = _ref2[staff];
        totalDuration = _.reduce(staffNotes, (function(sum, note) {
          return sum + parseInt(note.duration);
        }), 0);
        lastHeight = startY;
        for (_j = 0, _len1 = staffNotes.length; _j < _len1; _j++) {
          note = staffNotes[_j];
          recHeight = rowHeight * (note.duration / totalDuration);
          rectangles.push({
            note: note,
            width: width,
            height: recHeight,
            y: (staff * rowHeight) + lastHeight,
            x: startX
          });
          lastHeight += recHeight;
        }
      }
      return rectangles;
    };

    return HorizontalRectangleMeasureDivider;

  })(this.MeasureDividingStrategy);

  this.CanvasDividingStrategy = (function() {
    function CanvasDividingStrategy() {}

    CanvasDividingStrategy.prototype.rectangles = [];

    return CanvasDividingStrategy;

  })();

  this.VerticleRectangleCanvasDivider = (function(_super) {
    __extends(VerticleRectangleCanvasDivider, _super);

    function VerticleRectangleCanvasDivider(width, height, count) {
      var col, i, rectangleCount, row, _i, _ref2,
        _this = this;
      if (count % 2 === 1) {
        count = count + 1;
      }
      this.colCount = 1;
      this.rowCount = 1;
      this.rectangleWidth = width;
      this.rectangleHeight = height;
      rectangleCount = function() {
        return _this.rowCount * _this.colCount;
      };
      while (rectangleCount() < count) {
        if (this.rectangleHeight / this.rectangleWidth > 12) {
          this.rowCount++;
          this.colCount = Math.floor(this.colCount / this.rowCount);
        } else {
          this.colCount++;
        }
        this.rectangleWidth = width / this.colCount;
        this.rectangleHeight = height / this.rowCount;
      }
      for (i = _i = 0, _ref2 = rectangleCount(); 0 <= _ref2 ? _i <= _ref2 : _i >= _ref2; i = 0 <= _ref2 ? ++_i : --_i) {
        col = i % this.colCount;
        row = Math.floor(i / this.colCount);
        this.rectangles.push({
          id: i,
          width: this.rectangleWidth,
          height: this.rectangleHeight,
          x: col * this.rectangleWidth,
          y: row * this.rectangleHeight
        });
      }
    }

    return VerticleRectangleCanvasDivider;

  })(this.CanvasDividingStrategy);

  this.MeasureDividingStrategy = (function() {
    function MeasureDividingStrategy() {}

    MeasureDividingStrategy.prototype.getRectangles = function(measure) {};

    return MeasureDividingStrategy;

  })();

  this.HorizontalRectangleMeasureDivider = (function(_super) {
    __extends(HorizontalRectangleMeasureDivider, _super);

    function HorizontalRectangleMeasureDivider() {
      _ref2 = HorizontalRectangleMeasureDivider.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    HorizontalRectangleMeasureDivider.prototype.getRectangles = function(startX, startY, width, height, measure) {
      var lastHeight, note, recHeight, rectangles, rowHeight, rows, staff, staffNotes, totalDuration, _i, _j, _len, _len1, _ref3;
      rows = measure.notes.length;
      rowHeight = height / rows;
      rectangles = [];
      _ref3 = measure.notes;
      for (staff = _i = 0, _len = _ref3.length; _i < _len; staff = ++_i) {
        staffNotes = _ref3[staff];
        totalDuration = _.reduce(staffNotes, (function(sum, note) {
          return sum + parseInt(note.duration);
        }), 0);
        lastHeight = startY;
        for (_j = 0, _len1 = staffNotes.length; _j < _len1; _j++) {
          note = staffNotes[_j];
          recHeight = rowHeight * (note.duration / totalDuration);
          rectangles.push({
            note: note,
            width: width,
            height: recHeight,
            y: (staff * rowHeight) + lastHeight,
            x: startX
          });
          lastHeight += recHeight;
        }
      }
      return rectangles;
    };

    return HorizontalRectangleMeasureDivider;

  })(this.MeasureDividingStrategy);

  this.CanvasDividingStrategy = (function() {
    function CanvasDividingStrategy() {}

    CanvasDividingStrategy.prototype.rectangles = [];

    return CanvasDividingStrategy;

  })();

  this.VerticleRectangleCanvasDivider = (function(_super) {
    __extends(VerticleRectangleCanvasDivider, _super);

    function VerticleRectangleCanvasDivider(width, height, count) {
      var col, i, rectangleCount, row, _i, _ref3,
        _this = this;
      if (count % 2 === 1) {
        count = count + 1;
      }
      this.colCount = 1;
      this.rowCount = 1;
      this.rectangleWidth = width;
      this.rectangleHeight = height;
      rectangleCount = function() {
        return _this.rowCount * _this.colCount;
      };
      while (rectangleCount() < count) {
        if (this.rectangleHeight / this.rectangleWidth > 12) {
          this.rowCount++;
          this.colCount = Math.floor(this.colCount / this.rowCount);
        } else {
          this.colCount++;
        }
        this.rectangleWidth = width / this.colCount;
        this.rectangleHeight = height / this.rowCount;
      }
      for (i = _i = 0, _ref3 = rectangleCount(); 0 <= _ref3 ? _i <= _ref3 : _i >= _ref3; i = 0 <= _ref3 ? ++_i : --_i) {
        col = i % this.colCount;
        row = Math.floor(i / this.colCount);
        this.rectangles.push({
          id: i,
          width: this.rectangleWidth,
          height: this.rectangleHeight,
          x: col * this.rectangleWidth,
          y: row * this.rectangleHeight
        });
      }
    }

    return VerticleRectangleCanvasDivider;

  })(this.CanvasDividingStrategy);

  this.MeasureDividingStrategy = (function() {
    function MeasureDividingStrategy() {}

    MeasureDividingStrategy.prototype.getRectangles = function(measure) {};

    return MeasureDividingStrategy;

  })();

  this.HorizontalRectangleMeasureDivider = (function(_super) {
    __extends(HorizontalRectangleMeasureDivider, _super);

    function HorizontalRectangleMeasureDivider() {
      _ref3 = HorizontalRectangleMeasureDivider.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    HorizontalRectangleMeasureDivider.prototype.getRectangles = function(startX, startY, width, height, measure) {
      var lastHeight, note, recHeight, rectangles, rowHeight, rows, staff, staffNotes, totalDuration, _i, _j, _len, _len1, _ref4;
      rows = measure.notes.length;
      rowHeight = height / rows;
      rectangles = [];
      _ref4 = measure.notes;
      for (staff = _i = 0, _len = _ref4.length; _i < _len; staff = ++_i) {
        staffNotes = _ref4[staff];
        totalDuration = _.reduce(staffNotes, (function(sum, note) {
          return sum + parseInt(note.duration);
        }), 0);
        lastHeight = startY;
        for (_j = 0, _len1 = staffNotes.length; _j < _len1; _j++) {
          note = staffNotes[_j];
          recHeight = rowHeight * (note.duration / totalDuration);
          rectangles.push({
            note: note,
            width: width,
            height: recHeight,
            y: (staff * rowHeight) + lastHeight,
            x: startX
          });
          lastHeight += recHeight;
        }
      }
      return rectangles;
    };

    return HorizontalRectangleMeasureDivider;

  })(this.MeasureDividingStrategy);

  this.CanvasDividingStrategy = (function() {
    function CanvasDividingStrategy() {}

    CanvasDividingStrategy.prototype.rectangles = [];

    return CanvasDividingStrategy;

  })();

  this.VerticleRectangleCanvasDivider = (function(_super) {
    __extends(VerticleRectangleCanvasDivider, _super);

    function VerticleRectangleCanvasDivider(width, height, count) {
      var col, i, rectangleCount, row, _i, _ref4,
        _this = this;
      if (count % 2 === 1) {
        count = count + 1;
      }
      this.colCount = 1;
      this.rowCount = 1;
      this.rectangleWidth = width;
      this.rectangleHeight = height;
      rectangleCount = function() {
        return _this.rowCount * _this.colCount;
      };
      while (rectangleCount() < count) {
        if (this.rectangleHeight / this.rectangleWidth > 12) {
          this.rowCount++;
          this.colCount = Math.floor(this.colCount / this.rowCount);
        } else {
          this.colCount++;
        }
        this.rectangleWidth = width / this.colCount;
        this.rectangleHeight = height / this.rowCount;
      }
      for (i = _i = 0, _ref4 = rectangleCount(); 0 <= _ref4 ? _i <= _ref4 : _i >= _ref4; i = 0 <= _ref4 ? ++_i : --_i) {
        col = i % this.colCount;
        row = Math.floor(i / this.colCount);
        this.rectangles.push({
          id: i,
          width: this.rectangleWidth,
          height: this.rectangleHeight,
          x: col * this.rectangleWidth,
          y: row * this.rectangleHeight
        });
      }
    }

    return VerticleRectangleCanvasDivider;

  })(this.CanvasDividingStrategy);

  this.MeasureDividingStrategy = (function() {
    function MeasureDividingStrategy() {}

    MeasureDividingStrategy.prototype.getRectangles = function(measure) {};

    return MeasureDividingStrategy;

  })();

  this.HorizontalRectangleMeasureDivider = (function(_super) {
    __extends(HorizontalRectangleMeasureDivider, _super);

    function HorizontalRectangleMeasureDivider() {
      _ref4 = HorizontalRectangleMeasureDivider.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    HorizontalRectangleMeasureDivider.prototype.getRectangles = function(startX, startY, width, height, measure) {
      var lastHeight, note, recHeight, rectangles, rowHeight, rows, staff, staffNotes, totalDuration, _i, _j, _len, _len1, _ref5;
      rows = measure.notes.length;
      rowHeight = height / rows;
      rectangles = [];
      _ref5 = measure.notes;
      for (staff = _i = 0, _len = _ref5.length; _i < _len; staff = ++_i) {
        staffNotes = _ref5[staff];
        totalDuration = _.reduce(staffNotes, (function(sum, note) {
          return sum + parseInt(note.duration);
        }), 0);
        lastHeight = startY;
        for (_j = 0, _len1 = staffNotes.length; _j < _len1; _j++) {
          note = staffNotes[_j];
          recHeight = rowHeight * (note.duration / totalDuration);
          rectangles.push({
            note: note,
            width: width,
            height: recHeight,
            y: (staff * rowHeight) + lastHeight,
            x: startX
          });
          lastHeight += recHeight;
        }
      }
      return rectangles;
    };

    return HorizontalRectangleMeasureDivider;

  })(this.MeasureDividingStrategy);

  window.MusicXmlFile = (function() {
    function MusicXmlFile(url, callback) {
      var load, self;
      self = this;
      this.measures = [];
      this.count = 0;
      this.usedKeys = [];
      this.usedPitchSteps = [];
      load = function(data) {
        var $data, allKeys, allNotes;
        allNotes = {};
        allKeys = [];
        $data = $(data);
        $("part", $data).each(function() {
          var $part, previousAttributes;
          $part = $(this);
          previousAttributes = {};
          return $("measure", $part).each(function() {
            var newMeasure, notes, _name;
            newMeasure = new Measure(this, previousAttributes);
            previousAttributes = newMeasure.attributes;
            self.measures.push(newMeasure);
            self.count += newMeasure.count;
            if (_.indexOf(allKeys, newMeasure.attributes.key.name) === -1) {
              allKeys.push(newMeasure.attributes.key.name);
            }
            if (allNotes[_name = newMeasure.attributes.key.name] == null) {
              allNotes[_name] = [];
            }
            return allNotes[newMeasure.attributes.key.name].push((function() {
              var _i, _len, _ref5, _results;
              _ref5 = newMeasure.usedPitchSteps;
              _results = [];
              for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
                notes = _ref5[_i];
                _results.push(notes);
              }
              return _results;
            })());
          });
        });
        self.usedKeys = allKeys;
        _.each(allKeys, function(name) {
          return self.usedPitchSteps.push({
            key: name,
            notes: _.chain(allNotes[name]).flatten().uniq(function(note) {
              return note.toString(true);
            }).sortBy(function(note) {
              return note.isRest + note.toString(true);
            }).value()
          });
        });
        return callback() != null;
      };
      $.ajax(url).success(load);
    }

    return MusicXmlFile;

  })();

  keyInfo = {
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

  Measure = (function() {
    function Measure(xml, previousAttributes) {
      var $measure, attributes, self;
      this.xml = xml;
      self = this;
      $measure = $(this.xml);
      this.number = $measure.attr("number");
      attributes = (function() {
        var $attributes, $clefs, $divisions, $key, $staves, $time, result;
        result = {};
        $attributes = $("attributes", $measure);
        if ($attributes.length === 0) {
          return result;
        }
        $divisions = $("divisions", $attributes);
        if ($divisions.length > 0) {
          result.divisions = $divisions.text();
        }
        $staves = $("staves", $attributes);
        if ($staves.length > 0) {
          result.staves = $staves.text();
        }
        $clefs = $("clef", $attributes);
        if ($clefs.length > 0) {
          result.clef = [];
        }
        $clefs.each(function() {
          var $clef;
          $clef = $(this);
          return result.clef.push({
            number: $clef.attr("number"),
            sign: $("sign", $clef).text(),
            line: $("line", $clef).text()
          });
        });
        $key = $("key", $attributes);
        if ($key.length > 0) {
          result.key = {
            fifths: $("fifths", $key).text(),
            mode: $("mode", $key).text()
          };
          result.key.name = keyInfo[result.key.fifths];
          result.key.toString = result.key.inspect = function() {
            return this.name;
          };
        }
        $time = $("time", $attributes);
        if ($time.length > 0) {
          result.time = {
            beats: $("beats", $time).text(),
            beatType: $("beat-type", $time).text(),
            toString: function() {
              return this.beats + "/" + this.beatType;
            }
          };
        }
        return result;
      })();
      this.attributes = $.extend({}, previousAttributes, attributes);
      this.notes = [];
      this.count = 0;
      this.usedPitchSteps = [];
      $("note", $measure).each(function() {
        var newNote, staff, _base;
        newNote = new Note(this);
        staff = (parseInt(newNote.staff) || 1) - 1;
        if ((_base = self.notes)[staff] == null) {
          _base[staff] = [];
        }
        self.notes[staff].push(newNote);
        self.count++;
        return self.usedPitchSteps.push(newNote);
      });
      this.usedPitchSteps = _.chain(this.usedPitchSteps).uniq(function(note) {
        return note.toString(true);
      }).sortBy(function(note) {
        return note.isRest + note.toString(true);
      }).value();
    }

    return Measure;

  })();

  Note = (function() {
    Note.prototype._pitchAlterMap = {
      "-2": "bb",
      "-1": "b",
      "0": "",
      "1": "#",
      "2": "x"
    };

    function Note(xml) {
      var $note, $pitch, $tie;
      this.xml = xml;
      $note = $(this.xml);
      this.duration = $("duration", $note).text();
      this.type = $("type", $note).text();
      this.staff = $("staff", $note).text();
      $pitch = $("pitch", $note);
      if ($pitch.length > 0) {
        this.pitch = {
          step: $("step", $pitch).text(),
          octave: $("octave", $pitch).text()
        };
        this.pitch.alter = $("alter", $pitch).text();
        if (this.pitch.alter === "") {
          this.pitch.alter = 0;
        }
      }
      this.isRest = $("rest", $note).length > 0;
      this.isGrace = $("grace", $note).length > 0;
      if (this.isGrace) {
        this.duration = 1;
      }
      if (this.type === "" && this.isRest) {
        this.type = "whole";
      }
      $tie = $("tie", $note);
      if ($tie.length > 0) {
        this.tie = $tie.attr("type");
      }
    }

    Note.prototype.toString = function(simple) {
      if (this.pitch && simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter];
      }
      if (this.pitch && !simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter] + this.pitch.octave + " " + this.type;
      }
      if (this.isRest) {
        return "" + this.type + " rest";
      }
    };

    Note.prototype.toHtml = function() {
      return Note.toHtml(this.toString());
    };

    Note.toHtml = function(noteName) {
      return noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x", "&#119082;").replace("b", "&#9837;").replace("n", "&#9838;");
    };

    return Note;

  })();

  NoteDraw = (function() {
    function NoteDraw() {}

    return NoteDraw;

  })();

  this.Settings = (function() {
    function Settings() {
      this.colors = {
        "F": {
          "A": "DAEEEA",
          "Bb": "EACEC4",
          "C": "43586C",
          "D": "A86060",
          "E": "904848",
          "F": "799892",
          "G": "C79A8B",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "A": {
          "A": "0000ff",
          "C#": "0000cc",
          "E": "000099",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "Ab": {
          "Ab": "00ff00",
          "C": "00cc00",
          "Eb": "009900",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "G": presetColors("G"),
        "Eb": presetColors("Eb"),
        "C": presetColors("C"),
        "E": presetColors("E")
      };
    }

    Settings.prototype.getColorInfo = function(key, note) {
      var hex;
      hex = this.colors[key][note.toString(true)];
      return {
        hex: "#" + hex,
        isWhiteFore: this.needsWhiteFore(hex)
      };
    };

    Settings.prototype.needsWhiteFore = function(hexcolor) {
      var b, g, r, yiq;
      r = parseInt(hexcolor.substr(0, 2), 16);
      g = parseInt(hexcolor.substr(2, 2), 16);
      b = parseInt(hexcolor.substr(4, 2), 16);
      yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      if (yiq >= 128) {
        return false;
      } else {
        return true;
      }
    };

    return Settings;

  })();

  presetColors = function(key) {
    var a, b, c, complementary, keys, preset1, primary, rests, secondaryA, secondaryB;
    primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"];
    secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"];
    secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"];
    complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"];
    rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"];
    preset1 = {
      primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"],
      secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"],
      secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"],
      complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"],
      rests: ["5c584c", "403d35", "817c6b", "a29d8e"]
    };
    a = {
      "G": primary[0],
      "B": primary[1],
      "D": primary[2],
      "F#": secondaryA[0],
      "A": secondaryA[1],
      "C": secondaryB[0],
      "E": secondaryB[1],
      "G#": primary[3],
      "Gx": secondaryA[1],
      "Ab": primary[4],
      "A#": secondaryA[2],
      "Bb": secondaryA[3],
      "B#": secondaryA[3],
      "Cb": secondaryB[2],
      "C#": secondaryB[3],
      "Cx": primary[2],
      "Db": secondaryA[4],
      "D#": secondaryB[4],
      "Eb": complementary[0],
      "E#": secondaryA[0],
      "Fb": complementary[1],
      "F": complementary[2],
      "Gb": complementary[3],
      "quarter rest": rests[0],
      "half rest": rests[1],
      "whole rest": rests[2],
      "eighth rest": rests[3]
    };
    keys = [
      {
        "G": {
          "1": "G",
          "2": "A",
          "3": "B",
          "4": "C",
          "5": "D",
          "6": "E",
          "7": "F#",
          "1#": "G#",
          "1x": "Gx",
          "1b": "Gb",
          "1bb": "Gbb",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        },
        "E": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "1#": "",
          "1x": "",
          "1b": "",
          "1bb": "",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        }
      }
    ];
    c = preset1;
    b = {
      "G": c.primary[0],
      "B": c.primary[1],
      "D": c.primary[2],
      "F#": c.secondaryA[0],
      "A": c.secondaryA[1],
      "C": c.secondaryB[0],
      "E": c.secondaryB[1],
      "G#": c.primary[3],
      "Gx": c.secondaryA[1],
      "Ab": c.primary[4],
      "A#": c.secondaryA[2],
      "Bb": c.secondaryA[3],
      "B#": c.secondaryA[3],
      "Cb": c.secondaryB[2],
      "C#": c.secondaryB[3],
      "Cx": c.primary[2],
      "Db": c.secondaryA[4],
      "D#": c.complementary[1],
      "Eb": c.complementary[0],
      "E#": c.secondaryA[0],
      "Fb": c.complementary[1],
      "F": c.complementary[2],
      "Gb": c.complementary[3],
      "quarter rest": rests[2],
      "half rest": rests[0],
      "whole rest": rests[1],
      "eighth rest": rests[3]
    };
    return b;
  };

  test = new MusicXmlFile("/midi/chopin_prelude-no4-op28-eminor.xml", function() {
    var $data, colorInfo, fore, note, settings, used, _i, _j, _len, _len1, _ref5, _ref6;
    $data = $(".data");
    console.log(test);
    settings = new Settings();
    _ref5 = test.usedPitchSteps;
    for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
      used = _ref5[_i];
      $data.append("<br /> key " + used.key + ": ");
      _ref6 = used.notes;
      for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
        note = _ref6[_j];
        colorInfo = settings.getColorInfo(used.key, note);
        fore = colorInfo.isWhiteFore ? "#fff" : "#000";
        $data.append("<span style='color: " + fore + "; background: " + colorInfo.hex + "'>" + (note.toString(true)) + "</span>");
      }
    }
    $data.append("<br /> total measures " + test.measures.length);
    $data.append("<br /> total notes " + test.count);
    return createView(settings);
  });

  createView = function(settings) {
    var $canvas, canvas, canvasDivider, measureDivider, view;
    $canvas = $(".art");
    $canvas.attr("width", parseInt($canvas.css("width")));
    $canvas.attr("height", parseInt($canvas.css("height")));
    canvas = $canvas[0];
    canvasDivider = new VerticleRectangleCanvasDivider(canvas.width, canvas.height, test.measures.length);
    measureDivider = new HorizontalRectangleMeasureDivider();
    return view = new MusicView(canvas, test, canvasDivider, measureDivider, settings);
  };

  MusicView = (function() {
    function MusicView(canvas, music, canvasDivider, measureDivider, settings) {
      var key, measure, noteRect, rect, rectangles, _i, _j, _len, _len1, _ref5;
      this.canvas = canvas;
      this.music = music;
      if (!(canvasDivider instanceof CanvasDividingStrategy)) {
        console.log("variable 'canvasDivider' is not of type 'CanvasDividingStrategy'");
      }
      if (!(measureDivider instanceof MeasureDividingStrategy)) {
        console.log("variable 'measureDivider' is not of type 'MeasureDividingStrategy'");
      }
      if (!(settings instanceof Settings)) {
        console.log("variable 'settings' is not of type 'Settings'");
      }
      this.context = this.canvas.getContext("2d");
      this.context.textBaseline = "top";
      _ref5 = canvasDivider.rectangles;
      for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
        rect = _ref5[_i];
        this.context.fillText(rect.id, rect.x, rect.y);
        measure = this.music.measures[rect.id];
        if (measure) {
          rectangles = measureDivider.getRectangles(rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure);
          key = measure.attributes.key;
          for (_j = 0, _len1 = rectangles.length; _j < _len1; _j++) {
            noteRect = rectangles[_j];
            this.context.fillStyle = settings.getColorInfo(key, noteRect.note).hex;
            this.context.fillRect(noteRect.x, noteRect.y, noteRect.width, noteRect.height);
          }
        }
      }
    }

    return MusicView;

  })();

  window.MusicXmlFile = (function() {
    function MusicXmlFile(url, callback) {
      var load, self;
      self = this;
      this.measures = [];
      this.count = 0;
      this.usedKeys = [];
      this.usedPitchSteps = [];
      load = function(data) {
        var $data, allKeys, allNotes;
        allNotes = {};
        allKeys = [];
        $data = $(data);
        $("part", $data).each(function() {
          var $part, previousAttributes;
          $part = $(this);
          previousAttributes = {};
          return $("measure", $part).each(function() {
            var newMeasure, notes, _name;
            newMeasure = new Measure(this, previousAttributes);
            previousAttributes = newMeasure.attributes;
            self.measures.push(newMeasure);
            self.count += newMeasure.count;
            if (_.indexOf(allKeys, newMeasure.attributes.key.name) === -1) {
              allKeys.push(newMeasure.attributes.key.name);
            }
            if (allNotes[_name = newMeasure.attributes.key.name] == null) {
              allNotes[_name] = [];
            }
            return allNotes[newMeasure.attributes.key.name].push((function() {
              var _i, _len, _ref5, _results;
              _ref5 = newMeasure.usedPitchSteps;
              _results = [];
              for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
                notes = _ref5[_i];
                _results.push(notes);
              }
              return _results;
            })());
          });
        });
        self.usedKeys = allKeys;
        _.each(allKeys, function(name) {
          return self.usedPitchSteps.push({
            key: name,
            notes: _.chain(allNotes[name]).flatten().uniq(function(note) {
              return note.toString(true);
            }).sortBy(function(note) {
              return note.isRest + note.toString(true);
            }).value()
          });
        });
        return callback() != null;
      };
      $.ajax(url).success(load);
    }

    return MusicXmlFile;

  })();

  keyInfo = {
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

  Measure = (function() {
    function Measure(xml, previousAttributes) {
      var $measure, attributes, self;
      this.xml = xml;
      self = this;
      $measure = $(this.xml);
      this.number = $measure.attr("number");
      attributes = (function() {
        var $attributes, $clefs, $divisions, $key, $staves, $time, result;
        result = {};
        $attributes = $("attributes", $measure);
        if ($attributes.length === 0) {
          return result;
        }
        $divisions = $("divisions", $attributes);
        if ($divisions.length > 0) {
          result.divisions = $divisions.text();
        }
        $staves = $("staves", $attributes);
        if ($staves.length > 0) {
          result.staves = $staves.text();
        }
        $clefs = $("clef", $attributes);
        if ($clefs.length > 0) {
          result.clef = [];
        }
        $clefs.each(function() {
          var $clef;
          $clef = $(this);
          return result.clef.push({
            number: $clef.attr("number"),
            sign: $("sign", $clef).text(),
            line: $("line", $clef).text()
          });
        });
        $key = $("key", $attributes);
        if ($key.length > 0) {
          result.key = {
            fifths: $("fifths", $key).text(),
            mode: $("mode", $key).text()
          };
          result.key.name = keyInfo[result.key.fifths];
          result.key.toString = result.key.inspect = function() {
            return this.name;
          };
        }
        $time = $("time", $attributes);
        if ($time.length > 0) {
          result.time = {
            beats: $("beats", $time).text(),
            beatType: $("beat-type", $time).text(),
            toString: function() {
              return this.beats + "/" + this.beatType;
            }
          };
        }
        return result;
      })();
      this.attributes = $.extend({}, previousAttributes, attributes);
      this.notes = [];
      this.count = 0;
      this.usedPitchSteps = [];
      $("note", $measure).each(function() {
        var newNote, staff, _base;
        newNote = new Note(this);
        staff = (parseInt(newNote.staff) || 1) - 1;
        if ((_base = self.notes)[staff] == null) {
          _base[staff] = [];
        }
        self.notes[staff].push(newNote);
        self.count++;
        return self.usedPitchSteps.push(newNote);
      });
      this.usedPitchSteps = _.chain(this.usedPitchSteps).uniq(function(note) {
        return note.toString(true);
      }).sortBy(function(note) {
        return note.isRest + note.toString(true);
      }).value();
    }

    return Measure;

  })();

  Note = (function() {
    Note.prototype._pitchAlterMap = {
      "-2": "bb",
      "-1": "b",
      "0": "",
      "1": "#",
      "2": "x"
    };

    function Note(xml) {
      var $note, $pitch, $tie;
      this.xml = xml;
      $note = $(this.xml);
      this.duration = $("duration", $note).text();
      this.type = $("type", $note).text();
      this.staff = $("staff", $note).text();
      $pitch = $("pitch", $note);
      if ($pitch.length > 0) {
        this.pitch = {
          step: $("step", $pitch).text(),
          octave: $("octave", $pitch).text()
        };
        this.pitch.alter = $("alter", $pitch).text();
        if (this.pitch.alter === "") {
          this.pitch.alter = 0;
        }
      }
      this.isRest = $("rest", $note).length > 0;
      this.isGrace = $("grace", $note).length > 0;
      if (this.isGrace) {
        this.duration = 1;
      }
      if (this.type === "" && this.isRest) {
        this.type = "whole";
      }
      $tie = $("tie", $note);
      if ($tie.length > 0) {
        this.tie = $tie.attr("type");
      }
    }

    Note.prototype.toString = function(simple) {
      if (this.pitch && simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter];
      }
      if (this.pitch && !simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter] + this.pitch.octave + " " + this.type;
      }
      if (this.isRest) {
        return "" + this.type + " rest";
      }
    };

    Note.prototype.toHtml = function() {
      return Note.toHtml(this.toString());
    };

    Note.toHtml = function(noteName) {
      return noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x", "&#119082;").replace("b", "&#9837;").replace("n", "&#9838;");
    };

    return Note;

  })();

  NoteDraw = (function() {
    function NoteDraw() {}

    return NoteDraw;

  })();

  this.Settings = (function() {
    function Settings() {
      this.colors = {
        "F": {
          "A": "DAEEEA",
          "Bb": "EACEC4",
          "C": "43586C",
          "D": "A86060",
          "E": "904848",
          "F": "799892",
          "G": "C79A8B",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "A": {
          "A": "0000ff",
          "C#": "0000cc",
          "E": "000099",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "Ab": {
          "Ab": "00ff00",
          "C": "00cc00",
          "Eb": "009900",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "G": presetColors("G"),
        "Eb": presetColors("Eb"),
        "C": presetColors("C"),
        "E": presetColors("E")
      };
    }

    Settings.prototype.getColorInfo = function(key, note) {
      var hex;
      hex = this.colors[key][note.toString(true)];
      return {
        hex: "#" + hex,
        isWhiteFore: this.needsWhiteFore(hex)
      };
    };

    Settings.prototype.needsWhiteFore = function(hexcolor) {
      var b, g, r, yiq;
      r = parseInt(hexcolor.substr(0, 2), 16);
      g = parseInt(hexcolor.substr(2, 2), 16);
      b = parseInt(hexcolor.substr(4, 2), 16);
      yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      if (yiq >= 128) {
        return false;
      } else {
        return true;
      }
    };

    return Settings;

  })();

  presetColors = function(key) {
    var a, b, c, complementary, keys, preset1, primary, rests, secondaryA, secondaryB;
    primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"];
    secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"];
    secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"];
    complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"];
    rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"];
    preset1 = {
      primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"],
      secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"],
      secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"],
      complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"],
      rests: ["5c584c", "403d35", "817c6b", "a29d8e"]
    };
    a = {
      "G": primary[0],
      "B": primary[1],
      "D": primary[2],
      "F#": secondaryA[0],
      "A": secondaryA[1],
      "C": secondaryB[0],
      "E": secondaryB[1],
      "G#": primary[3],
      "Gx": secondaryA[1],
      "Ab": primary[4],
      "A#": secondaryA[2],
      "Bb": secondaryA[3],
      "B#": secondaryA[3],
      "Cb": secondaryB[2],
      "C#": secondaryB[3],
      "Cx": primary[2],
      "Db": secondaryA[4],
      "D#": secondaryB[4],
      "Eb": complementary[0],
      "E#": secondaryA[0],
      "Fb": complementary[1],
      "F": complementary[2],
      "Gb": complementary[3],
      "quarter rest": rests[0],
      "half rest": rests[1],
      "whole rest": rests[2],
      "eighth rest": rests[3]
    };
    keys = [
      {
        "G": {
          "1": "G",
          "2": "A",
          "3": "B",
          "4": "C",
          "5": "D",
          "6": "E",
          "7": "F#",
          "1#": "G#",
          "1x": "Gx",
          "1b": "Gb",
          "1bb": "Gbb",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        },
        "E": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "1#": "",
          "1x": "",
          "1b": "",
          "1bb": "",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        }
      }
    ];
    c = preset1;
    b = {
      "G": c.primary[0],
      "B": c.primary[1],
      "D": c.primary[2],
      "F#": c.secondaryA[0],
      "A": c.secondaryA[1],
      "C": c.secondaryB[0],
      "E": c.secondaryB[1],
      "G#": c.primary[3],
      "Gx": c.secondaryA[1],
      "Ab": c.primary[4],
      "A#": c.secondaryA[2],
      "Bb": c.secondaryA[3],
      "B#": c.secondaryA[3],
      "Cb": c.secondaryB[2],
      "C#": c.secondaryB[3],
      "Cx": c.primary[2],
      "Db": c.secondaryA[4],
      "D#": c.complementary[1],
      "Eb": c.complementary[0],
      "E#": c.secondaryA[0],
      "Fb": c.complementary[1],
      "F": c.complementary[2],
      "Gb": c.complementary[3],
      "quarter rest": rests[2],
      "half rest": rests[0],
      "whole rest": rests[1],
      "eighth rest": rests[3]
    };
    return b;
  };

  test = new MusicXmlFile("/midi/chopin_prelude-no4-op28-eminor.xml", function() {
    var $data, colorInfo, fore, note, settings, used, _i, _j, _len, _len1, _ref5, _ref6;
    $data = $(".data");
    console.log(test);
    settings = new Settings();
    _ref5 = test.usedPitchSteps;
    for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
      used = _ref5[_i];
      $data.append("<br /> key " + used.key + ": ");
      _ref6 = used.notes;
      for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
        note = _ref6[_j];
        colorInfo = settings.getColorInfo(used.key, note);
        fore = colorInfo.isWhiteFore ? "#fff" : "#000";
        $data.append("<span style='color: " + fore + "; background: " + colorInfo.hex + "'>" + (note.toString(true)) + "</span>");
      }
    }
    $data.append("<br /> total measures " + test.measures.length);
    $data.append("<br /> total notes " + test.count);
    return createView(settings);
  });

  createView = function(settings) {
    var $canvas, canvas, canvasDivider, measureDivider, view;
    $canvas = $(".art");
    $canvas.attr("width", parseInt($canvas.css("width")));
    $canvas.attr("height", parseInt($canvas.css("height")));
    canvas = $canvas[0];
    canvasDivider = new VerticleRectangleCanvasDivider(canvas.width, canvas.height, test.measures.length);
    measureDivider = new HorizontalRectangleMeasureDivider();
    return view = new MusicView(canvas, test, canvasDivider, measureDivider, settings);
  };

  MusicView = (function() {
    function MusicView(canvas, music, canvasDivider, measureDivider, settings) {
      var key, measure, noteRect, rect, rectangles, _i, _j, _len, _len1, _ref5;
      this.canvas = canvas;
      this.music = music;
      if (!(canvasDivider instanceof CanvasDividingStrategy)) {
        console.log("variable 'canvasDivider' is not of type 'CanvasDividingStrategy'");
      }
      if (!(measureDivider instanceof MeasureDividingStrategy)) {
        console.log("variable 'measureDivider' is not of type 'MeasureDividingStrategy'");
      }
      if (!(settings instanceof Settings)) {
        console.log("variable 'settings' is not of type 'Settings'");
      }
      this.context = this.canvas.getContext("2d");
      this.context.textBaseline = "top";
      _ref5 = canvasDivider.rectangles;
      for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
        rect = _ref5[_i];
        this.context.fillText(rect.id, rect.x, rect.y);
        measure = this.music.measures[rect.id];
        if (measure) {
          rectangles = measureDivider.getRectangles(rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure);
          key = measure.attributes.key;
          for (_j = 0, _len1 = rectangles.length; _j < _len1; _j++) {
            noteRect = rectangles[_j];
            this.context.fillStyle = settings.getColorInfo(key, noteRect.note).hex;
            this.context.fillRect(noteRect.x, noteRect.y, noteRect.width, noteRect.height);
          }
        }
      }
    }

    return MusicView;

  })();

  window.MusicXmlFile = (function() {
    function MusicXmlFile(url, callback) {
      var load, self;
      self = this;
      this.measures = [];
      this.count = 0;
      this.usedKeys = [];
      this.usedPitchSteps = [];
      load = function(data) {
        var $data, allKeys, allNotes;
        allNotes = {};
        allKeys = [];
        $data = $(data);
        $("part", $data).each(function() {
          var $part, previousAttributes;
          $part = $(this);
          previousAttributes = {};
          return $("measure", $part).each(function() {
            var newMeasure, notes, _name;
            newMeasure = new Measure(this, previousAttributes);
            previousAttributes = newMeasure.attributes;
            self.measures.push(newMeasure);
            self.count += newMeasure.count;
            if (_.indexOf(allKeys, newMeasure.attributes.key.name) === -1) {
              allKeys.push(newMeasure.attributes.key.name);
            }
            if (allNotes[_name = newMeasure.attributes.key.name] == null) {
              allNotes[_name] = [];
            }
            return allNotes[newMeasure.attributes.key.name].push((function() {
              var _i, _len, _ref5, _results;
              _ref5 = newMeasure.usedPitchSteps;
              _results = [];
              for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
                notes = _ref5[_i];
                _results.push(notes);
              }
              return _results;
            })());
          });
        });
        self.usedKeys = allKeys;
        _.each(allKeys, function(name) {
          return self.usedPitchSteps.push({
            key: name,
            notes: _.chain(allNotes[name]).flatten().uniq(function(note) {
              return note.toString(true);
            }).sortBy(function(note) {
              return note.isRest + note.toString(true);
            }).value()
          });
        });
        return callback() != null;
      };
      $.ajax(url).success(load);
    }

    return MusicXmlFile;

  })();

  keyInfo = {
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

  Measure = (function() {
    function Measure(xml, previousAttributes) {
      var $measure, attributes, self;
      this.xml = xml;
      self = this;
      $measure = $(this.xml);
      this.number = $measure.attr("number");
      attributes = (function() {
        var $attributes, $clefs, $divisions, $key, $staves, $time, result;
        result = {};
        $attributes = $("attributes", $measure);
        if ($attributes.length === 0) {
          return result;
        }
        $divisions = $("divisions", $attributes);
        if ($divisions.length > 0) {
          result.divisions = $divisions.text();
        }
        $staves = $("staves", $attributes);
        if ($staves.length > 0) {
          result.staves = $staves.text();
        }
        $clefs = $("clef", $attributes);
        if ($clefs.length > 0) {
          result.clef = [];
        }
        $clefs.each(function() {
          var $clef;
          $clef = $(this);
          return result.clef.push({
            number: $clef.attr("number"),
            sign: $("sign", $clef).text(),
            line: $("line", $clef).text()
          });
        });
        $key = $("key", $attributes);
        if ($key.length > 0) {
          result.key = {
            fifths: $("fifths", $key).text(),
            mode: $("mode", $key).text()
          };
          result.key.name = keyInfo[result.key.fifths];
          result.key.toString = result.key.inspect = function() {
            return this.name;
          };
        }
        $time = $("time", $attributes);
        if ($time.length > 0) {
          result.time = {
            beats: $("beats", $time).text(),
            beatType: $("beat-type", $time).text(),
            toString: function() {
              return this.beats + "/" + this.beatType;
            }
          };
        }
        return result;
      })();
      this.attributes = $.extend({}, previousAttributes, attributes);
      this.notes = [];
      this.count = 0;
      this.usedPitchSteps = [];
      $("note", $measure).each(function() {
        var newNote, staff, _base;
        newNote = new Note(this);
        staff = (parseInt(newNote.staff) || 1) - 1;
        if ((_base = self.notes)[staff] == null) {
          _base[staff] = [];
        }
        self.notes[staff].push(newNote);
        self.count++;
        return self.usedPitchSteps.push(newNote);
      });
      this.usedPitchSteps = _.chain(this.usedPitchSteps).uniq(function(note) {
        return note.toString(true);
      }).sortBy(function(note) {
        return note.isRest + note.toString(true);
      }).value();
    }

    return Measure;

  })();

  Note = (function() {
    Note.prototype._pitchAlterMap = {
      "-2": "bb",
      "-1": "b",
      "0": "",
      "1": "#",
      "2": "x"
    };

    function Note(xml) {
      var $note, $pitch, $tie;
      this.xml = xml;
      $note = $(this.xml);
      this.duration = $("duration", $note).text();
      this.type = $("type", $note).text();
      this.staff = $("staff", $note).text();
      $pitch = $("pitch", $note);
      if ($pitch.length > 0) {
        this.pitch = {
          step: $("step", $pitch).text(),
          octave: $("octave", $pitch).text()
        };
        this.pitch.alter = $("alter", $pitch).text();
        if (this.pitch.alter === "") {
          this.pitch.alter = 0;
        }
      }
      this.isRest = $("rest", $note).length > 0;
      this.isGrace = $("grace", $note).length > 0;
      if (this.isGrace) {
        this.duration = 1;
      }
      if (this.type === "" && this.isRest) {
        this.type = "whole";
      }
      $tie = $("tie", $note);
      if ($tie.length > 0) {
        this.tie = $tie.attr("type");
      }
    }

    Note.prototype.toString = function(simple) {
      if (this.pitch && simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter];
      }
      if (this.pitch && !simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter] + this.pitch.octave + " " + this.type;
      }
      if (this.isRest) {
        return "" + this.type + " rest";
      }
    };

    Note.prototype.toHtml = function() {
      return Note.toHtml(this.toString());
    };

    Note.toHtml = function(noteName) {
      return noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x", "&#119082;").replace("b", "&#9837;").replace("n", "&#9838;");
    };

    return Note;

  })();

  NoteDraw = (function() {
    function NoteDraw() {}

    return NoteDraw;

  })();

  this.Settings = (function() {
    function Settings() {
      this.colors = {
        "F": {
          "A": "DAEEEA",
          "Bb": "EACEC4",
          "C": "43586C",
          "D": "A86060",
          "E": "904848",
          "F": "799892",
          "G": "C79A8B",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "A": {
          "A": "0000ff",
          "C#": "0000cc",
          "E": "000099",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "Ab": {
          "Ab": "00ff00",
          "C": "00cc00",
          "Eb": "009900",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "G": presetColors("G"),
        "Eb": presetColors("Eb"),
        "C": presetColors("C"),
        "E": presetColors("E")
      };
    }

    Settings.prototype.getColorInfo = function(key, note) {
      var hex;
      hex = this.colors[key][note.toString(true)];
      return {
        hex: "#" + hex,
        isWhiteFore: this.needsWhiteFore(hex)
      };
    };

    Settings.prototype.needsWhiteFore = function(hexcolor) {
      var b, g, r, yiq;
      r = parseInt(hexcolor.substr(0, 2), 16);
      g = parseInt(hexcolor.substr(2, 2), 16);
      b = parseInt(hexcolor.substr(4, 2), 16);
      yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      if (yiq >= 128) {
        return false;
      } else {
        return true;
      }
    };

    return Settings;

  })();

  presetColors = function(key) {
    var a, b, c, complementary, keys, preset1, primary, rests, secondaryA, secondaryB;
    primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"];
    secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"];
    secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"];
    complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"];
    rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"];
    preset1 = {
      primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"],
      secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"],
      secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"],
      complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"],
      rests: ["5c584c", "403d35", "817c6b", "a29d8e"]
    };
    a = {
      "G": primary[0],
      "B": primary[1],
      "D": primary[2],
      "F#": secondaryA[0],
      "A": secondaryA[1],
      "C": secondaryB[0],
      "E": secondaryB[1],
      "G#": primary[3],
      "Gx": secondaryA[1],
      "Ab": primary[4],
      "A#": secondaryA[2],
      "Bb": secondaryA[3],
      "B#": secondaryA[3],
      "Cb": secondaryB[2],
      "C#": secondaryB[3],
      "Cx": primary[2],
      "Db": secondaryA[4],
      "D#": secondaryB[4],
      "Eb": complementary[0],
      "E#": secondaryA[0],
      "Fb": complementary[1],
      "F": complementary[2],
      "Gb": complementary[3],
      "quarter rest": rests[0],
      "half rest": rests[1],
      "whole rest": rests[2],
      "eighth rest": rests[3]
    };
    keys = [
      {
        "G": {
          "1": "G",
          "2": "A",
          "3": "B",
          "4": "C",
          "5": "D",
          "6": "E",
          "7": "F#",
          "1#": "G#",
          "1x": "Gx",
          "1b": "Gb",
          "1bb": "Gbb",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        },
        "E": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "1#": "",
          "1x": "",
          "1b": "",
          "1bb": "",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        }
      }
    ];
    c = preset1;
    b = {
      "G": c.primary[0],
      "B": c.primary[1],
      "D": c.primary[2],
      "F#": c.secondaryA[0],
      "A": c.secondaryA[1],
      "C": c.secondaryB[0],
      "E": c.secondaryB[1],
      "G#": c.primary[3],
      "Gx": c.secondaryA[1],
      "Ab": c.primary[4],
      "A#": c.secondaryA[2],
      "Bb": c.secondaryA[3],
      "B#": c.secondaryA[3],
      "Cb": c.secondaryB[2],
      "C#": c.secondaryB[3],
      "Cx": c.primary[2],
      "Db": c.secondaryA[4],
      "D#": c.complementary[1],
      "Eb": c.complementary[0],
      "E#": c.secondaryA[0],
      "Fb": c.complementary[1],
      "F": c.complementary[2],
      "Gb": c.complementary[3],
      "quarter rest": rests[2],
      "half rest": rests[0],
      "whole rest": rests[1],
      "eighth rest": rests[3]
    };
    return b;
  };

  test = new MusicXmlFile("/midi/chopin_prelude-no4-op28-eminor.xml", function() {
    var $data, colorInfo, fore, note, settings, used, _i, _j, _len, _len1, _ref5, _ref6;
    $data = $(".data");
    console.log(test);
    settings = new Settings();
    _ref5 = test.usedPitchSteps;
    for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
      used = _ref5[_i];
      $data.append("<br /> key " + used.key + ": ");
      _ref6 = used.notes;
      for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
        note = _ref6[_j];
        colorInfo = settings.getColorInfo(used.key, note);
        fore = colorInfo.isWhiteFore ? "#fff" : "#000";
        $data.append("<span style='color: " + fore + "; background: " + colorInfo.hex + "'>" + (note.toString(true)) + "</span>");
      }
    }
    $data.append("<br /> total measures " + test.measures.length);
    $data.append("<br /> total notes " + test.count);
    return createView(settings);
  });

  createView = function(settings) {
    var $canvas, canvas, canvasDivider, measureDivider, view;
    $canvas = $(".art");
    $canvas.attr("width", parseInt($canvas.css("width")));
    $canvas.attr("height", parseInt($canvas.css("height")));
    canvas = $canvas[0];
    canvasDivider = new VerticleRectangleCanvasDivider(canvas.width, canvas.height, test.measures.length);
    measureDivider = new HorizontalRectangleMeasureDivider();
    return view = new MusicView(canvas, test, canvasDivider, measureDivider, settings);
  };

  MusicView = (function() {
    function MusicView(canvas, music, canvasDivider, measureDivider, settings) {
      var key, measure, noteRect, rect, rectangles, _i, _j, _len, _len1, _ref5;
      this.canvas = canvas;
      this.music = music;
      if (!(canvasDivider instanceof CanvasDividingStrategy)) {
        console.log("variable 'canvasDivider' is not of type 'CanvasDividingStrategy'");
      }
      if (!(measureDivider instanceof MeasureDividingStrategy)) {
        console.log("variable 'measureDivider' is not of type 'MeasureDividingStrategy'");
      }
      if (!(settings instanceof Settings)) {
        console.log("variable 'settings' is not of type 'Settings'");
      }
      this.context = this.canvas.getContext("2d");
      this.context.textBaseline = "top";
      _ref5 = canvasDivider.rectangles;
      for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
        rect = _ref5[_i];
        this.context.fillText(rect.id, rect.x, rect.y);
        measure = this.music.measures[rect.id];
        if (measure) {
          rectangles = measureDivider.getRectangles(rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure);
          key = measure.attributes.key;
          for (_j = 0, _len1 = rectangles.length; _j < _len1; _j++) {
            noteRect = rectangles[_j];
            this.context.fillStyle = settings.getColorInfo(key, noteRect.note).hex;
            this.context.fillRect(noteRect.x, noteRect.y, noteRect.width, noteRect.height);
          }
        }
      }
    }

    return MusicView;

  })();

  window.MusicXmlFile = (function() {
    function MusicXmlFile(url, callback) {
      var load, self;
      self = this;
      this.measures = [];
      this.count = 0;
      this.usedKeys = [];
      this.usedPitchSteps = [];
      load = function(data) {
        var $data, allKeys, allNotes;
        allNotes = {};
        allKeys = [];
        $data = $(data);
        $("part", $data).each(function() {
          var $part, previousAttributes;
          $part = $(this);
          previousAttributes = {};
          return $("measure", $part).each(function() {
            var newMeasure, notes, _name;
            newMeasure = new Measure(this, previousAttributes);
            previousAttributes = newMeasure.attributes;
            self.measures.push(newMeasure);
            self.count += newMeasure.count;
            if (_.indexOf(allKeys, newMeasure.attributes.key.name) === -1) {
              allKeys.push(newMeasure.attributes.key.name);
            }
            if (allNotes[_name = newMeasure.attributes.key.name] == null) {
              allNotes[_name] = [];
            }
            return allNotes[newMeasure.attributes.key.name].push((function() {
              var _i, _len, _ref5, _results;
              _ref5 = newMeasure.usedPitchSteps;
              _results = [];
              for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
                notes = _ref5[_i];
                _results.push(notes);
              }
              return _results;
            })());
          });
        });
        self.usedKeys = allKeys;
        _.each(allKeys, function(name) {
          return self.usedPitchSteps.push({
            key: name,
            notes: _.chain(allNotes[name]).flatten().uniq(function(note) {
              return note.toString(true);
            }).sortBy(function(note) {
              return note.isRest + note.toString(true);
            }).value()
          });
        });
        return callback() != null;
      };
      $.ajax(url).success(load);
    }

    return MusicXmlFile;

  })();

  keyInfo = {
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

  Measure = (function() {
    function Measure(xml, previousAttributes) {
      var $measure, attributes, self;
      this.xml = xml;
      self = this;
      $measure = $(this.xml);
      this.number = $measure.attr("number");
      attributes = (function() {
        var $attributes, $clefs, $divisions, $key, $staves, $time, result;
        result = {};
        $attributes = $("attributes", $measure);
        if ($attributes.length === 0) {
          return result;
        }
        $divisions = $("divisions", $attributes);
        if ($divisions.length > 0) {
          result.divisions = $divisions.text();
        }
        $staves = $("staves", $attributes);
        if ($staves.length > 0) {
          result.staves = $staves.text();
        }
        $clefs = $("clef", $attributes);
        if ($clefs.length > 0) {
          result.clef = [];
        }
        $clefs.each(function() {
          var $clef;
          $clef = $(this);
          return result.clef.push({
            number: $clef.attr("number"),
            sign: $("sign", $clef).text(),
            line: $("line", $clef).text()
          });
        });
        $key = $("key", $attributes);
        if ($key.length > 0) {
          result.key = {
            fifths: $("fifths", $key).text(),
            mode: $("mode", $key).text()
          };
          result.key.name = keyInfo[result.key.fifths];
          result.key.toString = result.key.inspect = function() {
            return this.name;
          };
        }
        $time = $("time", $attributes);
        if ($time.length > 0) {
          result.time = {
            beats: $("beats", $time).text(),
            beatType: $("beat-type", $time).text(),
            toString: function() {
              return this.beats + "/" + this.beatType;
            }
          };
        }
        return result;
      })();
      this.attributes = $.extend({}, previousAttributes, attributes);
      this.notes = [];
      this.count = 0;
      this.usedPitchSteps = [];
      $("note", $measure).each(function() {
        var newNote, staff, _base;
        newNote = new Note(this);
        staff = (parseInt(newNote.staff) || 1) - 1;
        if ((_base = self.notes)[staff] == null) {
          _base[staff] = [];
        }
        self.notes[staff].push(newNote);
        self.count++;
        return self.usedPitchSteps.push(newNote);
      });
      this.usedPitchSteps = _.chain(this.usedPitchSteps).uniq(function(note) {
        return note.toString(true);
      }).sortBy(function(note) {
        return note.isRest + note.toString(true);
      }).value();
    }

    return Measure;

  })();

  Note = (function() {
    Note.prototype._pitchAlterMap = {
      "-2": "bb",
      "-1": "b",
      "0": "",
      "1": "#",
      "2": "x"
    };

    function Note(xml) {
      var $note, $pitch, $tie;
      this.xml = xml;
      $note = $(this.xml);
      this.duration = $("duration", $note).text();
      this.type = $("type", $note).text();
      this.staff = $("staff", $note).text();
      $pitch = $("pitch", $note);
      if ($pitch.length > 0) {
        this.pitch = {
          step: $("step", $pitch).text(),
          octave: $("octave", $pitch).text()
        };
        this.pitch.alter = $("alter", $pitch).text();
        if (this.pitch.alter === "") {
          this.pitch.alter = 0;
        }
      }
      this.isRest = $("rest", $note).length > 0;
      this.isGrace = $("grace", $note).length > 0;
      if (this.isGrace) {
        this.duration = 1;
      }
      if (this.type === "" && this.isRest) {
        this.type = "whole";
      }
      $tie = $("tie", $note);
      if ($tie.length > 0) {
        this.tie = $tie.attr("type");
      }
    }

    Note.prototype.toString = function(simple) {
      if (this.pitch && simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter];
      }
      if (this.pitch && !simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter] + this.pitch.octave + " " + this.type;
      }
      if (this.isRest) {
        return "" + this.type + " rest";
      }
    };

    Note.prototype.toHtml = function() {
      return Note.toHtml(this.toString());
    };

    Note.toHtml = function(noteName) {
      return noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x", "&#119082;").replace("b", "&#9837;").replace("n", "&#9838;");
    };

    return Note;

  })();

  NoteDraw = (function() {
    function NoteDraw() {}

    return NoteDraw;

  })();

  this.Settings = (function() {
    function Settings() {
      this.colors = {
        "F": {
          "A": "DAEEEA",
          "Bb": "EACEC4",
          "C": "43586C",
          "D": "A86060",
          "E": "904848",
          "F": "799892",
          "G": "C79A8B",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "A": {
          "A": "0000ff",
          "C#": "0000cc",
          "E": "000099",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "Ab": {
          "Ab": "00ff00",
          "C": "00cc00",
          "Eb": "009900",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "G": presetColors("G"),
        "Eb": presetColors("Eb"),
        "C": presetColors("C"),
        "E": presetColors("E")
      };
    }

    Settings.prototype.getColorInfo = function(key, note) {
      var hex;
      hex = this.colors[key][note.toString(true)];
      return {
        hex: "#" + hex,
        isWhiteFore: this.needsWhiteFore(hex)
      };
    };

    Settings.prototype.needsWhiteFore = function(hexcolor) {
      var b, g, r, yiq;
      r = parseInt(hexcolor.substr(0, 2), 16);
      g = parseInt(hexcolor.substr(2, 2), 16);
      b = parseInt(hexcolor.substr(4, 2), 16);
      yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      if (yiq >= 128) {
        return false;
      } else {
        return true;
      }
    };

    return Settings;

  })();

  presetColors = function(key) {
    var a, b, c, complementary, keys, preset1, primary, rests, secondaryA, secondaryB;
    primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"];
    secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"];
    secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"];
    complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"];
    rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"];
    preset1 = {
      primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"],
      secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"],
      secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"],
      complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"],
      rests: ["5c584c", "403d35", "817c6b", "a29d8e"]
    };
    a = {
      "G": primary[0],
      "B": primary[1],
      "D": primary[2],
      "F#": secondaryA[0],
      "A": secondaryA[1],
      "C": secondaryB[0],
      "E": secondaryB[1],
      "G#": primary[3],
      "Gx": secondaryA[1],
      "Ab": primary[4],
      "A#": secondaryA[2],
      "Bb": secondaryA[3],
      "B#": secondaryA[3],
      "Cb": secondaryB[2],
      "C#": secondaryB[3],
      "Cx": primary[2],
      "Db": secondaryA[4],
      "D#": secondaryB[4],
      "Eb": complementary[0],
      "E#": secondaryA[0],
      "Fb": complementary[1],
      "F": complementary[2],
      "Gb": complementary[3],
      "quarter rest": rests[0],
      "half rest": rests[1],
      "whole rest": rests[2],
      "eighth rest": rests[3]
    };
    keys = [
      {
        "G": {
          "1": "G",
          "2": "A",
          "3": "B",
          "4": "C",
          "5": "D",
          "6": "E",
          "7": "F#",
          "1#": "G#",
          "1x": "Gx",
          "1b": "Gb",
          "1bb": "Gbb",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        },
        "E": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "1#": "",
          "1x": "",
          "1b": "",
          "1bb": "",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        }
      }
    ];
    c = preset1;
    b = {
      "G": c.primary[0],
      "B": c.primary[1],
      "D": c.primary[2],
      "F#": c.secondaryA[0],
      "A": c.secondaryA[1],
      "C": c.secondaryB[0],
      "E": c.secondaryB[1],
      "G#": c.primary[3],
      "Gx": c.secondaryA[1],
      "Ab": c.primary[4],
      "A#": c.secondaryA[2],
      "Bb": c.secondaryA[3],
      "B#": c.secondaryA[3],
      "Cb": c.secondaryB[2],
      "C#": c.secondaryB[3],
      "Cx": c.primary[2],
      "Db": c.secondaryA[4],
      "D#": c.complementary[1],
      "Eb": c.complementary[0],
      "E#": c.secondaryA[0],
      "Fb": c.complementary[1],
      "F": c.complementary[2],
      "Gb": c.complementary[3],
      "quarter rest": rests[2],
      "half rest": rests[0],
      "whole rest": rests[1],
      "eighth rest": rests[3]
    };
    return b;
  };

  test = new MusicXmlFile("/assets/midi/chopin_prelude-no4-op28-eminor.xml", function() {
    var $data, colorInfo, fore, note, settings, used, _i, _j, _len, _len1, _ref5, _ref6;
    $data = $(".data");
    console.log(test);
    settings = new Settings();
    _ref5 = test.usedPitchSteps;
    for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
      used = _ref5[_i];
      $data.append("<br /> key " + used.key + ": ");
      _ref6 = used.notes;
      for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
        note = _ref6[_j];
        colorInfo = settings.getColorInfo(used.key, note);
        fore = colorInfo.isWhiteFore ? "#fff" : "#000";
        $data.append("<span style='color: " + fore + "; background: " + colorInfo.hex + "'>" + (note.toString(true)) + "</span>");
      }
    }
    $data.append("<br /> total measures " + test.measures.length);
    $data.append("<br /> total notes " + test.count);
    return createView(settings);
  });

  createView = function(settings) {
    var $canvas, canvas, canvasDivider, measureDivider, view;
    $canvas = $(".art");
    $canvas.attr("width", parseInt($canvas.css("width")));
    $canvas.attr("height", parseInt($canvas.css("height")));
    canvas = $canvas[0];
    canvasDivider = new VerticleRectangleCanvasDivider(canvas.width, canvas.height, test.measures.length);
    measureDivider = new HorizontalRectangleMeasureDivider();
    return view = new MusicView(canvas, test, canvasDivider, measureDivider, settings);
  };

  MusicView = (function() {
    function MusicView(canvas, music, canvasDivider, measureDivider, settings) {
      var key, measure, noteRect, rect, rectangles, _i, _j, _len, _len1, _ref5;
      this.canvas = canvas;
      this.music = music;
      if (!(canvasDivider instanceof CanvasDividingStrategy)) {
        console.log("variable 'canvasDivider' is not of type 'CanvasDividingStrategy'");
      }
      if (!(measureDivider instanceof MeasureDividingStrategy)) {
        console.log("variable 'measureDivider' is not of type 'MeasureDividingStrategy'");
      }
      if (!(settings instanceof Settings)) {
        console.log("variable 'settings' is not of type 'Settings'");
      }
      this.context = this.canvas.getContext("2d");
      this.context.textBaseline = "top";
      _ref5 = canvasDivider.rectangles;
      for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
        rect = _ref5[_i];
        this.context.fillText(rect.id, rect.x, rect.y);
        measure = this.music.measures[rect.id];
        if (measure) {
          rectangles = measureDivider.getRectangles(rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure);
          key = measure.attributes.key;
          for (_j = 0, _len1 = rectangles.length; _j < _len1; _j++) {
            noteRect = rectangles[_j];
            this.context.fillStyle = settings.getColorInfo(key, noteRect.note).hex;
            this.context.fillRect(noteRect.x, noteRect.y, noteRect.width, noteRect.height);
          }
        }
      }
    }

    return MusicView;

  })();

  window.MusicXmlFile = (function() {
    function MusicXmlFile(url, callback) {
      var load, self;
      self = this;
      this.measures = [];
      this.count = 0;
      this.usedKeys = [];
      this.usedPitchSteps = [];
      load = function(data) {
        var $data, allKeys, allNotes;
        allNotes = {};
        allKeys = [];
        $data = $(data);
        $("part", $data).each(function() {
          var $part, previousAttributes;
          $part = $(this);
          previousAttributes = {};
          return $("measure", $part).each(function() {
            var newMeasure, notes, _name;
            newMeasure = new Measure(this, previousAttributes);
            previousAttributes = newMeasure.attributes;
            self.measures.push(newMeasure);
            self.count += newMeasure.count;
            if (_.indexOf(allKeys, newMeasure.attributes.key.name) === -1) {
              allKeys.push(newMeasure.attributes.key.name);
            }
            if (allNotes[_name = newMeasure.attributes.key.name] == null) {
              allNotes[_name] = [];
            }
            return allNotes[newMeasure.attributes.key.name].push((function() {
              var _i, _len, _ref5, _results;
              _ref5 = newMeasure.usedPitchSteps;
              _results = [];
              for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
                notes = _ref5[_i];
                _results.push(notes);
              }
              return _results;
            })());
          });
        });
        self.usedKeys = allKeys;
        _.each(allKeys, function(name) {
          return self.usedPitchSteps.push({
            key: name,
            notes: _.chain(allNotes[name]).flatten().uniq(function(note) {
              return note.toString(true);
            }).sortBy(function(note) {
              return note.isRest + note.toString(true);
            }).value()
          });
        });
        return callback() != null;
      };
      $.ajax(url).success(load);
    }

    return MusicXmlFile;

  })();

  keyInfo = {
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

  Measure = (function() {
    function Measure(xml, previousAttributes) {
      var $measure, attributes, self;
      this.xml = xml;
      self = this;
      $measure = $(this.xml);
      this.number = $measure.attr("number");
      attributes = (function() {
        var $attributes, $clefs, $divisions, $key, $staves, $time, result;
        result = {};
        $attributes = $("attributes", $measure);
        if ($attributes.length === 0) {
          return result;
        }
        $divisions = $("divisions", $attributes);
        if ($divisions.length > 0) {
          result.divisions = $divisions.text();
        }
        $staves = $("staves", $attributes);
        if ($staves.length > 0) {
          result.staves = $staves.text();
        }
        $clefs = $("clef", $attributes);
        if ($clefs.length > 0) {
          result.clef = [];
        }
        $clefs.each(function() {
          var $clef;
          $clef = $(this);
          return result.clef.push({
            number: $clef.attr("number"),
            sign: $("sign", $clef).text(),
            line: $("line", $clef).text()
          });
        });
        $key = $("key", $attributes);
        if ($key.length > 0) {
          result.key = {
            fifths: $("fifths", $key).text(),
            mode: $("mode", $key).text()
          };
          result.key.name = keyInfo[result.key.fifths];
          result.key.toString = result.key.inspect = function() {
            return this.name;
          };
        }
        $time = $("time", $attributes);
        if ($time.length > 0) {
          result.time = {
            beats: $("beats", $time).text(),
            beatType: $("beat-type", $time).text(),
            toString: function() {
              return this.beats + "/" + this.beatType;
            }
          };
        }
        return result;
      })();
      this.attributes = $.extend({}, previousAttributes, attributes);
      this.notes = [];
      this.count = 0;
      this.usedPitchSteps = [];
      $("note", $measure).each(function() {
        var newNote, staff, _base;
        newNote = new Note(this);
        staff = (parseInt(newNote.staff) || 1) - 1;
        if ((_base = self.notes)[staff] == null) {
          _base[staff] = [];
        }
        self.notes[staff].push(newNote);
        self.count++;
        return self.usedPitchSteps.push(newNote);
      });
      this.usedPitchSteps = _.chain(this.usedPitchSteps).uniq(function(note) {
        return note.toString(true);
      }).sortBy(function(note) {
        return note.isRest + note.toString(true);
      }).value();
    }

    return Measure;

  })();

  Note = (function() {
    Note.prototype._pitchAlterMap = {
      "-2": "bb",
      "-1": "b",
      "0": "",
      "1": "#",
      "2": "x"
    };

    function Note(xml) {
      var $note, $pitch, $tie;
      this.xml = xml;
      $note = $(this.xml);
      this.duration = $("duration", $note).text();
      this.type = $("type", $note).text();
      this.staff = $("staff", $note).text();
      $pitch = $("pitch", $note);
      if ($pitch.length > 0) {
        this.pitch = {
          step: $("step", $pitch).text(),
          octave: $("octave", $pitch).text()
        };
        this.pitch.alter = $("alter", $pitch).text();
        if (this.pitch.alter === "") {
          this.pitch.alter = 0;
        }
      }
      this.isRest = $("rest", $note).length > 0;
      this.isGrace = $("grace", $note).length > 0;
      if (this.isGrace) {
        this.duration = 1;
      }
      if (this.type === "" && this.isRest) {
        this.type = "whole";
      }
      $tie = $("tie", $note);
      if ($tie.length > 0) {
        this.tie = $tie.attr("type");
      }
    }

    Note.prototype.toString = function(simple) {
      if (this.pitch && simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter];
      }
      if (this.pitch && !simple) {
        return "" + this.pitch.step + this._pitchAlterMap[this.pitch.alter] + this.pitch.octave + " " + this.type;
      }
      if (this.isRest) {
        return "" + this.type + " rest";
      }
    };

    Note.prototype.toHtml = function() {
      return Note.toHtml(this.toString());
    };

    Note.toHtml = function(noteName) {
      return noteName.replace("#", "&#9839;").replace("bb", "&#119083;").replace("x", "&#119082;").replace("b", "&#9837;").replace("n", "&#9838;");
    };

    return Note;

  })();

  NoteDraw = (function() {
    function NoteDraw() {}

    return NoteDraw;

  })();

  this.Settings = (function() {
    function Settings() {
      this.colors = {
        "F": {
          "A": "DAEEEA",
          "Bb": "EACEC4",
          "C": "43586C",
          "D": "A86060",
          "E": "904848",
          "F": "799892",
          "G": "C79A8B",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "A": {
          "A": "0000ff",
          "C#": "0000cc",
          "E": "000099",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "Ab": {
          "Ab": "00ff00",
          "C": "00cc00",
          "Eb": "009900",
          "half rest": "cccccc",
          "quarter rest": "999999",
          "whole rest": "ffffff"
        },
        "G": presetColors("G"),
        "Eb": presetColors("Eb"),
        "C": presetColors("C"),
        "E": presetColors("E")
      };
    }

    Settings.prototype.getColorInfo = function(key, note) {
      var hex;
      hex = this.colors[key][note.toString(true)];
      return {
        hex: "#" + hex,
        isWhiteFore: this.needsWhiteFore(hex)
      };
    };

    Settings.prototype.needsWhiteFore = function(hexcolor) {
      var b, g, r, yiq;
      r = parseInt(hexcolor.substr(0, 2), 16);
      g = parseInt(hexcolor.substr(2, 2), 16);
      b = parseInt(hexcolor.substr(4, 2), 16);
      yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      if (yiq >= 128) {
        return false;
      } else {
        return true;
      }
    };

    return Settings;

  })();

  presetColors = function(key) {
    var a, b, c, complementary, keys, preset1, primary, rests, secondaryA, secondaryB;
    primary = ["FF8300", "BF7930", "A65500", "FFA240", "FFBB73"];
    secondaryA = ["FFB400", "BF9530", "A67500", "FFC740", "FFD673"];
    secondaryB = ["FF2800", "BF4630", "A61A00", "FF5D40", "FF8973"];
    complementary = ["06799F", "216278", "024E68", "3AAACF", "61B4CF"];
    rests = ["E6E0DA", "898E8F", "728185", "D5CCB6"];
    preset1 = {
      primary: ["696b46", "4b4c32", "373824", "919461", "a8aa7e"],
      secondaryA: ["a8462d", "72301f", "3d1910", "d27158", "e4aa9b"],
      secondaryB: ["b99555", "8f713b", "5f4b27", "d2bb91", "ebe0cd"],
      complementary: ["394736", "222a20", "586e53", "779371", "a6b8a2"],
      rests: ["5c584c", "403d35", "817c6b", "a29d8e"]
    };
    a = {
      "G": primary[0],
      "B": primary[1],
      "D": primary[2],
      "F#": secondaryA[0],
      "A": secondaryA[1],
      "C": secondaryB[0],
      "E": secondaryB[1],
      "G#": primary[3],
      "Gx": secondaryA[1],
      "Ab": primary[4],
      "A#": secondaryA[2],
      "Bb": secondaryA[3],
      "B#": secondaryA[3],
      "Cb": secondaryB[2],
      "C#": secondaryB[3],
      "Cx": primary[2],
      "Db": secondaryA[4],
      "D#": secondaryB[4],
      "Eb": complementary[0],
      "E#": secondaryA[0],
      "Fb": complementary[1],
      "F": complementary[2],
      "Gb": complementary[3],
      "quarter rest": rests[0],
      "half rest": rests[1],
      "whole rest": rests[2],
      "eighth rest": rests[3]
    };
    keys = [
      {
        "G": {
          "1": "G",
          "2": "A",
          "3": "B",
          "4": "C",
          "5": "D",
          "6": "E",
          "7": "F#",
          "1#": "G#",
          "1x": "Gx",
          "1b": "Gb",
          "1bb": "Gbb",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        },
        "E": {
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "1#": "",
          "1x": "",
          "1b": "",
          "1bb": "",
          "2#": "",
          "2x": "",
          "2b": "",
          "2bb": "",
          "3#": "",
          "3x": "",
          "3b": "",
          "3bb": "",
          "4#": "",
          "4x": "",
          "4b": "",
          "4bb": "",
          "5#": "",
          "5x": "",
          "5b": "",
          "5bb": "",
          "6#": "",
          "6x": "",
          "6b": "",
          "6bb": "",
          "7#": "",
          "7x": "",
          "7b": "",
          "7bb": ""
        }
      }
    ];
    c = preset1;
    b = {
      "G": c.primary[0],
      "B": c.primary[1],
      "D": c.primary[2],
      "F#": c.secondaryA[0],
      "A": c.secondaryA[1],
      "C": c.secondaryB[0],
      "E": c.secondaryB[1],
      "G#": c.primary[3],
      "Gx": c.secondaryA[1],
      "Ab": c.primary[4],
      "A#": c.secondaryA[2],
      "Bb": c.secondaryA[3],
      "B#": c.secondaryA[3],
      "Cb": c.secondaryB[2],
      "C#": c.secondaryB[3],
      "Cx": c.primary[2],
      "Db": c.secondaryA[4],
      "D#": c.complementary[1],
      "Eb": c.complementary[0],
      "E#": c.secondaryA[0],
      "Fb": c.complementary[1],
      "F": c.complementary[2],
      "Gb": c.complementary[3],
      "quarter rest": rests[2],
      "half rest": rests[0],
      "whole rest": rests[1],
      "eighth rest": rests[3]
    };
    return b;
  };

  test = new MusicXmlFile("/assets/midi/chopin_prelude-no4-op28-eminor.xml", function() {
    var $data, colorInfo, fore, note, settings, used, _i, _j, _len, _len1, _ref5, _ref6;
    $data = $(".data");
    console.log(test);
    settings = new Settings();
    _ref5 = test.usedPitchSteps;
    for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
      used = _ref5[_i];
      $data.append("<br /> key " + used.key + ": ");
      _ref6 = used.notes;
      for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
        note = _ref6[_j];
        colorInfo = settings.getColorInfo(used.key, note);
        fore = colorInfo.isWhiteFore ? "#fff" : "#000";
        $data.append("<span style='color: " + fore + "; background: " + colorInfo.hex + "'>" + (note.toString(true)) + "</span>");
      }
    }
    $data.append("<br /> total measures " + test.measures.length);
    $data.append("<br /> total notes " + test.count);
    return createView(settings);
  });

  createView = function(settings) {
    var $canvas, canvas, canvasDivider, measureDivider, view;
    $canvas = $(".art");
    $canvas.attr("width", parseInt($canvas.css("width")));
    $canvas.attr("height", parseInt($canvas.css("height")));
    canvas = $canvas[0];
    canvasDivider = new VerticleRectangleCanvasDivider(canvas.width, canvas.height, test.measures.length);
    measureDivider = new HorizontalRectangleMeasureDivider();
    return view = new MusicView(canvas, test, canvasDivider, measureDivider, settings);
  };

  MusicView = (function() {
    function MusicView(canvas, music, canvasDivider, measureDivider, settings) {
      var key, measure, noteRect, rect, rectangles, _i, _j, _len, _len1, _ref5;
      this.canvas = canvas;
      this.music = music;
      if (!(canvasDivider instanceof CanvasDividingStrategy)) {
        console.log("variable 'canvasDivider' is not of type 'CanvasDividingStrategy'");
      }
      if (!(measureDivider instanceof MeasureDividingStrategy)) {
        console.log("variable 'measureDivider' is not of type 'MeasureDividingStrategy'");
      }
      if (!(settings instanceof Settings)) {
        console.log("variable 'settings' is not of type 'Settings'");
      }
      this.context = this.canvas.getContext("2d");
      this.context.textBaseline = "top";
      _ref5 = canvasDivider.rectangles;
      for (_i = 0, _len = _ref5.length; _i < _len; _i++) {
        rect = _ref5[_i];
        this.context.fillText(rect.id, rect.x, rect.y);
        measure = this.music.measures[rect.id];
        if (measure) {
          rectangles = measureDivider.getRectangles(rect.x, rect.y, canvasDivider.rectangleWidth, canvasDivider.rectangleHeight, measure);
          key = measure.attributes.key;
          for (_j = 0, _len1 = rectangles.length; _j < _len1; _j++) {
            noteRect = rectangles[_j];
            this.context.fillStyle = settings.getColorInfo(key, noteRect.note).hex;
            this.context.fillRect(noteRect.x, noteRect.y, noteRect.width, noteRect.height);
          }
        }
      }
    }

    return MusicView;

  })();

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/