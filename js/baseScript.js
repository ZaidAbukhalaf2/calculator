$(document).ready(function() {
  "use strict";
  $("body").bind("touchmove", function(e) {
    e.preventDefault();
  });
  $(".wrapper").swipe({
    swipe: function(event, direction, distance, duration, fingerCount) {
      console.log(direction);
      if (
        !$(event.target).hasClass("dragable_icon") &&
        !$(event.target).hasClass("ui-draggable") &&
        !$(event.target).hasClass("noSwipe")
      ) {
        if (direction == "left") {
          $("*").css("transform", "none");
//          document.location =
//            "veeva:gotoSlide(GB_FOR_CKD_Summary.zip,FOR_NEPH_Z4_47242)";
        } else if (direction == "right") {
          $("*").css("transform", "none");
//          document.location =
//            "veeva:gotoSlide(GB_FOR_DAPA_Summary.zip,FOR_NEPH_Z4_47242)";
        }
      }
    }
  });
});
