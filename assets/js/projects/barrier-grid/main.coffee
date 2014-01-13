(($) ->

	class Illusion
		constructor: (@$el) ->
			@canvas = document.createElement("canvas")
			@context = @canvas.getContext("2d")

			width = 2;
			@$images = $(".source-image", @$el)
			count = @$images.length

			@addHtml()
			@addEvents()

			@$images.each((index, img) => @drawImageStripe(img, width, count, index * width))

			@drawMask(count, width)

			@$el.css("height", @$images.height())

		addHtml: () ->
			@$mask = $("<div>").addClass("mask")
			@$el.append(@$mask)
			@$forward = $("<span>").text("play").append(
				$("<i>").addClass("icon icon-double-angle-right")
			)
			@$backward = $("<span>").addClass("icon icon-double-angle-left")
			@$hideMask = $("<span>").addClass("show-base").text("hide mask").prepend(
				$("<i>").addClass("icon icon-square")
			)
			@$showHalfMask = $("<span>").addClass("show-base half").text("hide half mask").prepend(
				$("<i>").addClass("icon icon-columns")
			)
			@$dragHint = $("<div>").addClass("drag-hint").text("drag to animate").prepend(
				$("<i>").addClass("icon icon-arrow-h")
			)
			$("<div>").addClass("controls")
				.append(
					$("<div>").addClass("automate")
						.append(@$backward)
						.append(@$forward)
				)
				.append(
					$("<div>").addClass("mask-controls")
						.append(@$hideMask)
						.append(@$showHalfMask)
				)
				.append(@$dragHint)
				.appendTo(@$el)
		
		addEvents: () ->
			@$forward.on "click", () => 
				@$mask.show().removeClass("backward").toggleClass("forward")
				@$forward.toggleClass("active", @$mask.is(".forward"))
				@$backward.toggleClass("active", @$mask.is(".backward"))

			@$backward.on "click", () => 
				@$mask.show().removeClass("forward").toggleClass("backward")
				@$forward.toggleClass("active", @$mask.is(".forward"))
				@$backward.toggleClass("active", @$mask.is(".backward"))

			@$hideMask.on "click", () => 
				@$hideMask.toggleClass("active")
				@$mask.toggle(@$hideMask.is(".active"))

			@$showHalfMask.on "click", () =>
				@$showHalfMask.toggleClass("active")
				@$mask.toggleClass("half", @$showHalfMask.is(".active"))

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