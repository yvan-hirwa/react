import categories from "../utilities/categories";

function StartScreen({ hasQuizStarted, params, setParams }) {
  return (
    <div className="w-xl h-130 bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-8 flex flex-col justify-center items-center space-y-7">
      <p className="font-semibold text-lg">Welcome to Trivia</p>

      <div className="w-full flex flex-col justify-center items-start space-y-4">
        <div className="w-full flex flex-col justify-center items-start space-y-2">
          <p className="text-sm font-medium text-white/30">Select Category </p>

          <select
            value={params.category}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, category: e.target.value }))
            }
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition appearance-none"
          >
            <option value="" defaultValue className="bg-gray-900">
              Any Category
            </option>
            {categories.map(({ id, name }) => (
              <option value={id} key={id} className="bg-gray-900">
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-col justify-center items-start space-y-2">
          <p className="text-sm font-medium text-white/30">Select Difficulty</p>

          <select
            value={params.difficulty}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, difficulty: e.target.value }))
            }
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition appearance-none"
          >
            <option value="" defaultValue className="bg-gray-900">
              Any Difficulty
            </option>
            <option value="easy" className="bg-gray-900">
              Easy
            </option>
            <option value="medium" defaultValue className="bg-gray-900">
              Medium
            </option>
            <option value="Hard" defaultValue className="bg-gray-900">
              Hard
            </option>
          </select>
        </div>

        <div className="w-full flex flex-col justify-center items-start space-y-2">
          <p className="text-sm font-medium text-white/30">Select Type</p>

          <select
            value={params.type}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, type: e.target.value }))
            }
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition appearance-none"
          >
            <option value="" defaultValue className="bg-gray-900">
              Any Type
            </option>
            <option value="multiple" className="bg-gray-900">
              Multiple Choice
            </option>
            <option value="boolean" defaultValue className="bg-gray-900">
              True / False
            </option>
          </select>
        </div>
      </div>

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
