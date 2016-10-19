var count=11;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count < 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     document.getElementById("clockdiv").innerHTML="Time's up!!";
     document.getElementById("clockdiv").style.border = "3px solid #c30c15";

     return;
  }
  // Show time in html view
   document.getElementById("clockdiv").innerHTML=count;
}
