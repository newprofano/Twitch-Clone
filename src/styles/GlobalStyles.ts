import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
     border: 0;
    outline: 0;

    font-family: 'Roboto',sans-serif
  }

  :root{
    --grey-1: #0e0e10;
    --grey-2: #18181b;
    --grey-3: #1f1f23;
    
    --grey-4: #26262c;
    --button-hover: #772ce8;
    --white: #FFF;
    --text-hover: #a970ff;
    --nav-button-color: #EFEFF1
  }
`;
