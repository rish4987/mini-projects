let chosenColor = null;
let countdown;
const colors = ['red', 'green', 'blue', 'yellow'];

function chooseColor(color) {
  chosenColor = color;
  document.getElementById("resultBox").innerText = " Waiting...";
  startTimer();
}

function startTimer() {
  let timeLeft = 10;
  document.getElementById("timer").innerText = timeLeft;
  
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(countdown);
      showPrediction();
    }
  }, 1000);
}

function showPrediction() {
  const predictedColor = colors[Math.floor(Math.random() * colors.length)];
  const resultBox = document.getElementById("resultBox");
  
  resultBox.style.backgroundColor = predictedColor;
  resultBox.innerText = `Color: ${predictedColor}`;
  
  if (predictedColor === chosenColor) {
    resultBox.innerText += " -  Win!";
  } else {
    resultBox.innerText += " - lose!";
  }
}
