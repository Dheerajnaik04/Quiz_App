import React from 'react';

const Feedback = ({ 
  showFeedback, 
  selectedAnswer, 
  correctAnswer, 
  options 
}) => {
  if (!showFeedback) return null;

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className='feedback-section'>
      <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect ? (
          <div className='feedback-content'>
            <span className='feedback-icon'>✅</span>
            <span className='feedback-text'>Correct! Well done!</span>
          </div>
        ) : (
          <div className='feedback-content'>
            <span className='feedback-icon'>❌</span>
            <div className='feedback-text'>
              <div>Incorrect!</div>
              <div className='correct-answer'>
                Correct answer: <strong>{options[correctAnswer]}</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
