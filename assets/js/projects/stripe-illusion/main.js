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
        this.drawMask(500, 500, count, width);
      }

      Illusion.prototype.addHtml = function() {
        this.$mask = $("<div>").addClass("mask");
        this.$el.append(this.$mask);
        this.$forward = $("<span>").addClass("icon icon-forward");
        this.$backward = $("<span>").addClass("icon icon-backward");
        return $("<div>").addClass("controls").append(this.$backward).append($("<span>").addClass("label").text("automate")).append(this.$forward).appendTo(this.$el);
      };

      Illusion.prototype.addEvents = function() {
        var _this = this;
        this.$forward.on("click", function() {
          _this.$mask.removeClass("backward").toggleClass("forward");
          _this.$forward.toggleClass("active", _this.$mask.is(".forward"));
          return _this.$backward.toggleClass("active", _this.$mask.is(".backward"));
        });
        return this.$backward.on("click", function() {
          _this.$mask.removeClass("forward").toggleClass("backward");
          _this.$forward.toggleClass("active", _this.$mask.is(".forward"));
          return _this.$backward.toggleClass("active", _this.$mask.is(".backward"));
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

      Illusion.prototype.drawMask = function(width, height, stripeCount, stripeWidth) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.drawStripeMask((stripeCount * stripeWidth) - stripeWidth, stripeWidth, 1);
        return this.$mask.css("background-image", "url(" + (this.canvas.toDataURL()) + ")");
      };

      return Illusion;

    })();
    return $(".stripe-illusion").each(function(index, el) {
      return new Illusion($(el));
    });
  })(jQuery);

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/