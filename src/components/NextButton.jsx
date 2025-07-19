import React from 'react';

const NextButton = ({ 
  submittedAnswer, 
  onNextQuestion, 
  currentQuestion, 
  totalQuestions 
}) => {
  if (!submittedAnswer) return null;

  const isLastQuestion = currentQuestion + 1 === totalQuestions;

  return (
    <div className='next-section'>
      <button className='next-btn' onClick={onNextQuestion}>
        {isLastQuestion ? '📊 Show Results' : '➡️ Next Question'}
      </button>
    </div>
  );
};

export default NextButton;
