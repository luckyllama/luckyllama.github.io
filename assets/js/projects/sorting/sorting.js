(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function($) {
    var Bubblesort, CanvasDisplay, Heapsort, Insertionsort, Mergesort, Quicksort, Selectionsort, SortingAlgorithm, SortingView, SvgDisplay;
    Array.prototype.shuffle = function() {
      return this.sort(function() {
        return 0.5 - Math.random();
      });
    };
    SortingAlgorithm = (function() {
      SortingAlgorithm.prototype.initList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

      function SortingAlgorithm(initList) {
        this.initList = initList.slice();
        this.solve();
      }

      SortingAlgorithm.prototype.solve = function() {};

      SortingAlgorithm.generateList = function(max) {
        var _i, _results;
        if (max == null) {
          max = 15;
        }
        return (function() {
          _results = [];
          for (var _i = 1; 1 <= max ? _i <= max : _i >= max; 1 <= max ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this).shuffle();
      };

      return SortingAlgorithm;

    })();
    Bubblesort = (function(_super) {
      __extends(Bubblesort, _super);

      Bubblesort.prototype.log = [];

      function Bubblesort(initList) {
        this.log = [initList];
        Bubblesort.__super__.constructor.call(this, initList);
      }

      Bubblesort.prototype.solve = function() {
        var bound, j, list, t, _i, _ref;
        list = this.initList.slice();
        bound = list.length - 1;
        while (true) {
          t = 0;
          for (j = _i = 0; 0 <= bound ? _i <= bound : _i >= bound; j = 0 <= bound ? ++_i : --_i) {
            if (list[j] > list[j + 1]) {
              _ref = [list[j + 1], list[j]], list[j] = _ref[0], list[j + 1] = _ref[1];
              this.log.push(list.slice());
              t = j;
            }
          }
          if (t === 0) {
            break;
          }
          bound = t;
        }
      };

      return Bubblesort;

    })(SortingAlgorithm);
    Mergesort = (function(_super) {
      __extends(Mergesort, _super);

      Mergesort.prototype.log = [];

      function Mergesort(initList) {
        this.log = [initList];
        Mergesort.__super__.constructor.call(this, initList);
      }

      Mergesort.prototype.solve = function() {
        var list, mergesort, self;
        list = this.initList.slice();
        self = this;
        mergesort = function(list) {
          var arr1, arr2, elem, m, p1, p2, result;
          if (list.length <= 1) {
            return (function() {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = list.length; _i < _len; _i++) {
                elem = list[_i];
                _results.push(elem);
              }
              return _results;
            })();
          }
          m = Math.floor(list.length / 2);
          arr1 = mergesort(list.slice(0, m));
          arr2 = mergesort(list.slice(m));
          result = [];
          p1 = p2 = 0;
          while (true) {
            if (p1 >= arr1.length) {
              if (p2 >= arr2.length) {
                return result;
              }
              result.push(arr2[p2]);
              p2 += 1;
            } else if (p2 >= arr2.length || arr1[p1] < arr2[p2]) {
              result.push(arr1[p1]);
              p1 += 1;
            } else {
              result.push(arr2[p2]);
              p2 += 1;
            }
            self.log.push(list.slice());
          }
        };
        return mergesort(list);
      };

      return Mergesort;

    })(SortingAlgorithm);
    Quicksort = (function(_super) {
      __extends(Quicksort, _super);

      Quicksort.prototype.log = [];

      function Quicksort(initList) {
        this.log = [initList];
        Quicksort.__super__.constructor.call(this, initList);
      }

      Quicksort.prototype.solve = function() {
        var divide, list, partition, qs, self, swap;
        list = this.initList.slice();
        self = this;
        swap = function(i, j) {
          var _ref;
          if (i === j) {
            return;
          }
          _ref = [list[j], list[i]], list[i] = _ref[0], list[j] = _ref[1];
          return self.log.push(list.slice());
        };
        divide = function(v, start, end) {
          var first_big, j;
          first_big = start;
          j = start;
          while (j <= end) {
            if (list[j] < v) {
              swap(first_big, j);
              first_big += 1;
            }
            j += 1;
          }
          return first_big;
        };
        partition = function(start, end) {
          var first_big, v;
          v = list[end];
          first_big = divide(v, start, end - 1);
          swap(first_big, end);
          return first_big;
        };
        qs = function(start, end) {
          var m;
          if (start >= end) {
            return;
          }
          m = partition(start, end);
          qs(start, m - 1);
          return qs(m + 1, end);
        };
        return qs(0, list.length - 1);
      };

      return Quicksort;

    })(SortingAlgorithm);
    Heapsort = (function(_super) {
      __extends(Heapsort, _super);

      Heapsort.prototype.log = [];

      function Heapsort(initList) {
        this.log = [initList];
        Heapsort.__super__.constructor.call(this, initList);
      }

      Heapsort.prototype.solve = function() {
        var heap_sort, list, put_array_in_heap_order, self, sift_element_down_heap;
        list = this.initList.slice();
        self = this;
        heap_sort = function(list) {
          var end, _ref, _results;
          put_array_in_heap_order(list);
          end = list.length - 1;
          _results = [];
          while (end > 0) {
            _ref = [list[end], list[0]], list[0] = _ref[0], list[end] = _ref[1];
            self.log.push(list.slice());
            sift_element_down_heap(list, 0, end);
            _results.push(end -= 1);
          }
          return _results;
        };
        put_array_in_heap_order = function(list) {
          var i, _results;
          i = list.length / 2 - 1;
          i = Math.floor(i);
          _results = [];
          while (i >= 0) {
            sift_element_down_heap(list, i, list.length);
            _results.push(i -= 1);
          }
          return _results;
        };
        sift_element_down_heap = function(heap, i, max) {
          var c1, c2, i_big, _ref;
          while (i < max) {
            i_big = i;
            c1 = 2 * i + 1;
            c2 = c1 + 1;
            if (c1 < max && heap[c1] > heap[i_big]) {
              i_big = c1;
            }
            if (c2 < max && heap[c2] > heap[i_big]) {
              i_big = c2;
            }
            if (i_big === i) {
              return;
            }
            _ref = [heap[i_big], heap[i]], heap[i] = _ref[0], heap[i_big] = _ref[1];
            i = i_big;
          }
        };
        return heap_sort(list);
      };

      return Heapsort;

    })(SortingAlgorithm);
    Insertionsort = (function(_super) {
      __extends(Insertionsort, _super);

      Insertionsort.prototype.log = [];

      function Insertionsort(initList) {
        this.log = [initList];
        Insertionsort.__super__.constructor.call(this, initList);
      }

      Insertionsort.prototype.solve = function() {
        var i, j, length, list, temp, _results;
        list = this.initList.slice();
        length = list.length;
        i = -1;
        _results = [];
        while (length--) {
          temp = list[++i];
          j = i;
          while (j-- && list[j] > temp) {
            list[j + 1] = list[j];
          }
          list[j + 1] = temp;
          _results.push(this.log.push(list.slice()));
        }
        return _results;
      };

      return Insertionsort;

    })(SortingAlgorithm);
    Selectionsort = (function(_super) {
      __extends(Selectionsort, _super);

      Selectionsort.prototype.log = [];

      function Selectionsort(initList) {
        this.log = [initList];
        Selectionsort.__super__.constructor.call(this, initList);
      }

      Selectionsort.prototype.solve = function() {
        var i, j, k, list, _i, _j, _ref, _ref1, _ref2, _ref3, _results;
        list = this.initList.slice();
        _results = [];
        for (i = _i = 0, _ref = list.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          k = i;
          for (j = _j = _ref1 = i + 1, _ref2 = list.length - 1; _ref1 <= _ref2 ? _j <= _ref2 : _j >= _ref2; j = _ref1 <= _ref2 ? ++_j : --_j) {
            if (list[j] < list[k]) {
              k = j;
            }
          }
          _ref3 = [list[k], list[i]], list[i] = _ref3[0], list[k] = _ref3[1];
          _results.push(this.log.push(list.slice()));
        }
        return _results;
      };

      return Selectionsort;

    })(SortingAlgorithm);
    SortingView = (function() {
      function SortingView($el) {
        var algorithms, getSelectedAlgorithm, initList, self;
        this.$el = $el;
        this.createHtml();
        initList = SortingAlgorithm.generateList();
        algorithms = {
          bubblesort: new Bubblesort(initList),
          heapsort: new Heapsort(initList),
          insertionsort: new Insertionsort(initList),
          mergesort: new Mergesort(initList),
          quicksort: new Quicksort(initList),
          selectionsort: new Selectionsort(initList)
        };
        getSelectedAlgorithm = function() {
          return $("#algorithm", this.$el).val();
        };
        self = this;
        $("#algorithm", this.$el).on("change", function() {
          return self.render(algorithms[$(this).val()].log);
        });
        $(window).on("resize", function() {
          return self.render(algorithms[getSelectedAlgorithm()].log);
        });
        this.render(algorithms[getSelectedAlgorithm()].log, initList);
      }

      SortingView.prototype.render = function(logs, initList) {
        var display;
        if (logs.length === 0) {
          return;
        }
        display = new SvgDisplay($(".visual", this.$el), logs);
        if (initList != null) {
          $(".facts .init-list span", this.$el).text(initList.join());
        }
        $(".facts .total-steps span", this.$el).text(logs.length);
      };

      SortingView.prototype.createHtml = function() {
        var $controls, $facts;
        $controls = $("<div>").addClass("controls").html("<label for='algorithm'>Algorithm: </label>");
        $controls.append($("<select id='algorithm' name='algorithm'>").append($("<option>").text("bubblesort")).append($("<option>").text("heapsort")).append($("<option>").text("insertionsort")).append($("<option>").text("selectionsort")).append($("<option>").text("quicksort")));
        this.$el.append($controls);
        this.$el.append($("<div class='visual'>"));
        $facts = $("<div class='facts'>");
        $facts.append($("<div class='x-axis'>")).append($("<div>").addClass("x-axis").text("20%")).append($("<div>").addClass("x-axis").text("40%")).append($("<div>").addClass("x-axis").text("60%")).append($("<div>").addClass("x-axis").text("80%")).append($("<div>").addClass("init-list").html("Initial list: <span></span>")).append($("<div>").addClass("total-steps").html("Logged <span></span> steps.")).append($("<div>").addClass("current-array"));
        return this.$el.append($facts);
      };

      return SortingView;

    })();
    CanvasDisplay = (function() {
      var toFullColorHex;

      toFullColorHex = function(hex) {
        return "#11" + hex + hex;
      };

      function CanvasDisplay($el, logs) {
        var $canvas, canvas, context, currentElementIndex, elementIndex, lineDistance, log, logIndex, nextElementIndex, nextLog, stepWidth, _i, _j, _k, _ref, _ref1, _ref2;
        if (!Modernizr.canvas) {
          $el.before($("<p>").text("This feature is only supported on IE 9+, and most alternate browsers (e.g. Chome, Firefox)."));
          return;
        }
        $canvas = $("canvas", $el);
        if ($canvas.length === 0) {
          $canvas = $("<canvas>");
          $el.append($canvas);
        }
        canvas = $canvas[0];
        canvas.width = $el.width();
        canvas.height = $el.height();
        context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        stepWidth = canvas.width / logs.length;
        lineDistance = canvas.height / logs[0].length;
        context.lineWidth = 1;
        for (logIndex = _i = 1, _ref = logs.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; logIndex = 1 <= _ref ? ++_i : --_i) {
          context.beginPath();
          context.strokeStyle = "#eee";
          context.moveTo(logIndex * stepWidth, 0);
          context.lineTo(logIndex * stepWidth, canvas.height);
          context.stroke();
        }
        context.lineWidth = 5;
        for (logIndex = _j = 0, _ref1 = logs.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; logIndex = 0 <= _ref1 ? ++_j : --_j) {
          log = logs[logIndex];
          if (logIndex < logs.length - 1) {
            nextLog = logs[logIndex + 1];
          }
          if (logIndex === logs.length - 1) {
            nextLog = logs[logIndex];
          }
          for (elementIndex = _k = 0, _ref2 = log.length - 1; 0 <= _ref2 ? _k <= _ref2 : _k >= _ref2; elementIndex = 0 <= _ref2 ? ++_k : --_k) {
            currentElementIndex = log.indexOf(elementIndex);
            nextElementIndex = nextLog.indexOf(elementIndex);
            context.beginPath();
            context.strokeStyle = toFullColorHex(Math.floor(elementIndex / log.length * 255).toString(16));
            context.moveTo(logIndex * stepWidth, lineDistance * currentElementIndex + (lineDistance / 2));
            context.lineTo((logIndex + 1) * stepWidth, lineDistance * nextElementIndex + (lineDistance / 2));
            context.stroke();
          }
        }
      }

      return CanvasDisplay;

    })();
    SvgDisplay = (function() {
      var toFullColorHex;

      toFullColorHex = function(hex) {
        return "#11" + hex + hex;
      };

      function SvgDisplay($el, logs) {
        var currentElementIndex, currentIndex, elementIndex, grid, line, lineDistance, lines, log, logIndex, nextElementIndex, nextLog, rect, stepWidth, strokeStyle, svg, svgNS, _i, _j, _k, _ref, _ref1, _ref2;
        if (!Modernizr.svg) {
          $el.before($("<p>").text("This feature is only supported on IE 9+, and most alternate browsers (e.g. Chome, Firefox)."));
          return;
        }
        svgNS = "http://www.w3.org/2000/svg";
        $("svg", $el).remove();
        svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("version", "1.2");
        svg.setAttribute("baseProfile", "tiny");
        svg.setAttribute("style", "width: " + ($el.width()) + "px; height: " + ($el.height()) + "px");
        stepWidth = $el.width() / logs.length;
        lineDistance = $el.height() / logs[0].length;
        grid = document.createElementNS(svgNS, "g");
        for (logIndex = _i = 0, _ref = logs.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; logIndex = 0 <= _ref ? ++_i : --_i) {
          rect = document.createElementNS(svgNS, "rect");
          rect.setAttribute("x", logIndex * stepWidth);
          rect.setAttribute("y", -1);
          rect.setAttribute("width", stepWidth);
          rect.setAttribute("height", $el.height() + 2);
          rect.setAttribute("fill", "white");
          rect.setAttribute("style", "stroke: #eee;");
          currentIndex = logIndex;
          rect.addEventListener("mouseover", (function(index) {
            return function(evt) {
              evt.target.setAttribute("fill", "#f9f9f9");
              return $el.siblings(".facts").find(".current-array").text(logs[index].join());
            };
          })(logIndex));
          rect.addEventListener("mouseout", function(evt) {
            evt.target.setAttribute("fill", "white");
            $el.siblings(".facts").find(".current-array").text("");
          });
          grid.appendChild(rect);
        }
        svg.appendChild(grid);
        lines = document.createElementNS(svgNS, "g");
        for (logIndex = _j = 0, _ref1 = logs.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; logIndex = 0 <= _ref1 ? ++_j : --_j) {
          log = logs[logIndex];
          if (logIndex < logs.length - 1) {
            nextLog = logs[logIndex + 1];
          }
          if (logIndex === logs.length - 1) {
            nextLog = logs[logIndex];
          }
          for (elementIndex = _k = 0, _ref2 = log.length; 0 <= _ref2 ? _k <= _ref2 : _k >= _ref2; elementIndex = 0 <= _ref2 ? ++_k : --_k) {
            currentElementIndex = log.indexOf(elementIndex);
            nextElementIndex = nextLog.indexOf(elementIndex);
            line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", logIndex * stepWidth);
            line.setAttribute("y1", lineDistance * currentElementIndex + (lineDistance / 2));
            line.setAttribute("x2", (logIndex + 1) * stepWidth);
            line.setAttribute("y2", lineDistance * nextElementIndex + (lineDistance / 2));
            strokeStyle = toFullColorHex(Math.floor(elementIndex / log.length * 255).toString(16));
            line.setAttribute("style", "stroke: " + strokeStyle + "; stroke-width: 5;");
            lines.appendChild(line);
          }
        }
        svg.appendChild(lines);
        $el.append(svg);
      }

      return SvgDisplay;

    })();
    return $(function() {
      var view;
      return view = new SortingView($(".sorting"));
    });
  })(jQuery);

}).call(this);

/*
//@ sourceMappingURL=sorting.js.map
*/