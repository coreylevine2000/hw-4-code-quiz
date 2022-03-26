//Constants
const startBtn = document.querySelector(".startBtn button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = document.querySelector(".buttons .quit");
const continueBtn = document.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quizBox");

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
}

let queCount = 0;

const nextBtn = quizBox.querySelector(".nextBtn");

//next btn
nextBtn.onlick =()=>{
    if (queCount < questions.length - 1){
        queCount++;
        showQuestion(queCount);
    }else{

    }

// retrieving questions
function showQuestion(index){
    const queText = document.querySelector(".queText");
    const optionList = document.querySelector(".optionList");
    let queTag = '<span>'+ questions[index].queston +"</span>"
    let optionTag = '<div class="option">'+ questions[index].option[0] +'<span></span></div>' 
        + '<div class="option">'+ questions[index].option[1] +'<span></span></div>' 
        + '<div class="option">'+ questions[index].option[2] +'<span></span></div>' 
        + '<div class="option">'+ questions[index].option[3] +'<span></span></div>';
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;

}