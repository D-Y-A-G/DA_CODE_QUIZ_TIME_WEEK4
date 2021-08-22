// CREATING QUIZ start by setting variables and start with click button and timer function

// User is presented with a Start button and a title of Quiz - work on style of button

// When user clicks start quiz the timer starts and user is presented with a multiple choice question

var countDown = document.querySelector(".timer");

let timeLeft = 60;

//const questions = document.createElement("div");
let questions = document.getElementById("questions");

let answers = document.getElementById("answers");

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
  quizStart.style.visibility = "hidden";
}

//need to hide button element after being clicked and add points to correct questions

// Questions variables changed to const because value needs to be the same
const quizQuestion1 = "In what year was JavaScript Developed?";
const quizQuestion2 =
  "Which built-in method calls a function for each element in the array?";
const quizQuestion3 =
  "Which of the following function of Array object removes the last element from an array and returns that element?";

// creating sections to store questions
const question1Section = document.createElement("div");
const firstQuestion = document.createElement("ul");
firstQuestion.textContent = quizQuestion1;
question1Section.append(firstQuestion);

questions.append(question1Section);

const question2Section = document.createElement("div");
const secondQuestion = document.createElement("ul");
secondQuestion.textContent = quizQuestion2;
question2Section.append(secondQuestion);

questions.append(question2Section);

const question3Section = document.createElement("div");
const thirdQuestion = document.createElement("ul");
thirdQuestion.textContent = quizQuestion3;
question3Section.append(thirdQuestion);

questions.append(question3Section);

//////////////////Multiple choice answers////////////////////
const answer1a = "A: 1987";
const answer1b = "B: 2002";
const answer1c = "C: 1995"; // correct answer c

const answerOneA = document.createElement("li");
answerOneA.textContent = answer1a;
question1Section.append(answerOneA);

const answerOneB = document.createElement("li");
answerOneB.textContent = answer1b;
question1Section.append(answerOneB);

const answerOneC = document.createElement("li");
answerOneC.textContent = answer1c;
question1Section.append(answerOneC);

///////////////////////////////////////////////////////////
const answer2a = " A: for each ()"; // correct answer a
const answer2b = " B: loop ()";
const answer2c = " C: while ()";

const answertwoA = document.createElement("li");
answertwoA.textContent = answer2a;
question2Section.append(answertwoA);

const answertwoB = document.createElement("li");
answertwoB.textContent = answer2b;
question2Section.append(answertwoB);

const answertwoC = document.createElement("li");
answertwoC.textContent = answer2c;
question2Section.append(answertwoC);
//////////////////////////////////////////////////////////

const answer3a = " A: push";
const answer3b = " B: pop"; //correct answer b
const answer3c = " C: join";

const answerThreeA = document.createElement("li");
answerThreeA.textContent = answer3a;
question3Section.append(answerThreeA);

const answerThreeB = document.createElement("li");
answerThreeB.textContent = answer3b;
question3Section.append(answerThreeB);

const answerThreeC = document.createElement("li");
answerThreeC.textContent = answer3c;
question3Section.append(answerThreeC);

///////////////////////////////////////////////////////////

// when user clicks start he is presented with first question and when an answer is clicked user is presented next quesion- building function//
function getQuestion(currentQuestion) {
  if (currentQuestion == undefined) {
    createQuestionSection(quizQuestion1, answer1a, answer1b, answer1c);
  } else if (currentQuestion === quizQuestion1) {
    createQuestionSection(quizQuestion2, answer2a, answer2b, answer2c);
  } else if (currentQuestion === quizQuestion2) {
    createQuestionSection(quizQuestion3, answer3a, answer3b, answer3c);
  } else;
}



//When user selects and answer if answer is incorrect time is deducted from timer

//When user selects clicks for an answer he is presented with the next question

//if timer runs out before questions are answered the quiz is over

// when all questions are done user is presented with results score and to input their name for highscore

// provide highscore tracking with name input

//reference link of questions source on readme https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm
