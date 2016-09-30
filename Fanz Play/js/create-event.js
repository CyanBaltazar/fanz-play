$(document).ready(function(){
    // Initial state | Form 3 is hidden
    $("#event-form-3").hide();
    $(".event-next").click(function(){
        $("#event-form-2").hide();
        $("#event-form-3").show();
    });
});


$(document).ready(function() {
  $(".icon-down").click(
        function() { $('.dropdown-menu', this).stop().fadeIn("slow");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("slow");
    });
});

$(document).ready(function() {
  $(".draw-radio-button").click(function() {
    $(this).toggleClass('clicked');

  });
});
