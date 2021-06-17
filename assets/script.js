// Start section
let start = document.querySelector("#start")

//guide section
let guide = document.querySelector("#guide")

// quiz section
let quiz= document.querySelector("#quiz")
let time = document.querySelector("time")

// question section
let questionNo = document.querySelector("#questionNo")
let questionText = document.querySelector("#questionText")

// answer section
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")

let index = 0;
let timer = 0;
let interval = 0;

start.addEventListener('click', ()=> {
    start.style.display = "none";
    rules.style.display = "none";
    quiz.style.display = "block";
})

let countDown = ()=>{
    if (timer === 0){
        clearInterval(interval);
    }
    else {
    timer--;
    console.log(timer);
    }
}

