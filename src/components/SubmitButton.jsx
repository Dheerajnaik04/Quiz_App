import React from 'react';

const SubmitButton = ({ selectedAnswer, onSubmitAnswer, submittedAnswer }) => {
  if (submittedAnswer) return null;

  return (
    <div className='submit-section'>
      <button 
        className={`submit-btn ${selectedAnswer !== null ? 'active' : 'disabled'}`}
        onClick={onSubmitAnswer}
        disabled={selectedAnswer === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default SubmitButton;
