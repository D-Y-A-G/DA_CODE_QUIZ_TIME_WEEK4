// CREATING QUIZ start by setting variables and start with click button and timer function

// User is presented with a Start button and a title of Quiz - work on style of button

// When user clicks start quiz the timer starts and user is presented with a multiple choice question

var countDown = document.querySelector(".timer");

var timeLeft = 60;

let questions = document.getElementById("questions");

var quizStart = document.getElementById("startquizbtn");
quizStart.addEventListener("click", quizTimer);

function quizTimer() {
  var timer = setInterval(function () {
    timeLeft--;
    countDown.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);

  let confirmation = quizStart;
  //console.log(confirmation);

  if (confirmation === true) {
    quizQuestions.addEventListener("click", questions.append(quizQuestions[0]));
  }
}
//need to hide button element after being clicked and add points to correct questions

// Questions
var quizQuestion1 = "In what year was JavaScript Developed?";
var quizQuestion2 =
  "Which built-in method calls a function for each element in the array?";
var quizQuestion3 =
  "Which of the following function of Array object removes the last element from an array and returns that element?";
//Multiple choice answers create a variable for each
var answer1a = "a: 1987";
var answer1b = "b: 2002";
var answer1c = "c: 1995"; // correct answer c

var answer2a = "a: for each ()"; // correct answer a
var answer2b = "b: loop ()";
var answer2c = "c: while ()";

var answer3a = "a: push";
var answer3b = "b: pop"; //correct answer b
var answer3c = "c: join";

//When user selects and answer if answer is incorrect time is deducted from timer

function checkAnswrs(event) {}
//When user selects clicks for an answer he is presented with the next question

//if timer runs out before questions are answered the quiz is over

// when all questions are done user is presented with results score and to input their name for highscore

// provide highscore tracking with name input

//reference link of questions source on readme https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm
