# React Quiz App 🧠

A modern, interactive quiz application built with React and Vite. Test your knowledge with randomly selected questions and get instant feedback!

## Features ✨

- **Random Question Selection**: Each quiz presents 6 randomly selected questions from a bank of 15
- **Interactive UI**: Modern, responsive design with smooth animations
- **Instant Feedback**: Get immediate feedback on your answers with color-coded responses
- **Progress Tracking**: Visual progress bar and real-time score tracking
- **Performance Analysis**: Detailed quiz summary with accuracy percentages
- **Component-Based Architecture**: Clean, modular React components for maintainability

## Technologies Used 🛠️

- **React 18**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with gradients, animations, and responsive design
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure 📁

```
src/
├── components/
│   ├── AnswerOptions.jsx      # Multiple choice answer buttons
│   ├── Feedback.jsx           # Correct/Incorrect feedback display
│   ├── NextButton.jsx         # Navigation to next question
│   ├── ProgressBar.jsx        # Progress tracking and score display
│   ├── QuestionBank.js        # Question data and utility functions
│   ├── QuestionDisplay.jsx    # Question text display
│   ├── QuizScreen.jsx         # Main quiz interface
│   ├── ScoreScreen.jsx        # Final results and summary
│   ├── StartScreen.jsx        # Welcome screen
│   └── SubmitButton.jsx       # Answer submission
├── App.jsx                    # Main application component
├── App.css                    # Application styles
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

## Getting Started 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dheerajnaik04/Quiz_App.git
   cd Quiz_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start the quiz!

## How to Play 🎮

1. Click "Start Quiz" to begin
2. Read each question carefully
3. Select your answer from the multiple choice options
4. Click "Submit Answer" to confirm your choice
5. View instant feedback and the correct answer
6. Click "Next Question" to continue
7. Complete all 6 questions to see your final score
8. Click "Take Another Quiz" to try again with new random questions

## Quiz Features 📊

- **15 Question Bank**: Covers various topics including geography, science, programming, and general knowledge
- **Random Selection**: Each quiz randomly selects 6 questions for variety
- **Immediate Feedback**: See correct answers instantly after submission
- **Score Tracking**: Real-time score updates throughout the quiz
- **Performance Messages**: Encouraging feedback based on your performance
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Development Scripts 📝

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements 🔮

- Add more question categories
- Implement difficulty levels
- Add timer for each question
- Include multimedia questions (images, videos)
- Add user authentication and score history
- Implement multiplayer functionality

## License 📄

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React + Vite
