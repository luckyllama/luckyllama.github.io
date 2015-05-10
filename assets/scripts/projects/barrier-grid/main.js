(function() {
  (function($) {
    var Illusion;
    Illusion = (function() {
      function Illusion($el) {
        var count, width;
        this.$el = $el;
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        width = this.$el.data("width") || 2;
        this.$images = $(".source-image", this.$el);
        count = this.$images.length;
        this.forwardClass = "forward " + (this.$el.data("playModifier") || '');
        this.backwardClass = "backward " + (this.$el.data("playModifier") || '');
        this.addHtml();
        this.addEvents();
        this.$images.each((function(_this) {
          return function(index, img) {
            return _this.drawImageStripe(img, width, count, index * width);
          };
        })(this));
        this.drawMask(count, width);
        this.$el.css("height", this.$images.height());
      }

      Illusion.prototype.addHtml = function() {
        this.$mask = $("<div>").addClass("mask");
        this.$el.append(this.$mask);
        this.$forward = $("<span>").text("play").append($("<i>").addClass("fa fa-angle-double-right"));
        this.$backward = $("<span>").addClass("fa fa-angle-double-left");
        this.$hideMaskButton = $("<span>").addClass("show-base").text("hide mask").prepend($("<i>").addClass("fa fa-square"));
        this.$halfMaskButton = $("<span>").addClass("show-base half").text("hide half mask").prepend($("<i>").addClass("fa fa-columns"));
        this.$dragHint = $("<div>").addClass("drag-hint").text("drag to animate").prepend($("<i>").addClass("fa fa-arrow-h"));
        return $("<div>").addClass("controls").append($("<div>").addClass("automate").append(this.$backward).append(this.$forward)).append($("<div>").addClass("mask-controls").append(this.$hideMaskButton).append(this.$halfMaskButton)).append(this.$dragHint).appendTo(this.$el);
      };

      Illusion.prototype.addEvents = function() {
        this.$forward.on("click", (function(_this) {
          return function() {
            _this.$mask.show().removeClass(_this.backwardClass).toggleClass(_this.forwardClass);
            _this.$forward.toggleClass("active", _this.$mask.is(".forward"));
            return _this.$backward.toggleClass("active", _this.$mask.is(".backward"));
          };
        })(this));
        this.$backward.on("click", (function(_this) {
          return function() {
            _this.$mask.show().removeClass(_this.forwardClass).toggleClass(_this.backwardClass);
            _this.$forward.toggleClass("active", _this.$mask.is(".forward"));
            return _this.$backward.toggleClass("active", _this.$mask.is(".backward"));
          };
        })(this));
        this.$hideMaskButton.on("click", (function(_this) {
          return function() {
            _this.$hideMaskButton.toggleClass("active");
            _this.$halfMaskButton.removeClass("active");
            _this.$mask.toggle(!_this.$hideMaskButton.is(".active"));
            return _this.$mask.toggleClass("half", _this.$halfMaskButton.is(".active"));
          };
        })(this));
        this.$halfMaskButton.on("click", (function(_this) {
          return function() {
            _this.$halfMaskButton.toggleClass("active");
            _this.$hideMaskButton.removeClass("active");
            _this.$mask.toggle(!_this.$hideMaskButton.is(".active"));
            return _this.$mask.toggleClass("half", _this.$halfMaskButton.is(".active"));
          };
        })(this));
        this.$mask.on("mousedown", (function(_this) {
          return function(e) {
            var x;
            x = e.pageX;
            e.preventDefault();
            _this.$dragHint.addClass("hide");
            return _this.$mask.on("mousemove", function(e) {
              var currentX, deltaX;
              e.preventDefault();
              currentX = parseInt(_this.$mask.css("background-position-x"));
              deltaX = Math.max(Math.min(x - e.pageX, 1), -1);
              _this.$mask.css("background-position-x", (currentX - deltaX) + "px");
              return x = e.pageX;
            });
          };
        })(this));
        return $(document).on("mouseup", (function(_this) {
          return function() {
            _this.$mask.off("mousemove");
            return _this.$dragHint.removeClass("hide");
          };
        })(this));
      };

      Illusion.prototype.drawStripeMask = function(width, space, offset) {
        var count, i, index, ref, results, x;
        this.context.fillStyle = "#000000";
        count = this.canvas.width / (width + space);
        results = [];
        for (index = i = 0, ref = count; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
          x = offset + (index * (width + space));
          results.push(this.context.fillRect(x, 0, width, this.canvas.height));
        }
        return results;
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
    return $(window).on("load", function() {
      return $(".barrier-grid").each(function(index, el) {
        return new Illusion($(el));
      });
    });
  })(jQuery);

}).call(this);
