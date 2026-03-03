import { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ScoreScreen from "./components/ScoreScreen";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [params, setParams] = useState({
    category: "",
    difficulty: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasQuizStarted) return;

    setLoading(true);
    const controller = new AbortController();

    async function fetchQuiz() {
      try {
        const getObj = await fetch(
          `https://opentdb.com/api.php?amount=10${
            params.category ? `&category=${params.category}` : ""
          }${params.difficulty ? `&difficulty=${params.difficulty}` : ""}${
            params.type ? `&type=${params.type}` : ""
          }`,
          { signal: controller.signal },
        );

        if (!getObj.ok) throw new Error("Can't fetch quiz");

        const quizObj = await getObj.json();
        if (!quizObj.results?.length)
          throw new Error("No questions returned for these settings");
        setQuiz(quizObj.results);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchQuiz();

    return () => controller.abort();
  }, [hasQuizStarted]);

  console.log(quiz);

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
  function nextQuiz() {
    setHasQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  }
  return (
    <div className="bg-[#0a0a0f] h-screen w-screen flex justify-center items-center">
      {!hasQuizStarted ? (
        <StartScreen
          hasQuizStarted={setHasQuizStarted}
          params={params}
          setParams={setParams}
        />
      ) : loading ? (
        <LoadingScreen />
      ) : currentQuestionIndex < quiz.length ? (
        <QuizScreen
          quiz={quiz}
          currentQuestionIndex={currentQuestionIndex}
          answer={selectedAnswer}
          handleChoice={handleChoice}
          handleNext={handleNext}
        />
      ) : (
        <ScoreScreen score={score} tryagain={tryagain} nextQuiz={nextQuiz} />
      )}
    </div>
  );
}

export default App;
