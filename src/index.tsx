import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styled/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { styledTheme } from "./styled/StyledTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={styledTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
