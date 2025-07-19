import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions, score }) => {
  return (
    <div className='quiz-header'>
      <div className='progress-bar'>
        <div 
          className='progress-fill'
          style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>
      <div className='quiz-info'>
        <span>Question {currentQuestion + 1} of {totalQuestions}</span>
        <span className='current-score'>Score: {score}/{totalQuestions}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
