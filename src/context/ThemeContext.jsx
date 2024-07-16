import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

if (!localStorage.getItem("theme-sz")) {
  localStorage.setItem("theme-sz", "dark");
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme-sz"));

  if (localStorage.getItem("theme-sz") === "light") {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  }

  if (localStorage.getItem("theme-sz") === "dark") {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
  }

  const handleTheme = (e) => {
    e.preventDefault();

    if (theme === "light") {
      document.querySelector("body").classList.remove("light");
      document.querySelector("body").classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme-sz", "dark");
    }
    if (theme === "dark") {
      document.querySelector("body").classList.remove("dark");
      document.querySelector("body").classList.add("light");
      setTheme("light");
      localStorage.setItem("theme-sz", "light");
    }
  };

  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
