// CREATING QUIZ start by setting variables and start with click button and timer function

// User is presented with a Start button and a title of Quiz - work on style of button

// When user clicks start quiz the timer starts and user is presented with a multiple choice question

var countDown = document.querySelector(".timer");

let timeLeft = 60;

//const questions = document.createElement("div");
let questions = document.getElementById("questions");

let answers = document.getElementById("answers");

var quizStart = document.getElementById("startquizbtn");
quizStart.addEventListener("click", function () {});

function quizTimer() {
  var timer = setInterval(function () {
    timeLeft--;
    countDown.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

//need to hide button element after being clicked and add points to correct questions

// Questions variables
const quizQuestion1 = "In what year was JavaScript Developed?";
const quizQuestion2 =
  "Which built-in method calls a function for each element in the array?";
const quizQuestion3 =
  "Which of the following function of Array object removes the last element from an array and returns that element?";

const questionOneSection = document.createElement("div");
const firstQuestion = document.createElement("ul");
firstQuestion.textContent = quizQuestion1;
questionOneSection.append(quizQuestion1);

questions.append(questionOneSection);

//question1.append(quizQuestion1);
//question2.append(quizQuestion2);
//question3.append(quizQuestion3);

//quizQuestion1.addEventListener("click", quizTimer);

//Multiple choice answers create a variable for each

const answer1a = "A: 1987";
const answer1b = "B: 2002";
const answer1c = "C: 1995"; // correct answer c

answer1.append(answer1a);
answer2.append(answer1b);
answer3.append(answer1c);

const answer2a = " A: for each ()"; // correct answer a
const answer2b = " B: loop ()";
const answer2c = " C: while ()";

answer1.append(answer2a);
answer2.append(answer2b);
answer3.append(answer2c);

const answer3a = " A: push";
const answer3b = " B: pop"; //correct answer b
const answer3c = " C: join";

answer1.append(answer3a);
answer2.append(answer3b);
answer3.append(answer3c);

// when user clicks start he is presented with first question
function checkAnswrs(event) {
  if ((quizStart = true)) addEventListener("click", quizQuestion1);
}
//When user selects and answer if answer is incorrect time is deducted from timer

//When user selects clicks for an answer he is presented with the next question

//if timer runs out before questions are answered the quiz is over

// when all questions are done user is presented with results score and to input their name for highscore

// provide highscore tracking with name input

//reference link of questions source on readme https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm
