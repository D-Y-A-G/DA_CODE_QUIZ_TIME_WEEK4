// CREATING QUIZ start by setting variables

// User is presented with a Start button and a title of Quiz - work on style of button

// When user clicks start quiz the timer starts and user is presented with a multiple choice question

var countDown = document.querySelector(".timer");

var timeleft = 100;

var start = document.getElementById("startbutton");

function quizTimer() {
  var timer = setInterval(function () {
    timeLeft--;
    countDown.textContent = secondsLeft;

    if (start = true) {
        startbutton.addEventListener("click")

    }

    if (timeleft === 0) {
      clearInterval(timer);
    }
  }, );
}
quizTimer();

//When user selects and answer if answer is incorrect time is deducted from timer

//When user selects clicks for an answer he is presented with the next question

//if timer runs out before questions are answered the quiz is over

// when all questions are done user is presented with score and to input their name for highscore

// provide highscore tracking with name input
