$(document).ready(function(){
    // Initial state | Form 3 is hidden
    $("#event-form-3").hide();
    $(".event-next").click(function(){
        $("#event-form-2").hide();
        $("#event-form-3").show();
    });
});
