(($) ->

	class Illusion
		constructor: (@$el) ->
			@canvas = document.createElement("canvas")
			@context = @canvas.getContext("2d")

			width = @$el.data("width") || 2;
			@$images = $(".source-image", @$el)
			count = @$images.length

			@forwardClass = "forward #{@$el.data("playModifier") || ''}"
			@backwardClass = "backward #{@$el.data("playModifier") || ''}"

			@addHtml()
			@addEvents()

			@$images.each((index, img) => @drawImageStripe(img, width, count, index * width))

			@drawMask(count, width)

			@$el.css("height", @$images.height())

		addHtml: () ->
			@$mask = $("<div>").addClass("mask")
			@$el.append(@$mask)
			@$forward = $("<span>").text("play").append(
				$("<i>").addClass("fa fa-angle-double-right")
			)
			@$backward = $("<span>").addClass("fa fa-angle-double-left")
			@$hideMaskButton = $("<span>").addClass("show-base").text("hide mask").prepend(
				$("<i>").addClass("fa fa-square")
			)
			@$halfMaskButton = $("<span>").addClass("show-base half").text("hide half mask").prepend(
				$("<i>").addClass("fa fa-columns")
			)
			@$dragHint = $("<div>").addClass("drag-hint").text("drag to animate").prepend(
				$("<i>").addClass("fa fa-arrow-h")
			)
			$("<div>").addClass("controls")
				.append(
					$("<div>").addClass("automate")
						.append(@$backward)
						.append(@$forward)
				)
				.append(
					$("<div>").addClass("mask-controls")
						.append(@$hideMaskButton)
						.append(@$halfMaskButton)
				)
				.append(@$dragHint)
				.appendTo(@$el)

		addEvents: () ->
			@$forward.on "click", () =>
				@$mask.show().removeClass(@backwardClass).toggleClass(@forwardClass)
				@$forward.toggleClass("active", @$mask.is(".forward"))
				@$backward.toggleClass("active", @$mask.is(".backward"))

			@$backward.on "click", () =>
				@$mask.show().removeClass(@forwardClass).toggleClass(@backwardClass)
				@$forward.toggleClass("active", @$mask.is(".forward"))
				@$backward.toggleClass("active", @$mask.is(".backward"))

			@$hideMaskButton.on "click", () =>
				@$hideMaskButton.toggleClass("active")
				@$halfMaskButton.removeClass("active")
				@$mask.toggle(!@$hideMaskButton.is(".active"))
				@$mask.toggleClass("half", @$halfMaskButton.is(".active"))

			@$halfMaskButton.on "click", () =>
				@$halfMaskButton.toggleClass("active")
				@$hideMaskButton.removeClass("active")
				@$mask.toggle(!@$hideMaskButton.is(".active"))
				@$mask.toggleClass("half", @$halfMaskButton.is(".active"))

			@$mask.on "mousedown", (e) =>
				x = e.pageX
				e.preventDefault()
				@$dragHint.addClass("hide")
				@$mask.on "mousemove", (e) =>
					e.preventDefault()
					currentX = parseInt @$mask.css("background-position-x")
					deltaX = Math.max(Math.min(x - e.pageX, 1), -1)
					@$mask.css("background-position-x", "#{currentX - deltaX}px")
					x = e.pageX

			$(document).on "mouseup", () =>
				@$mask.off("mousemove")
				@$dragHint.removeClass("hide")

		drawStripeMask: (width, space, offset) ->
			@context.fillStyle = "#000000"
			count = @canvas.width / (width + space)
			for index in [0..count]
				x = offset + (index * (width + space))
				@context.fillRect(x, 0, width, @canvas.height)

		drawImageStripe: (image, stripeWidth, stripeCount, stripeOffset) ->
			@canvas.width  = image.width;
			@canvas.height = image.height;

			@drawStripeMask stripeWidth, (stripeCount - 1) * stripeWidth, stripeOffset
			@context.globalCompositeOperation = "source-atop"

			@context.drawImage(image, 0, 0)

			image.src = @canvas.toDataURL()

		drawMask: (stripeCount, stripeWidth) ->
			@canvas.width  = stripeCount * stripeWidth;
			@canvas.height = 1;

			@drawStripeMask((stripeCount * stripeWidth) - stripeWidth, stripeWidth, 1)

			@$mask.css("background-image", "url(#{@canvas.toDataURL()})")

	$(window).on("load", ->
		$(".barrier-grid").each((index, el) ->
			new Illusion($(el))
		)
	)

)(jQuery)