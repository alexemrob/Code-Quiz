// define variables of HTML index
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

//create java script variables for functions
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 30;
var timerInterval;
var score = 0;
var correct;

// This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion() {
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
};

// function to start quiz & hide start display 
function startQuiz() {
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    // create timer-countdown & end quiz @ 0seconds
    timerInterval = setInterval(function () {
        timeLeft--;
        quizTimer.textContent = "Time Remaining: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}
// function to hide quiz at end and show score
function showScore() {
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You answered " + score + " / " + quizQuestions.length + " correct!";
}


// function to check if button clicked is correct answer 
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        alert("Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("Incorrect.");
        currentQuestionIndex++;
        generateQuizQuestion();
    } else {
        showScore();
    }
}



// when clicking submit function "highscore" saves & stringifies array of scores &
// adds new user score in the array we are saving in local storage

submitScoreBtn.addEventListener("click", function highscore() {

    if (highscoreInputName.value === "") {
        alert("Please add initials to submit the score!");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name: currentUser,
            score: score
        };

        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }

});

// function clears high scores
function generateHighscores() {
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i < highscores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// function displays high scores hiding else 
function showHighscore() {
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}

// function clears local storage of scores & text
function clearScore() {
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}

// function resets variables to restart quiz
function replayQuiz() {
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}


// create button that responds to start quiz
startQuizButton.addEventListener("click", startQuiz);