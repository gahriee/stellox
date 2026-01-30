// File: src/pages/Module1Quiz.jsx
import QuizTemplate from './QuizTemplate'; // Adjust path as needed
const PageNineteen = () => {
  return (
    <QuizTemplate 
      // 1. Navigation Links
      quizUrl="https://kahoot.it/challenge/01091225?challenge-id=4a5d2d12-366e-41ab-8395-2a9ecc55c046_1769694573938" // Where "YES!" takes them
      backUrl="/not-yet-ready"                         // Where "Not Yet" takes them

      // 2. Custom Instructions (The prop we just added)
      instructions="This quiz is in multiple choice format. Please read each question carefully and select the best answer."
    />
  );
};

export default PageNineteen;