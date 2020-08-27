(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 300) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }
    });
  });
})(jQuery);
