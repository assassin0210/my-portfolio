import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styled/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { styledTheme } from "./styled/StyledTheme";
import { Provider } from "react-redux";
import { store } from "./core/store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={styledTheme}>
      <BrowserRouter basename={"/portfolio"}>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
