import React from "react";

function StartScreen({ hasQuizStarted }) {
  return (
    <div className="w-md h-100 bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-8 flex flex-col justify-center items-center space-y-2">
      <p className="font-semibold text-lg">Welcome to Quiz</p>
      <button
        className="bg-indigo-700 font-bold text-md px-8 py-4 rounded-2xl"
        onClick={() => hasQuizStarted(true)}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
