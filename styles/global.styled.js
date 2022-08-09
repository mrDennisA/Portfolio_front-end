import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  textColor: "hsl(0, 0%, 10%)",
  bgColor: "hsl(0, 0%, 90%)",
  grayColor: "hsl(0, 0%, 60%)",
  // blendColor: "hsl(0, 0%, 90%)",

  successColor: "hsl(120, 35%, 35%)",
  errorColor: "hsl(0, 80%, 40%)",

  shadowColor: "hsla(0, 0%, 10%, 10%)",

  radius: "4px",
  maxWidth: "1366px",
  midWidth: "1024px",
  smallWidth: "544px",
  timer: ".2s",
  padding: "clamp(1rem, 0.5833rem + 2.0833vw, 2rem)",
  boxShadow: "0 4px 8px",

  fontPrimary: "Work Sans, sans-serif",

  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-decoration: none;
    border: unset;
    outline: unset;
    background: unset;
  
    font-family: ${({ theme }) => theme.fontPrimary};
  }

  body{
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bgColor};
  }

  #__next {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
  }

  h1, h2, h3, h4 {
    font-weight: 600;
  }

  h1{
    /* font-size: clamp(3.5rem, 2.0417rem + 7.2917vw, 7rem); */
    font-size: clamp(3rem, 1.7500rem + 6.2500vw, 6rem);
  }

  h2{
    font-size: clamp(2.5rem, 1.8750rem + 3.1250vw, 4rem);
  }

  h4 {
    font-size: clamp(1.125rem, 1.0729rem + 0.2604vw, 1.25rem);
  }
  p, li, td, input, textarea{
    font-size: clamp(1rem, 0.9479rem + 0.2604vw, 1.125rem);
    font-weight: 400;
  }

  a {
    display: flex;
    color: ${({ theme }) => theme.textColor};
    font-weight: 600;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  /* {
    outline: 1px red solid;
  } */


`;
