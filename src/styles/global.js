import { createGlobalStyle } from "styled-components";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: auto;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #F5F5F5;
    /* background: #E54500; */
  }

  body, input, button, textarea {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }

  input {
    border: none;
  }

`;
