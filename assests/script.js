//Constants
const startBtn = document.querySelector(".startBtn button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = document.querySelector(".buttons .quit");
const continueBtn = document.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quizBox");
const timeCount = quizBox.querySelector(".timer .timerSec");
const timeLine = quizBox.querySelector("header .timeLine");
const timeOff = quizBox.querySelector("header .timerText");


const optionList = document.querySelector(".optionList");

//buttons
startBtn.onlick = ()=> {
    infoBox.classList.add("activeInfo");
}

exitBtn.onlick = ()=> {
    infoBox.classList.remove("activeInfo");
}

continueBtn.onlick = ()=> {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestion(0);
    queCounter(1);
    startTimer(60);
    startTimerLine(0);
}

let queCount = 0;
let queNumb = 1;
let counter; 
let counterLine; 
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const nextBtn = quizBox.querySelector(".nextBtn");
const resultBox = document.querySelector("resultBox");
const restartQuiz = resultBox.querySelector(".buttons .restart");
const quitQuiz = resultBox.querySelector(".buttons .quit");

restartQuiz.onclick = ()=>{
    quitQuiz.classList.add("activeQuiz");    
    resultBox.classList.remove("activeResult");
    let queCount = 0;
    let queNumb = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;
    showQuestion(queCount);
    queCounter(queNumb);
    clearInterval(counter); // per question time reset, remove
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    nextBtn.style.display = "none";
    timeOff.textContent = "Time Left";
}

quitQuiz.onclick = ()=>{
    window.location.reload();
}

//next btn holder...tbd
nextBtn.onlick =()=>{
    if (queCount < questions.length - 1){
        queCount++;
        queNumb++;
        showQuestion(queCount);
        queCounter(queNumb);
        clearInterval(counter); // per question time reset, remove
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextBtn.style.display = "none";
        timeOff.textContent = "Time Left";
    }else{
        clearInterval(counter); // per question time reset, remove;
        clearInterval(counterLine);
        console.log("questions completed");
        showResultBox()
    }
}

// retrieving questions
function showQuestion(index){
    const queText = document.querySelector(".queText");
    let queTag = '<span>'+ questions[index].numb + ". " + queston +"</span>"
    let optionTag = '<div class="option">'+ questions[index].option[0] +'<span></span></div>' 
        + '<div class="option">'+ questions[index].option[1] +'<span></span></div>' 
        + '<div class="option">'+ questions[index].option[2] +'<span></span></div>' 
        + '<div class="option">'+ questions[index].option[3] +'<span></span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);// removal tbd
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is correct");
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");

        for (let i = 0; i < allOptions; i++) {
            if(optionList.children[i].textContent == correctAns){
            optionList.children[i].setAttribute("class", "option correct");
            }
    }
    
}

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
    }
    nextBtn.style.display = "block";
}

function showResultBox(){
    infoBox.classList.remove("activeInfo");
    quizBox.classList.remove("activeQuiz");
    resultBox.classList.add("activeResult");
    const scoreText = resultBox.querySelector(".scoreText");
    if(userScore > 3){
        let scoreTag = '<span> yay your score is <p>' + userScore + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span> your score is <p>' + userScore + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span> oh your score is <p>' + userScore + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){// may be removed
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questions[queCount].answer;
            let allOptions = optionList.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(optionList.children[i].textContent == correctAns){
                optionList.children[i].setAttribute("class", "option correct");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                optionList.children[i].classList.add("disabled");
            }
            nextBtn.style.display = "block";
        }
    }
}

//removeal tbd
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}



function queCounter (index){
    const bottomQuesCounter = quizBox.querySelector(".totalQue");
    let totalQuestionTag = '<span><p>'+ index +'</p>of<p>' + questions.length + '</p>Question</span';
    bottomQuesCounter.innerHTML = totalQuestionTag;
}