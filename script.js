// CREATING QUIZ start by setting variables and start with click button and timer function

// User is presented with a Start button and a title of Quiz - work on style of button

// When user clicks start quiz the timer starts and user is presented with a multiple choice question

var countDown = document.querySelector(".timer");

var timeLeft = 60;

const quizStart = document.getElementById("startquizbtn");
quizStart.addEventListener("click", quizTimer);

function quizTimer() {
  var timer = setInterval(function () {
    timeLeft--;
    countDown.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
//need to hide button element after being clicked

// Multiple choice questions
const quizQuestions = [
  {
    question1: "In what year was JavaScript Developed",
    answers: {
      a: 1987,
      b: 2002,
      c: 1995,
    },

    correct: "c",
  },
  {
    question2:
      "Which built-in method calls a function for each element in the array?",
    answers: {
      a: "for each ()",
      b: "loop ()",
      c: "while ()",
    },

    correct: "a",
  },
  {
    question3:
      "Which of the following function of Array object removes the last element from an array and returns that element?",
    answers: {
      a: "push",
      b: "pop",
      c: "join",
    },

    correct: "b",
  },
];



//When user selects and answer if answer is incorrect time is deducted from timer
function quizTime() {}
//When user selects clicks for an answer he is presented with the next question
function userAnswer() {}
//if timer runs out before questions are answered the quiz is over

// when all questions are done user is presented with score and to input their name for highscore

// provide highscore tracking with name input

//reference link of questions source on readme https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm
