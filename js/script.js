/*
 * NOTE: DO NOT CHANGE THE TEMPLATE!!!!!!!!!!!!!!NOTE: DO NOT CHANGE THE TEMPLATE!!!!!!!!!!!!!!NOTE: DO NOT CHANGE THE TEMPLATE!!!!!!!!!!!!!!!!!!!
 */

$(document).ready(function () {
  "use strict";
  setTimeout(function () {
    $("#wrapperImg").css("visibility", "hidden");
  }, 500);
  setTimeout(function () {
    $(".wrapper").css("visibility", "visible");
  }, 400);


  $("#infoBtn").bind("tap", function () {
    $("#info_wrapper, #info_overlay").css("visibility", "visible");
  });
	
  $("#close_info").bind("tap", function () {
    $("#info_wrapper, #info_overlay").css("visibility", "hidden");
  });
	// global link
  $(".globalclick").bind("tap", function() {
    window.location.href = $(this).attr("goto");
  });

});
