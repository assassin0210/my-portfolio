import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #000;
    color: #57585a;
    //font-family: 'Lato', sans-serif;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 25px;

  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

`;
