import { useContext } from "react";
import { ThemeContext } from "./context";

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="w-40 h-10 font-semibold text-sm rounded-xl fixed top-1 right-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 cursor-pointer shadow-md"
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ToggleButton;
