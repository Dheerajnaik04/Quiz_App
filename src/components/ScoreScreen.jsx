import React from 'react';

const ScoreScreen = ({ score, totalQuestions, onRestartQuiz }) => {
  const getPerformanceMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return "🌟 Excellent! You're a quiz master!";
    if (percentage >= 70) return "👍 Great job! Well done!";
    if (percentage >= 50) return "👌 Good effort! Keep practicing!";
    return "💪 Don't give up! Practice makes perfect!";
  };

  return (
    <div className='quiz-container'>
      <div className='score-section'>
        <h2>Quiz Complete! 🎉</h2>
        <div className='score-display'>
          <p>You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong></p>
          <div className='score-percentage'>
            {Math.round((score / totalQuestions) * 100)}%
          </div>
          <p className='performance-message'>{getPerformanceMessage()}</p>
        </div>
        
        <div className='quiz-summary'>
          <h3>📋 Quiz Summary</h3>
          <div className='summary-stats'>
            <div className='stat-item'>
              <span className='stat-label'>Correct Answers:</span>
              <span className='stat-value correct'>{score}</span>
            </div>
            <div className='stat-item'>
              <span className='stat-label'>Incorrect Answers:</span>
              <span className='stat-value incorrect'>{totalQuestions - score}</span>
            </div>
            <div className='stat-item'>
              <span className='stat-label'>Accuracy:</span>
              <span className='stat-value'>{Math.round((score / totalQuestions) * 100)}%</span>
            </div>
          </div>
        </div>

        <div className='action-buttons'>
          <button className='restart-btn' onClick={onRestartQuiz}>
            🔄 Take Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreScreen;
