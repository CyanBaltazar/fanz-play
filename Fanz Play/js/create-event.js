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

$(document).ready(function() {
  $(".icon-delete").click(function() {
    $(".row-option-1").hide();
    $(".row-input-option1").hide();
  });
});

$(document).ready(function() {
  $(".button-done").click(function() {
    $('#myModal').modal('hide');
      $('#myModal').on('hidden', function () {
        // Load up a new modal...
        $('#created-trivia-set').modal('show');
    });
  });
});

$(document).ready(function() {
  $(".a-return-edit").click(function() {
    $('#created-trivia-set').modal('hide');
      $('#created-trivia-set').on('hidden', function () {
        // Load up a new modal...
        $('#myModal').modal('show');
    });
  });
});
