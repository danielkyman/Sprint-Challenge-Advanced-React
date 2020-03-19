import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

function Toggle() {
  const [darkMode, setDarkMode] = useDarkMode(true);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={toggleMode}>Click</button>
    </div>
  );
}

export default Toggle;
