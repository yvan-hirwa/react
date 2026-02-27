import { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ScoreScreen from "./components/ScoreScreen";

function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchQuiz() {
      try {
        const getObj = await fetch(
          "https://opentdb.com/api.php?amount=10&category=18&type=multiple",
          { signal: controller.signal },
        );

        if (!getObj.ok) throw new Error("Can't fetch quiz");

        const quizObj = await getObj.json();
        setQuiz(quizObj.results);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
      }
    }

    fetchQuiz();

    return () => controller.abort();
  }, []);
  // console.log(quiz);
  // console.log(selectedAnswer);

  function handleChoice(e) {
    setSelectedAnswer(e.target.value);
  }
  function handleNext() {
    if (selectedAnswer === quiz[currentQuestionIndex].correct_answer)
      setScore((prev) => prev + 1);

    setSelectedAnswer(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  }
  function tryagain() {
    setCurrentQuestionIndex(0);
    setScore(0);
  }
  return (
    <div className="bg-[#0a0a0f] h-screen w-screen flex justify-center items-center">
      {!hasQuizStarted ? (
        <StartScreen hasQuizStarted={setHasQuizStarted} />
      ) : currentQuestionIndex < quiz.length ? (
        <QuizScreen
          quiz={quiz}
          currentQuestionIndex={currentQuestionIndex}
          answer={selectedAnswer}
          handleChoice={handleChoice}
          handleNext={handleNext}
        />
      ) : (
        <ScoreScreen score={score} tryagain={tryagain} />
      )}
    </div>
  );
}

export default App;
