import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes.js";
import Layout from "./components/Layout.js";
import Todo from "./components/index.js";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (name) => {
    setTheme(name);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout />
      <Todo theme={theme} changeTheme={changeTheme} />
    </ThemeProvider>
  );
}

export default App;
