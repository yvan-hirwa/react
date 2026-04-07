import { useDispatch, useSelector } from "react-redux";
import Counter from "./features/counter/Counter";
import { toggleTheme } from "./features/theme/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div
      className={`h-screen w-screen flex justify-center items-center flex-col relative transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <button
        className="w-2.5 h-5 fixed inset-0 text-lg"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <Counter />
    </div>
  );
}

export default App;
