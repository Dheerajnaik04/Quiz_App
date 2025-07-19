import React from 'react';

const QuestionDisplay = ({ question, currentQuestionNumber }) => {
  return (
    <div className='question-section'>
      <div className='question-number'>Question {currentQuestionNumber}</div>
      <h2 className='question-text'>{question.question}</h2>
    </div>
  );
};

export default QuestionDisplay;
