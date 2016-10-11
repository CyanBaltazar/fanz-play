$(document).ready(function(){
    // Initial state | Form 3 is hidden
    $("#event-form-3").hide();
    $(".event-next").click(function(){
        $("#event-form-2").hide();
        $("#event-form-3").show();
    });

    $(".draw-radio-button").click(function() {
      $(this).toggleClass('clicked');
    });

    // Megamenu table show and hide
    $(".icon-down").click(
          function() { $('.dropdown-menu', this).stop().fadeIn("slow");
          },
          function() { $('.dropdown-menu', this).stop().fadeOut("slow");
      });

      // When X is clicked, row will de deleted
      $(".icon-delete").click(function() {
        $(".row-option-1").hide();
        $(".row-input-option1").hide();
      });

      // When "Done" button is clicked, modal will close out
      $(".button-done").click(function() {
        $('#myModal').modal('hide');
          $('#myModal').on('hidden', function () {
            // Load up a new modal...
            $('#created-trivia-set').modal('show');
        });
      });

      $(".a-return-edit").click(function() {
        $('#created-trivia-set').modal('hide');
          $('#created-trivia-set').on('hidden', function () {
            // Load up a new modal...
            $('#myModal').modal('show');
        });
      });

      // Megamenu table is initially hidden
      $("#dropdown-menu").hide();

      $(".select-target").click(function() {
        $("#dropdown-menu").fadeToggle();
      });

      $('[data-toggle="tooltip"]').tooltip();
});
