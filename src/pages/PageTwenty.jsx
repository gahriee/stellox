// File: src/pages/Module1Quiz.jsx
import QuizTemplate from './QuizTemplate'; // Adjust path as needed

const PageTwenty = () => {
  return (
    <QuizTemplate 
      // 1. Navigation Links
      quizUrl="https://quizizz.com/join/quiz/example-id" // Where "YES!" takes them
      backUrl="/not-yet-ready"                         // Where "Not Yet" takes them

      // 2. Custom Instructions (The prop we just added)
      instructions="This quiz is about labeling the parts. Please read each question carefully and select the best answer."
    />
  );
};

export default PageTwenty;