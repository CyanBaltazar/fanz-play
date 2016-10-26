var startCounter = 31;
var questionCounter = 42;

document.getElementById("quiz-parent-buttons").style.visibility="hidden";

/* The countdown during the game */
var questionCountdown = setInterval(function() {
  questionCounter--;
  console.log(questionCounter);
  document.getElementById("q-a").innerHTML="Are you ready to play?!";
  if (questionCounter < 11) {
    if (questionCounter < 4) {
      if (questionCounter === 0) {

        var q_interval_1 = setInterval(function () {
          document.getElementById("clockdiv").innerHTML="Time's Up!";
          clearInterval(q_interval_1);
        }, 1000);

        var q_interval_2 = setInterval(function () {
          document.getElementsByClassName("btn-group")[0].style.visibility="hidden";
          document.getElementsByClassName("btn-group")[2].style.visibility="hidden";
          document.getElementsByClassName("btn-group")[3].style.visibility="hidden";
          document.getElementById("q-a").innerHTML="You got it! Score 1 for your team.";
          clearInterval(q_interval_2);
        }, 2500);

        var q_interval_3 = setInterval(function () {
          document.getElementById("quiz-parent-buttons").style.visibility="hidden";
          clearInterval(q_interval_3);
        }, 4500);

        var q_interval_4 = setInterval(function () {
          document.getElementById("quiz-title").innerHTML="Results";
          document.getElementById("q-a").innerHTML="Be ready for the next round. Coming up soon!";

          /* Team 1 Score and Logo */
          var team_1 = document.getElementById("team-1");
          var dom_image_1 = document.createElement("img");
          dom_image_1.setAttribute("src", "mockup/Clippers.png");
          dom_image_1.setAttribute("class", "img-team");
          team_1.appendChild(dom_image_1);

          var percent_label_1 = document.getElementById("percent-label-1");
          percent_label_1.innerHTML="100%";
          /* Team 1 Score and Logo */

          /* Team 2 Score and Logo */
          var team_2 = document.getElementById("team-2");
          var dom_image_2 = document.createElement("img");
          dom_image_2.setAttribute("src", "mockup/Lakers.png");
          dom_image_2.setAttribute("class", "img-team");
          team_2.appendChild(dom_image_2);

          var percent_label_2 = document.getElementById("percent-label-2");
          percent_label_2.innerHTML="0%";
          /* Team 2 Score and Logo */

          clearInterval(q_interval_4);
        }, 7000);

        var q_interval_5 = setInterval(function () {
          document.getElementById("clockdiv").innerHTML="Next round!";
          clearInterval(q_interval_5);
        }, 10000);

        clearInterval(questionCountdown);
      }
      setInterval(function () {
        document.getElementById("clockdiv").style.background="#ea0e19";
      }, 0);
    }
    document.getElementById("clockdiv").style.background="transparent";
    document.getElementById("quiz-parent-heading").style.visibility="visible";
    document.getElementById("quiz-parent-buttons").style.visibility="visible";
    document.getElementById("q-a").innerHTML="Who was the first line backer to be selected as the Super Bowl most valuable player(MVP)? ";
  }
  document.getElementById("clockdiv").innerHTML=":" + questionCounter;
}, 1000);
/* The countdown during the game */

/* The countdown before the game begins */
var startCountdown = setInterval(function () {
  startCounter--;
  console.log(startCounter);
  if (startCounter < 4) {
    if (startCounter === 0) {
      document.getElementById("quiz-parent-heading").style.visibility="hidden";
      clearInterval(startCountdown);
    }
    document.getElementById("clockdiv").style.background="#ea0e19";
  }
  document.getElementById("clockdiv").innerHTML=":" + startCounter;
}, 1000);
/* The countdown before the game begins */
