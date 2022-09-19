import { useEffect, useState } from "react";

import { Sun, Moon } from "phosphor-react";

export const DarkModeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (localStorage.theme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const handleThemeChange = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <button onClick={handleThemeChange}>{darkMode ? <Sun /> : <Moon />}</button>
  );
};
