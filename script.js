// define variables from HTML elements
var quizBody = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");

// create Q&A content
var quizQuestions = [{
    question: "What does HTML stand for?",
    choiceA: "Holds The Main Link",
    choiceB: "Hightext Made Language",
    choiceC: "Hypertext Markup Language",
    correctAnswer: "c"
},
{
    question: "What does CSS stand for?",
    choiceA: "Cascading Style Sheets",
    choiceB: "Cascade Styling Sheets",
    choiceC: "Cascading System Styles",
    correctAnswer: "a"
},
{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Modem",
    choiceC: "Display Object Model",
    correctAnswer: "a"
}


];
