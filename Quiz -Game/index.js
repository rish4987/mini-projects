const questions=[
    {
        question :"How many continents are there in the world?",
        answers:[
            {text:"304", correct:false},
            {text:"453",correct:false},
            {text: "206",correct:true},
            {text:"456",correct:false},
        ]
   
   
   
    },
{
    question :"Which is the largest continent? ",
    answers:[
        {text: "Asia" , correct:true},
        {text:"Europe",correct:false},
        {text: "Antartica",correct:false},
        {text:"Australia",correct:false},]


},

{

    question :"Who invented radio?",
    answers:[
       
        {text:"Guglielmo Marcon", correct:true},
        {text:" Isaac Newton",correct:false},
        {text: "CV Raman",correct:false},
        {text:"Homi Jehangir Bhabha",correct:false},]
},
{ question :"When is the National Girl Child Day in India celebrated?",
    answers:[
        {text:"23 January", correct:false},
        {text:"22 March",correct:false},
        {text: "24 January",correct:true},
        {text:"23 february",correct:false},]
}
];



const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answersButton.firstChild) {
    answersButton.removeChild(answersButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answersButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
