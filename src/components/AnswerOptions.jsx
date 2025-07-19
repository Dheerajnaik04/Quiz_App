import React from 'react';

const AnswerOptions = ({ 
  options, 
  selectedAnswer, 
  onAnswerClick, 
  submittedAnswer, 
  correctAnswer 
}) => {
  return (
    <div className='answer-section'>
      {options.map((option, index) => (
        <button
          key={index}
          className={`answer-btn ${
            submittedAnswer 
              ? index === correctAnswer 
                ? 'correct' 
                : index === selectedAnswer 
                  ? 'incorrect' 
                  : ''
              : selectedAnswer === index 
                ? 'selected' 
                : ''
          }`}
          onClick={() => onAnswerClick(index)}
          disabled={submittedAnswer}
        >
          <span className='option-letter'>{String.fromCharCode(65 + index)}.</span>
          <span className='option-text'>{option}</span>
        </button>
      ))}
    </div>
  );
};

export default AnswerOptions;
