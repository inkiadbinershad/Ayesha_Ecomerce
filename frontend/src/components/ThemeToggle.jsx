import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-yellow-400 hover:bg-yellow-500 transition"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
