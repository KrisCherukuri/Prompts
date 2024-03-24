// script.js
const form = document.getElementById('input-form');
const questionContainer = document.getElementById('question');
const timerContainer = document.getElementById('timer');
let questionsRemaining = [];
let currentQuestionIndex = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const numQuestions = parseInt(document.getElementById('num-questions').value);
  const timeInterval = parseInt(document.getElementById('time-interval').value) * 1000;

  // Populate questionsRemaining array with all questions
  questionsRemaining = [...questions];

  displayNextQuestion();
  setTimeout(displayNextQuestion, timeInterval);

  function displayNextQuestion() {
    if (questionsRemaining.length > 0 && currentQuestionIndex < numQuestions) {
      // Pick a random question from questionsRemaining
      const randomIndex = Math.floor(Math.random() * questionsRemaining.length);
      const randomQuestion = questionsRemaining[randomIndex];
      
      // Display the randomly picked question
      questionContainer.innerHTML = randomQuestion.prompt;
      
      // Remove the picked question from questionsRemaining
      questionsRemaining.splice(randomIndex, 1);

      currentQuestionIndex++;
    } else {
      questionContainer.innerHTML = "Hope you had fun!";
      timerContainer.innerHTML = "";
    }
  }
});

