function ScoreScreen({ score, tryagain, nextQuiz }) {
  return (
    <div className="w-lg h-100 bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-8 flex flex-col justify-evenly items-center space-y-2">
      <p className="font-semibold text-2xl">Congratulation 🎉</p>
      <div className="h-5 w-full flex justify-center items-center">
        <p className="text-sm font-medium text-white/30">Your score is: </p>
      </div>
      <h1 className="font-bold text-4xl">{score}/10</h1>
      <div className="w-full space-x-2 flex justify-center items-center ">
        <button
          className="bg-indigo-700 font-bold text-md px-10 py-4 rounded-lg"
          onClick={tryagain}
        >
          Try again
        </button>
        <button
          className="bg-green-700 font-bold text-md px-10 py-4 rounded-lg"
          onClick={nextQuiz}
        >
          Next Quiz
        </button>
      </div>
    </div>
  );
}

export default ScoreScreen;
