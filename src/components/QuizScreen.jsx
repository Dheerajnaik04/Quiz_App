import React from 'react';
import ProgressBar from './ProgressBar';
import QuestionDisplay from './QuestionDisplay';
import AnswerOptions from './AnswerOptions';
import SubmitButton from './SubmitButton';
import Feedback from './Feedback';
import NextButton from './NextButton';

const QuizScreen = ({
  currentQuestion,
  questions,
  selectedAnswer,
  submittedAnswer,
  showFeedback,
  score,
  onAnswerClick,
  onSubmitAnswer,
  onNextQuestion
}) => {
  const currentQuestionData = questions[currentQuestion];

  return (
    <div className='quiz-container'>
      <ProgressBar 
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        score={score}
      />
      
      <QuestionDisplay 
        question={currentQuestionData}
        currentQuestionNumber={currentQuestion + 1}
      />
      
      <AnswerOptions 
        options={currentQuestionData.options}
        selectedAnswer={selectedAnswer}
        onAnswerClick={onAnswerClick}
        submittedAnswer={submittedAnswer}
        correctAnswer={currentQuestionData.correctAnswer}
      />
      
      <SubmitButton 
        selectedAnswer={selectedAnswer}
        onSubmitAnswer={onSubmitAnswer}
        submittedAnswer={submittedAnswer}
      />
      
      <Feedback 
        showFeedback={showFeedback}
        selectedAnswer={selectedAnswer}
        correctAnswer={currentQuestionData.correctAnswer}
        options={currentQuestionData.options}
      />
      
      <NextButton 
        submittedAnswer={submittedAnswer}
        onNextQuestion={onNextQuestion}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default QuizScreen;
