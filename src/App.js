import { useState } from "react";
import Background from "./components/Background.js";
import Todo from "./components/index.js";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const changeTheme = (name) => {
    localStorage.setItem("theme", name);
    setTheme(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={`theme-${theme === "light" ? "light" : "dark"}`}>
        <Background>
          <Todo />
        </Background>
      </div>
    </ThemeContext.Provider>
  );
}
