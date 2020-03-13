import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (value === true) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};
