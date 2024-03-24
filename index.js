// script.js
const form = document.getElementById('input-form');
const questionContainer = document.getElementById('question');
const timerContainer = document.getElementById('timer');
let currentQuestionIndex = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const numQuestions = parseInt(document.getElementById('num-questions').value);
  const timeInterval = parseInt(document.getElementById('time-interval').value) * 1000;

  displayQuestion();
  setTimeout(displayNextQuestion, timeInterval);

  function displayQuestion() {
    questionContainer.innerHTML = questions[currentQuestionIndex].prompt;
  }

  function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < numQuestions) {
      displayQuestion();
      setTimeout(displayNextQuestion, timeInterval);
    } else {
      questionContainer.innerHTML = "Thank you for answering the questions!";
      timerContainer.innerHTML = "";
    }
  }
});
