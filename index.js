const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "What does the z-index property in CSS control?",
    options: ["The opacity of an element", "The stacking order of positioned elements", "The font size of text within an element", "The margin spacing of an element"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select an HTML element by its id",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React.js, which hook is used to perform side effects in a function component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
  // Other quiz data items...
];

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  questionElm.innerText = `${currentQuiz + 1}: ${question}`;
  scores.innerText = `Score : ${score}/${quizData.length}`;
  options.forEach((curOption, index) => {
    window[`option_${index + 1}`].innerText = curOption;
  });
};

loadQuiz();

const getSelectedOption = () => {
  return Array.from(answerElm).findIndex((curElem) => curElem.checked);
};

const deselectAnswers = () => {
  answerElm.forEach((curElm) => {
    curElm.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score++;
  }
  
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
      <div class="result">
        <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p>Congratulations on completing the quiz!</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>
      </div>
    `;
  }
});
