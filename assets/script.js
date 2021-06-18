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

let choice_que = document.querySelectorAll(".choice_que");

// once clicked on button it should take you to the next question
let next_question = document.querySelector("#next_question");
let button = document.querySelectorAll("button");

var i = 0;

let index = 0;
let timer = 25;
let interval = 0;

let correct = 0;
let answer = 0;

let UserAns = undefined;

start.addEventListener('click', ()=> {
    start.style.display = "none";
    rules.style.display = "none";
    quiz.style.display = "block";

    // timer start
    time = 0;
    interval = setInterval(countDown, 1000);
    loadData();
})

let countDown = ()=>{
    if (timer === 0){
        clearInterval(interval);
        next_question.click();
    }
    else {
    timer--;
    time.innerText = timer;
    console.log(timer);
    }
}

// setinterval(countDown,1000);

let loadData = ()=>{
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MYQS[index].question;
    option1.innerText = MYQS[index].choice1;
    option2.innerText = MYQS[index].choice2;
    option3.innerText = MYQS[index].choice3;
    option4.innerText = MYQS[index].choice4;
}

loadData();

choice_que.forEach( (choices, choiceNo) =>{
    choices.addEventListener("click", ()=>{
        choices.classList.add("active");

        if(choiceNo === MYQS[index].answer)
        {
            correct++;
        } else {
            correct += 0;
        }
        // disable all other options
        for(i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disbled")
        }

    })
});

next_question.addEventListener("click", ()=> {
    // go to next question
    if(index !== MYQS.lenght - 1) {
        index++;
    }
    var answerText = event.target.textContent
    if(answerText === question[i].answer) {
        timer = timer;
    } else {
        timer = timer - 15;
    }

    event.addEventListener("click", next_question)


    // choice_que.addEventListener("click", ()=>{
    //     removeActive.classList.remove("active");
// })
    loadData();
})

