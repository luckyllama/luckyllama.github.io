(function ($) {
   "use strict";

   $("body > header .menu").on("click", function (event) {
      event.preventDefault();
      $("body").toggleClass("menu-open");
   });
   
})(window.jQuery);
