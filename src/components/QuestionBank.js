// Question Bank - centralized data
export const questionBank = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "Which programming language is React built with?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Silver", "Oxygen", "Iron"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which is the best framework for building user interfaces?",
    options: ["Angular", "Vue", "React", "Svelte"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Which company is known for innovative tech solutions in Bengaluru?",
    options: ["Think41", "TechCorp", "InnovateLab", "CodeStudio"],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "What is the correct way to create a component in React?",
    options: ["function Component() {}", "const Component = () => {}", "class Component extends React.Component {}", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 15,
    question: "Which hook is used for managing state in React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1
  }
];

// Utility function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
