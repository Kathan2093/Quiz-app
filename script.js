const a = [
  {
    Question: "What is the Capital of India?",
    option: ["Delhi", "Mumbai", "Kolkata"],
    Answer: "Delhi",
  },
  {
    Question: "The city Surat is in which state?",
    option: ["Gujarat", "Maharashtra", "Rajasthan"],
    Answer: "Gujarat",
  },
  {
    Question: "'1' + '1'?",
    option: ["11", "2", 11],
    Answer: "11",
  },
  {
    Question: "What is the largest planet in our solar system?",
    option: ["Jupiter", "Saturn", "Mars"],
    Answer: "Jupiter",
  },
  {
    Question: "How many continents are there in the world?",
    option: [5, 6, 7],
    Answer: 7,
  },
  {
    Question: "Who invented the light bulb?",
    option: ["Thomas Edison", "Albert Einstein", "Alexander Graham Bell"],
    Answer: "Thomas Edison",
  },
  {
    Question: "Which country is known as the Land of the Rising Sun?",
    option: ["Japan", "China", "Korea"],
    Answer: "Japan",
  },
  {
    Question: "What is the highest mountain in the world?",
    option: ["Mount Everest", "K2", "Kangchenjunga"],
    Answer: "Mount Everest",
  },
  {
    Question: "What is the chemical symbol for water?",
    option: ["H2O", "CO2", "CH4"],
    Answer: "H2O",
  },
  {
    Question: "What is the tallest building in the world?",
    option: ["Burj Khalifa", "Shanghai Tower", "One World Trade Center"],
    Answer: "Burj Khalifa",
  },
];
let currentQuestion = 0;
const questionElement = document.getElementById("question");
const optionElement = document.getElementById("option");

function loadQuestion() {
  const currentQuiz = a[currentQuestion];
  questionElement.innerText =
    currentQuestion + 1 + " . " + currentQuiz.Question;
  optionElement.innerHTML = "";
  currentQuiz.option.forEach((option) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(option));
    optionElement.appendChild(label);
  });
}

function nextQuestion() {
  const selectOption = document.querySelector("input[name='answer']:checked");
  if (!selectOption) {
    alert("Please select an option");
    return;
  }
  const answer = selectOption.value;
  if (answer == a[currentQuestion].Answer) {
    alert("Correct Answer!");
  } else {
    alert("Wrong! The correct answer is " + a[currentQuestion].Answer);
  }
  currentQuestion++;
  if (currentQuestion === a.length - 1) {
    alert("Quiz completed");
  } else {
    loadQuestion();
  }
}

loadQuestion(); // Call loadQuestion initially to load the first question
