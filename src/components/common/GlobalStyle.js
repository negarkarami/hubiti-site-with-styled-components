import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 12px;
  }

  * {
    outline: none;
    box-sizing: border-box;
    background-repeat: no-repeat !important;
    font-family: persian, roboto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  body {
    min-height: 100vh;
    background-color: ${p => p.theme.primaryColor};
    color: ${p => p.theme.secondaryColor};
    margin: 0;
    font-family: sans-serif;
    padding: 0;
    direction: rtl;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export {GlobalStyle};
