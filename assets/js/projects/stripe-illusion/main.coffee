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

			@drawMask(500, 500, count, width)

		addHtml: () ->
			@$mask = $("<div>").addClass("mask")
			@$el.append(@$mask)
			@$forward = $("<span>").addClass("icon icon-forward")
			@$backward = $("<span>").addClass("icon icon-backward")
			$("<div>").addClass("controls")
				.append(@$backward)
				.append($("<span>").addClass("label").text("automate"))
				.append(@$forward)
				.appendTo(@$el)
		
		addEvents: () ->
			@$forward.on("click", () => 
				@$mask.removeClass("backward").toggleClass("forward")
				@$forward.toggleClass("active", @$mask.is(".forward"))
				@$backward.toggleClass("active", @$mask.is(".backward"))
			)
			@$backward.on("click", () => 
				@$mask.removeClass("forward").toggleClass("backward")
				@$forward.toggleClass("active", @$mask.is(".forward"))
				@$backward.toggleClass("active", @$mask.is(".backward"))
			)

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

		drawMask: (width, height, stripeCount, stripeWidth) ->
			@canvas.width  = width;
			@canvas.height = height;

			@drawStripeMask((stripeCount * stripeWidth) - stripeWidth, stripeWidth, 1)

			@$mask.css("background-image", "url(#{@canvas.toDataURL()})")

	$(".stripe-illusion").each((index, el) -> 
		new Illusion($(el))
	)

)(jQuery)