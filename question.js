const questions = [
  {
    category: "food",
    question: "What is my favorite dish?",
    choices: ["Shawarma", "Pizza", "Pasta"],
    answer: "Shawarma"
  },
  {
    category: "sports",
    question: "Which sport do I enjoy the most?",
    choices: ["Soccer", "Basketball", "Tennis"],
    answer: "Basketball"
  },
  {
    category: "movies",
    question: "What is my favorite movie genre?",
    choices: ["Comedy", "Horror", "Action"],
    answer: "Action"
  },
  {
    category: "technology",
    question: "Which programming language do I prefer?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    category: "geography",
    question: "Which country would I love to visit?",
    choices: ["Japan", "Canada", "Italy"],
    answer: "Japan"
  }
];

function getRandomQuestion(arr) {
  let randomQuestion = Math.floor(Math.random() * arr.length)
   return arr[randomQuestion]
}
function getRandomComputerChoice(arr) {
  let randomAnswer = Math.floor(Math.random() * arr.length)
  return arr[randomAnswer]
}
function getResults(question, compChoice) {
  if (question.answer === compChoice) {
    return "The computer's choice is correct!"
  }
  return `The computer's choice is wrong. The correct answer is: ${question.answer}`
}
