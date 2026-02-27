function QuizScreen({
  currentQuestionIndex,
  quiz,
  answer,
  handleChoice,
  handleNext,
}) {
  const answers = [
    ...quiz[currentQuestionIndex].incorrect_answers,
    quiz[currentQuestionIndex].correct_answer,
  ].sort();
  return (
    <div className="w-xl h-130 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex flex-col justify-center items-center space-y-3">
      <div className="h-5 w-full flex justify-end items-center">
        <p className="text-md font-semibold text-white">
          {currentQuestionIndex + 1}/{quiz.length}
        </p>
      </div>
      <div className="h-5 w-full flex justify-center items-center">
        <p className="text-md font-bold text-indigo-600">
          Question {currentQuestionIndex + 1}
        </p>
      </div>
      <div className="h-5 w-full flex justify-start items-center">
        <p
          className={
            "text-sm font-light " +
            (quiz[currentQuestionIndex].difficulty === "medium"
              ? "text-amber-600"
              : quiz[currentQuestionIndex].difficulty === "hard"
                ? "text-red-600"
                : "text-green-600 ")
          }
        >
          {quiz[currentQuestionIndex].difficulty}
        </p>
      </div>
      <div className="h-16 w-full flex justify-center items-center">
        <p className="text-md font-bold text-white flex justify-start items-center">
          {quiz[currentQuestionIndex].question}
        </p>
      </div>
      <div className="h-5 w-full flex justify-start items-center">
        <p className="text-sm font-medium text-white/30">Choose Only One: </p>
      </div>
      <div className="h-48 w-full flex flex-col justify-start items-center space-y-2">
        {answers.map((choice) => (
          <button
            key={choice}
            className={
              "w-full h-10 flex justify-center items-center text-white/60 border-2 border-white/10 rounded-lg cursor-pointer " +
              (answer === choice ? "border-green-500 bg-green-600/10" : "")
            }
            onClick={handleChoice}
            value={choice}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="w-full h-12">
        <button
          className="w-full h-full flex justify-center items-center text-md font-semibold text-white bg-indigo-600/60 hover:bg-indigo-600 rounded-xl cursor-pointer disabled:bg-indigo-600/20 disabled:cursor-not-allowed"
          disabled={!answer}
          onClick={handleNext}
        >
          {quiz.length === currentQuestionIndex + 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default QuizScreen;
