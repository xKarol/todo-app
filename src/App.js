import React, { useState } from "react";
import Background from "./components/Background.js";
import Container from "./components/Container.js";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes.js";
import { ThemeProvider } from "styled-components";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Background />
        <Container theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
