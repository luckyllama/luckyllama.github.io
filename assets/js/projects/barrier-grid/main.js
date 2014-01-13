(function() {
  (function($) {
    var Illusion;
    Illusion = (function() {
      function Illusion($el) {
        var count, width,
          _this = this;
        this.$el = $el;
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        width = 2;
        this.$images = $(".source-image", this.$el);
        count = this.$images.length;
        this.addHtml();
        this.addEvents();
        this.$images.each(function(index, img) {
          return _this.drawImageStripe(img, width, count, index * width);
        });
        this.drawMask(count, width);
        this.$el.css("height", this.$images.height());
      }

      Illusion.prototype.addHtml = function() {
        this.$mask = $("<div>").addClass("mask");
        this.$el.append(this.$mask);
        this.$forward = $("<span>").text("play").append($("<i>").addClass("icon icon-double-angle-right"));
        this.$backward = $("<span>").addClass("icon icon-double-angle-left");
        this.$hideMask = $("<span>").addClass("show-base").text("hide mask").prepend($("<i>").addClass("icon icon-square"));
        this.$showHalfMask = $("<span>").addClass("show-base half").text("hide half mask").prepend($("<i>").addClass("icon icon-columns"));
        this.$dragHint = $("<div>").addClass("drag-hint").text("drag to animate").prepend($("<i>").addClass("icon icon-arrow-h"));
        return $("<div>").addClass("controls").append($("<div>").addClass("automate").append(this.$backward).append(this.$forward)).append($("<div>").addClass("mask-controls").append(this.$hideMask).append(this.$showHalfMask)).append(this.$dragHint).appendTo(this.$el);
      };

      Illusion.prototype.addEvents = function() {
        var _this = this;
        this.$forward.on("click", function() {
          _this.$mask.show().removeClass("backward").toggleClass("forward");
          _this.$forward.toggleClass("active", _this.$mask.is(".forward"));
          return _this.$backward.toggleClass("active", _this.$mask.is(".backward"));
        });
        this.$backward.on("click", function() {
          _this.$mask.show().removeClass("forward").toggleClass("backward");
          _this.$forward.toggleClass("active", _this.$mask.is(".forward"));
          return _this.$backward.toggleClass("active", _this.$mask.is(".backward"));
        });
        this.$hideMask.on("click", function() {
          _this.$hideMask.toggleClass("active");
          return _this.$mask.toggle(_this.$hideMask.is(".active"));
        });
        this.$showHalfMask.on("click", function() {
          _this.$showHalfMask.toggleClass("active");
          return _this.$mask.toggleClass("half", _this.$showHalfMask.is(".active"));
        });
        this.$mask.on("mousedown", function(e) {
          var x;
          x = e.pageX;
          e.preventDefault();
          _this.$dragHint.addClass("hide");
          return _this.$mask.on("mousemove", function(e) {
            var currentX, deltaX;
            e.preventDefault();
            currentX = parseInt(_this.$mask.css("background-position-x"));
            deltaX = Math.max(Math.min(x - e.pageX, 1), -1);
            _this.$mask.css("background-position-x", "" + (currentX - deltaX) + "px");
            return x = e.pageX;
          });
        });
        return $(document).on("mouseup", function() {
          _this.$mask.off("mousemove");
          return _this.$dragHint.removeClass("hide");
        });
      };

      Illusion.prototype.drawStripeMask = function(width, space, offset) {
        var count, index, x, _i, _results;
        this.context.fillStyle = "#000000";
        count = this.canvas.width / (width + space);
        _results = [];
        for (index = _i = 0; 0 <= count ? _i <= count : _i >= count; index = 0 <= count ? ++_i : --_i) {
          x = offset + (index * (width + space));
          _results.push(this.context.fillRect(x, 0, width, this.canvas.height));
        }
        return _results;
      };

      Illusion.prototype.drawImageStripe = function(image, stripeWidth, stripeCount, stripeOffset) {
        this.canvas.width = image.width;
        this.canvas.height = image.height;
        this.drawStripeMask(stripeWidth, (stripeCount - 1) * stripeWidth, stripeOffset);
        this.context.globalCompositeOperation = "source-atop";
        this.context.drawImage(image, 0, 0);
        return image.src = this.canvas.toDataURL();
      };

      Illusion.prototype.drawMask = function(stripeCount, stripeWidth) {
        this.canvas.width = stripeCount * stripeWidth;
        this.canvas.height = 1;
        this.drawStripeMask((stripeCount * stripeWidth) - stripeWidth, stripeWidth, 1);
        return this.$mask.css("background-image", "url(" + (this.canvas.toDataURL()) + ")");
      };

      return Illusion;

    })();
    return $(".barrier-grid").each(function(index, el) {
      return new Illusion($(el));
    });
  })(jQuery);

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/