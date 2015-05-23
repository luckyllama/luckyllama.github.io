///ts:ref=lodash
/// <reference path="../../vendor/lodash.d.ts"/> ///ts:ref:generated
///ts:ref=jquery
/// <reference path="../../vendor/jquery.d.ts"/> ///ts:ref:generated
///ts:ref=d3
/// <reference path="../../vendor/d3.d.ts"/> ///ts:ref:generated
///ts:ref=modernizr
/// <reference path="../../vendor/modernizr.d.ts"/> ///ts:ref:generated

module Sorting {
	export class Algorithm {
		initList: number[];
		log: number[][];
		constructor(initList: number[]) {
			this.log = [initList]
			this.initList = initList.slice();
			this.solve();
		}
		solve() { /* defined in implementing class */ }
		static generateList(max: number = 15) : number[] {
			return <number[]>_.shuffle(_.range(1, max + 1));
		}
		swap(list, i, j) {
			if (i === j) return;
			var tmp = list[i];
			list[i] = list[j];
			list[j] = tmp;
		}
	}

	export class Bubblesort extends Algorithm {
		solve() {
			var list: number[] = this.initList.slice();
			var bound: number = list.length - 1;
			while (true) {
				var t: number = 0;
				for (var i = 0; i < bound; i++) {
					if (list[i] > list[i+1]) {
						this.swap(list, i, i+1);
						this.log.push(list.slice());
						t = i;
					}
				}
				if (t === 0) {
					break;
				}
				bound = t;
			}
		}
	}

	export class Quicksort extends Algorithm {
		solve() {
			var list: number[] = this.initList.slice();
			var swap = (i, j) => {
				this.swap(list, i, j);
				this.log.push(list.slice());
			}

			var divide = (v, start, end) => {
				var first_big = start;
				var j = start;
				while (j <= end) {
					if (list[j] < v) {
						swap(first_big, j);
						first_big++;
					}
					j++;
				}
				return first_big;
			}

			var partition = (start, end) => {
				var v = list[end];
				var first_big = divide(v, start, end-1);
				swap(first_big, end);
				return first_big;
			}

			var sort = (start, end) => {
				if (start >= end) return;
				var m = partition(start, end);
				sort(start, m-1);
				sort(m+1, end);
			}

			sort(0, list.length - 1);
		}
	}

	export class Heapsort extends Algorithm {
		solve() {
			var list: number[] = this.initList.slice();
			var heap_sort = (list) => {
				put_array_in_heap_order(list);
				var end: number = list.length - 1;
				while (end > 0) {
					this.swap(list, 0, end);
					this.log.push(list.slice());
					sift_element_down_heap(list, 0, end);
					end--;
				}
			};

			var put_array_in_heap_order = (list) => {
				var i: number = Math.floor(list.length / 2 - 1);
				while (i >= 0) {
					sift_element_down_heap(list, i, list.length)
					i--;
				}
			}

			var sift_element_down_heap = (heap, i, max) => {
				while (i < max) {
					var i_big = i;
					var c1 = 2*i + 1;
					var c2 = c1 + 1;
					if (c1 < max && heap[c1] > heap[i_big]) {
						i_big = c1;
					}
					if (c2 < max && heap[c2] > heap[i_big]) {
						i_big = c2;
					}
					if (i_big === i) {
						return;
					}
					this.swap(heap, i, i_big);
					i = i_big;
				}
			}

			heap_sort(list);
		}
	}

	export class Insertionsort extends Algorithm {
		solve() {
			var list: number[] = this.initList.slice();
			var length: number = list.length;
			var i: number = -1;
			while (length--) {
				var tmp = list[++i];
				var j = i;
				while (j-- && list[j] > tmp) {
					list[j+1] = list[j];
				}
				list[j+1] = tmp;
				this.log.push(list.slice());
			}
		}
	}

	export class Selectionsort extends Algorithm {
		solve() {
			var list: number[] = this.initList.slice();
			var count: number = list.length - 1;
			for (var i = 0; i < count; i++) {
				var k = i;
				for (var j = i+1; j < count; j++) {
					if (list[j] < list[k]) {
						k = j;
					}
				}
				this.swap(list, i, k);
				this.log.push(list.slice());
			}
		}
	}
}

class SortingView {
	constructor(public $el, public display) {
		this.createHtml();
		var initList = Sorting.Algorithm.generateList();
		var algorithms = {
			bubblesort: new Sorting.Bubblesort(initList),
			heapsort: new Sorting.Heapsort(initList),
			insertionsort: new Sorting.Insertionsort(initList),
			quicksort: new Sorting.Quicksort(initList),
			selectionsort: new Sorting.Selectionsort(initList)
		};
		var getSelectedAlgorithm = function() {
			return $("#algorithm", this.$el).val();
		};
		var self = this;
		$("#algorithm", this.$el).on("change", function() {
			return self.render(algorithms[$(this).val()].log);
		});
		$(window).on("resize", function() {
			return self.render(algorithms[getSelectedAlgorithm()].log);
		});
		this.render(algorithms[getSelectedAlgorithm()].log, initList);
	}

	render(logs: number[][], initList: number[] = null) {
		if (logs.length === 0) {
			return;
		}
		var display = new this.display($(".visual", this.$el), logs);
		if (initList != null) {
			$(".facts .init-list span", this.$el).text(initList.join());
		}
		$(".facts .total-steps span", this.$el).text(logs.length);
	}

	createHtml() {
		var $controls = $("<div>").addClass("controls")
			.html("<label for='algorithm'>Algorithm: </label>")
			.append($("<select id='algorithm' name='algorithm'>")
			.append($("<option>").text("bubblesort"))
			.append($("<option>").text("heapsort"))
			.append($("<option>").text("insertionsort"))
			.append($("<option>").text("selectionsort"))
			.append($("<option>").text("quicksort")));
		this.$el.append($controls);
		this.$el.append($("<div class='visual'>"));
		var $facts = $("<div class='facts'>")
			.append($("<div class='x-axis'>"))
			.append($("<div>").addClass("x-axis").text("20%"))
			.append($("<div>").addClass("x-axis").text("40%"))
			.append($("<div>").addClass("x-axis").text("60%"))
			.append($("<div>").addClass("x-axis").text("80%"))
			.append($("<div>").addClass("init-list").html("Initial list: <span></span>"))
			.append($("<div>").addClass("total-steps").html("Logged <span></span> steps."))
			.append($("<div>").addClass("current-array"));
		return this.$el.append($facts);
	}
}

class Display {
	constructor() {}
}

class SvgDisplay implements Display {
	constructor(public $el, logs) {
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
				strokeStyle = this.toFullColorHex(Math.floor(elementIndex / log.length * 255).toString(16));
				line.setAttribute("style", "stroke: " + strokeStyle + "; stroke-width: 5;");
				lines.appendChild(line);
			}
		}
		svg.appendChild(lines);
		$el.append(svg);
	}

	private toFullColorHex(hex) {
		return "#11" + hex + hex;
	}
}

interface ItemData {
	name: string;
	positions: number[];
}

class D3Display implements Display {
	data: ItemData[];
	stepCount: number;
	stepWidth: number;
	itemCount: number;
	itemHeight: number;
	svg: any;
	itemLine: any;
	itemWidth: number = 4;
	x: any;
	y: any;
	strokeSize: number = 4;
	$currentArray: JQuery;

	constructor(public $el, public logs: number[][]) {
		this.data = this._getItemData(logs);
		this.stepCount = logs.length;
		this.stepWidth = $el.width() / this.stepCount;
		this.itemCount = logs[0].length;
		this.itemHeight = $el.height() / this.itemCount;
		this.$currentArray = $(".current-array");

		$("svg", $el).remove();

		this.svg = d3.select($el[0]).append("svg")
			.attr("height", $el.height())
			.attr("width", $el.width());

		this._setupItemLine();
		this._setStepAreas();
		this._setItemData();
		//this._setStepPoints();
	}

	_setupItemLine() {
		this.x = d3.scale.linear()
			.domain([0, this.stepCount])
			.range([0, this.$el.width()]);

		this.y = d3.scale.linear()
			.domain([0, this.itemCount])
			.range([0, this.$el.height()]);

		this.itemLine = d3.svg.line()
			.interpolate("cardinal").tension(.99)
			.x((d, i) => this.x(i))
			.y(d => this.y(d));
	}

	_setItemData() {
		var baseColor = d3.rgb("#b3dcee");
		var colorDelta = 1 / this.itemCount * 3;

		var yOffset = (this.itemHeight / 2) - (this.itemWidth / 2);
		var items = this.svg.append("g")
			.attr("class", "items")
			.attr("transform", "translate(0," + yOffset + ")");

		var item = items.selectAll(".item")
			.data(this.data)
			.enter().append("g")
			.attr("class", "item");

		item.append("path")
			.attr("d", d => this.itemLine(d.positions))
			.style("stroke", d => baseColor.darker(colorDelta * parseInt(d.name)));
	}

	_setStepAreas() {
		var baseColor = d3.rgb("#11ffff");
		var colorDelta = 1 / this.itemCount * 3;

		var yOffset = (this.itemHeight / 2) - (this.itemWidth / 2);
		var steps = this.svg.append("g")
			.attr("class", "step-areas");

		var step = steps.selectAll(".step")
			.data(this.logs)
			.enter().append("g")
			.attr("class", "step")
			.attr("data-value", d => d.join(", ")) ;

		step.append("rect")
			.attr("class", "step-area")
			.attr("x", (d, i) => this.x(i))
			.attr("y", -1)
			.attr("width", this.stepWidth)
			.attr("height", this.$el.height() + 2);

      this.svg.on("mousemove", () => {
			var x = Math.floor(this.x.invert(d3.mouse(this.svg.node())[0]));
			step.classed("active", (d, i) => i === x);
			var value = step.filter(":nth-child(" + (x + 1) + ")").attr("data-value")
			this.$currentArray.text("Step " + (x + 1) + ": " + value);
		});
		this.svg.on("mouseout", () => {
			step.classed("active", false);
			this.$currentArray.text("");
		});
	}

	_setStepPoints() {
		var baseColor = d3.rgb("#11ffff");
		var colorDelta = 1 / this.itemCount * 3;

		var yOffset = (this.itemHeight / 2) - (this.itemWidth / 2);
		var pointGroup = this.svg.append("g")
			.attr("class", "step-points");

		var points = pointGroup.selectAll(".step")
			.data(this.logs)
			.enter().append("g")
			.attr("class", "points");

		var createCircles = (el, d, i) => {
			if (i === 1) {
				console.log(el, d, i)
			}
			el.selectAll(".point")
			 	.data(d)
			 	.enter().append("circle")
				.attr("cx", (d) => this.x(i))
				.attr("cy", (d, i) => this.y(i) + (this.itemHeight / 2) - (this.strokeSize / 2))
				.attr("r", 4)
				.attr("data-value", d => d)
				.attr("fill", d => baseColor.darker(colorDelta * d));
		};
		points.each(function (d, i) {
			createCircles(d3.select(this), d, i);
		});
	}

	_getItemData(logs: number[][]) {
		var data: ItemData[] = [];
		_.each(logs, (log: number[]) => {
			_.each(log, (num: number, i) => {
				num--; // make it '0' indexed
				if (!data[num]) {
					data[num] = { name: "" + num, positions: [i] };
				}
				data[num].positions.push(i);
			});
		});
		_.each(data, d => d.positions.push(d.positions[d.positions.length - 1]));
		return data;
	}
}

$(() => {
	var view = new SortingView($(".sorting"), D3Display);
});
