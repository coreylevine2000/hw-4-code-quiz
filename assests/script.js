// Answers are 0-3 (i.e. 1-4) per Java
var questions = [
    {
        question: "How long was the 100 Years War between England and France?",
        answers: ["98 years", "100 years", "149 years", "114 years"],
        answer: 3
    },
    {
        question: "The American War for Independence began in 1776, but when did America offically win the war?",
        answers: ["1776", "1781", "1783", "1789"],
        answer: 2
    },    
    {
        question: "Which war was also know as The Great War",
        answers: ["World War 1", "World War 2", "The American Civil War", "The Cold War"],
        answer: 0
    },    
    {
        question: "When Christopher Columbus discovered the New World, the three ships were named the Nina, the Pinta, and the ...",
        answers: ["Santa Monica", "Santa Maria", "Forida", "Sangria"],
        answer: 1
    },    
    {
        question: "The Library of Alexander was located in which ancint civilization?",
        answers: ["Rome", "Egypt", "Athens", "Sparta"],
        answer: 1
    },    
    {
        question: "Which Historical Empire is known to be the biggest in size?",
        answers: ["Mongol", "Russian", "Qing", "British"],
        answer: 3
    },    
    {
        question: "Which country was origially named Siam",
        answers: ["Mongol", "Cambodia", "Laos", "Thialand"],
        answer: 3
    },    
    {
        question: "Which country was origially named Ceylon",
        answers: ["Bengal", "Cambodia", "Sri Lanka", "Thialand"],
        answer: 2
    },    
    {
        question: "Who were the main economic rivals during the Cold War",
        answers: ["Russia and China", "United States and China", "Norway and United States", "Russia and United States"],
        answer: 3
    },    
    {
        question: "Which ancient civilization was located between the rivers Tigris and Euphrates?",
        answers: ["Indus Valley", "Mesopotamia", "Incan", "Mayan"],
        answer: 1
    },
];

var timerEl = document.getElementById('timer');
var startBtn = document.querySelector("#startBtn");
var scoreEl = document.getElementById('#score');
var highScoreEl = document.getElementById('#highscore');


 startBtn.addEventListener("click", function countdown() {
    var timeLeft = 5;
  
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = 'TIME IS UP';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  })

