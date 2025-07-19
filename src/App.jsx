import React, { useState } from 'react';
import './App.css';
import { questionBank, shuffleArray } from './components/QuestionBank';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ScoreScreen from './components/ScoreScreen';

const App = () => {
  // State management for the quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [previouslyAskedQuestions, setPreviouslyAskedQuestions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState(false);

  // Initialize quiz with random questions
  const startQuiz = () => {
    const shuffledQuestions = shuffleArray(questionBank).slice(0, 6); // Get 6 random questions
    setQuestions(shuffledQuestions);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setPreviouslyAskedQuestions([]);
    setShowFeedback(false);
    setSubmittedAnswer(false);
  };

  // Handle answer selection
  const handleAnswerClick = (answerIndex) => {
    if (submittedAnswer) return;
    setSelectedAnswer(answerIndex);
  };

  // Submit answer button functionality
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || submittedAnswer) return;
    
    setSubmittedAnswer(true);
    setShowFeedback(true);
    setAnswered(true);

    // Add current question to previously asked questions
    setPreviouslyAskedQuestions(prev => [...prev, questions[currentQuestion].id]);

    // Update score if correct
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Move to next question
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowFeedback(false);
      setSubmittedAnswer(false);
    } else {
      setShowScore(true);
    }
  };

  // Restart quiz with new random questions
  const restartQuiz = () => {
    setQuizStarted(false);
    setShowScore(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setPreviouslyAskedQuestions([]);
    setShowFeedback(false);
    setSubmittedAnswer(false);
  };

  // Render appropriate screen based on state
  if (!quizStarted) {
    return (
      <div className='App'>
        <StartScreen 
          questionBank={questionBank}
          onStartQuiz={startQuiz}
        />
      </div>
    );
  }

  if (showScore) {
    return (
      <div className='App'>
        <ScoreScreen 
          score={score}
          totalQuestions={questions.length}
          onRestartQuiz={restartQuiz}
        />
      </div>
    );
  }

  return (
    <div className='App'>
      <QuizScreen 
        currentQuestion={currentQuestion}
        questions={questions}
        selectedAnswer={selectedAnswer}
        submittedAnswer={submittedAnswer}
        showFeedback={showFeedback}
        score={score}
        onAnswerClick={handleAnswerClick}
        onSubmitAnswer={handleSubmitAnswer}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default App;
