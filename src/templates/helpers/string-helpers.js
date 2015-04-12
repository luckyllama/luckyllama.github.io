module.exports.register = function (Handlebars, options) {
	"use strict";

	Handlebars.registerHelper("articleUrl", function (url) {
		if (url && typeof url === "string") {
			return url.replace("build/", "").replace("/index.html", "");
		} else {
			return url;
		}
	});
};
