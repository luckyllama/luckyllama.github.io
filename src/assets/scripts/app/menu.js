(function ($) {
   "use strict";

   $("body > header .menu").on("click", function (event) {
      event.preventDefault();
      $("body").toggleClass("menu-open");
   });

   var getContent = function (url) {
      if (url === "" || url === "/") {
         url = "/index.html";
      }
      $.ajax({ url: url.replace("html", "json.js"), dataType: "json" })
         .success(function (data) {
            if (!data || !data.content) { window.location.href = url; }
            $("main").html(data.content);
            window.history.pushState({ url: url }, data.title, url);
            document.title = data.title;
         })
         .error(function () { window.location.href = url; });
   };

   if (window.history.pushState) {
      $(document).on("click", "a", function (event) {
         var url = $(event.currentTarget).attr("href");
         if (url.indexOf("http") < 0) {
            getContent(url);
         }
         event.preventDefault();
      });
      $(window).on("popstate", function (event) {
         var url = window.location.pathname;
         if (event.originalEvent.state && event.originalEvent.state.url) {
            url = event.originalEvent.state.url;
         }
         getContent(url);
      });
   }
})(window.jQuery);
