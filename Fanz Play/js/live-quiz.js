var count=5;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count < 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     document.getElementById("clockdiv").innerHTML="Time's up!";



     // Getting the value of the correct answer and showing it to HTML view

     var quiz_result = function () {
       // Hide all wrong answers except for the right one
       document.getElementsByClassName("btn-group")[0].style.visibility="hidden";
       document.getElementsByClassName("btn-group")[2].style.visibility="hidden";
       document.getElementsByClassName("btn-group")[3].style.visibility="hidden";
       document.getElementById("q-a").innerHTML="You got it! Score 1 for your team.";
       setInterval(function () {
         document.getElementsByClassName("btn-group")[1].style.visibility="hidden";
         document.getElementById("q-a").style.visibility="hidden";

       }, 2000);

      //  document.getElementById("q-a").style.visibility="visible";
      //  document.getElementById("q-a").innerHTML="Next round!";

       //
      //  setInterval(function () {
      //    document.getElementById("q-a").style.visibility="visible";
      //  }, 3000).clearInterval(this);
       //
       //
       //
      //  setInterval(function () {
      //    document.getElementById("q-a").innerHTML="Next round!";
      //  }, 2000);





     }

     setInterval(quiz_result, 1000);








     // Hide all buttons to make way for displaying the answer
    //  var buttons = document.getElementsByClassName("button-quiz-style");
    //  for(var x=0;x < buttons.length; x++) {
    //    buttons[x].style.visibility="hidden";
    //  }

     return;
  }
  // Show time / countdown in html view
   document.getElementById("clockdiv").innerHTML=":" + count;
}

function changeState()
{
  document.getElementById("")
}
