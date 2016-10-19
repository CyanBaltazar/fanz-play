$(document).ready(function() {
  // Change active status (Navigation)
  $('ul li a').click(function () {
    $('li a').removeClass("active");
    $(this).addClass("active");
  });
  // Change the icon from right icon to down icon in mobile nav menu
  $(".glyphicon-chevron-right").click(function () {
    $(this).toggleClass("glyphicon-chevron-down");
  });

});
