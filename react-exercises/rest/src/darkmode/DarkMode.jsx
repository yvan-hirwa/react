import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./context";
import DisplayBox from "./DisplayBox";

function DarkMode() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <div>
      <ThemeContext.Provider value={contextValue}>
        <DisplayBox />
      </ThemeContext.Provider>
    </div>
  );
}

export default DarkMode;

//Remember this is the entry point consider it as App.jsx
