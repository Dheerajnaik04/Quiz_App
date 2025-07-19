import React from 'react';

const StartScreen = ({ questionBank, onStartQuiz }) => {
  return (
    <div className='quiz-container'>
      <h1>🧠 React Quiz App</h1>
      <p>Test your knowledge with our random quiz questions!</p>
      <div className='quiz-stats'>
        <p>📊 Total Questions Available: {questionBank.length}</p>
        <p>🎯 Questions per Quiz: 6</p>
        <p>🔀 Random Question Selection</p>
      </div>
      <button className='start-btn' onClick={onStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
