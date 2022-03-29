var currentQuestionIndex = 0;
var time = questions.length * 6;
var timerId;

var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#startButton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var retryBtn = document.querySelector("#retry-button");

var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");


//start the game
function startQuiz() {
    titleScreen.setAttribute("class", "hide");
  
    quizScreen.setAttribute("class", "show");
  
    timerId = setInterval(tick, 1000);
  
    timeEl.textContent = time;
  
    getQuestion();
  }

  //timer countdown
  function tick() {
    time--;
    timeEl.textContent = time;
  
    if (time <= 0) {
      quizEnd();
    }
  }

  function getQuestion() {
    //question retrival
    var currentQuestion = questions[currentQuestionIndex];
  
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.question;
  
    choicesEl.innerHTML = "";
  
    currentQuestion.choices.forEach(function(choice, i) {
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      choiceNode.onclick = questionClick;
  
      choicesEl.appendChild(choiceNode);
    });
  }

  function questionClick() {
    //user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
      //time deduction
      time -= 5;
  
      if (time < 0) {
        time = 0;
      }
  
      timeEl.textContent = time;
  
      feedbackEl.textContent = "Incorrect";
    } else {

      feedbackEl.textContent = "Correct!";
    }
  
    //flash correct or incorrect
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    //next question
    currentQuestionIndex++;
  
    //check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }


//end the quiz function
  function quizEnd() {
    //stop timer
    clearInterval(timerId);
  
    //end screen
    var highscoreSectionEl = document.querySelector("#highscore-section");
    highscoreSectionEl.setAttribute("class", "show");
  
    //final score
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;
  
    //hide questions section
    quizScreen.setAttribute("class", "hide");
  }

//saving highscore, may require additional work
function saveHighscore() {
    //get value of input box
    var initials = initialsEl.value.trim();
  
    // make sure value wasn't empty
    if (initials !== "") {
      //get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      //format new score object for current user
      var newScore = {
        score: time,
        initials: initials
      };
  
      //save to localstorage
      highscores.push(newScore);
      localStorage.setItem("Score", JSON.stringify(newScore));
      JSON.parse(localStorage.getItem(newScore));
  
      console.log(newScore);
    }
  }

  function checkForEnter(event) {
    if (event.key === "Enter") {
      saveHighscore();
    }
  }
  
  //user button to submit score
  submitBtn.onclick = saveHighscore;

  startBtn.onclick = startQuiz;
  
  initialsEl.onkeyup = checkForEnter;
