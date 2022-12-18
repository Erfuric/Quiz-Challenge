const quizContainer = document.getElementById("quiz");
const choicesContainer = document.getElementById("choices");
const timerContainer = document.getElementById("timer");
const questionContainer = document.getElementById("question");
const gameOverForm = document.getElementById("gameOverForm");
const scoreSpan = document.getElementById("score");
const initialsInput = document.getElementById("initials");
const startQuizPrompt = document.getElementById("startQuizPrompt");
const startButton = document.getElementById("startButton");

const questions = [
  {
    question: "What does javaScript provide to code?",
    choices: ["a. Style", "b. Interactive Content", "c. Website Foundation", "d. None of the above"],
    correctAnswer: "b. Interactive Content"
  },
  {
    question: "The following code is an example of what? for (var i=0, i < userlength, i++)",
    choices: ["a. Function", "b. For Loop", "c. Object", "d. Array"],
    correctAnswer: "b. For Loop"
  },
  {
    question: "How many items are in an array with an index of 5?",
    choices: ["a. 4", "b. 5", "c. 6", "d. 7"],
    correctAnswer: "c. 6"
  },
  {
    question: "What is a function call?",
    choices: ["a. A request made by a program or script that performs a predetermined function.", "b. A special variable, which can hold more than one value at a time.", "c. A method.", "d. None of the Above"],
    correctAnswer: "a. A request made by a program or script that performs a predetermined function."
  },
  {
    question: "How do you call the function showScore??",
    choices: ["a. function ()", "b. Undefined", "c. showScore()", "d. function showScore(score)"],
    correctAnswer: "c. showScore()"
  }
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    timer = 60;
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = "block";
    gameOverForm.style.display = "none";
    presentQuestion();
    setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    timerContainer.innerHTML = timer;
    if (timer <= 0) {
      gameOver();
    }
    timer--;
  }
  
  document.addEventListener("DOMContentLoaded", startQuiz);
  


function presentQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = question.question;
    choicesContainer.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
      const choice = question.choices[i];
      const button = document.createElement("button");
      button.innerHTML = choice;
      button.addEventListener("click", selectChoice);
      choicesContainer.appendChild(button);
    }
  }
  
  function selectChoice() {
    if (this.innerHTML == questions[currentQuestion].correctChoice) {
      score++;
      currentQuestion++;
      if (currentQuestion == questions.length) {
        gameOver();
      } else {
        presentQuestion();
      }
    } else {
      timer -= 15;
      if (timer <= 0) {
        gameOver();
      } else {
        presentQuestion();
      }
    }
  }
  
  function gameOver() {
    quizContainer.style.display = "none";
    gameOverForm.style.display = "block";
    scoreSpan.innerHTML = score;
    gameOverForm.addEventListener("submit", saveScore);
  }
  
  function saveScore(event) {
    event.preventDefault();
    const initials = initialsInput.value;
    if (initials) {
      // Save the score and initials to a scoreboard
    }
  }
  