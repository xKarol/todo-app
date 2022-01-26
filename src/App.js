import { useState } from "react";
import Layout from "./components/Layout.js";
import Todo from "./components/index.js";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const changeTheme = (name) => {
    localStorage.setItem("theme", name);
    setTheme(name);
  };
  return (
    <div className={`theme ${theme === "light" ? "light" : "dark"}`}>
      <Layout />
      <Todo theme={theme} changeTheme={changeTheme} />
    </div>
  );
}

export default App;
