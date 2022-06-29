import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  textColor: "hsl(0, 0%, 10%)",
  bgColor: "hsl(0, 0%, 90%)",
  blendColor: "hsl(0, 0%, 90%)",

  radius: "4px",
  maxWidth: "1366px",
  timer: ".2s",
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
  
  }

  body{
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bgColor};


    font-family: ${({ theme }) => theme.fontPrimary};
   
  }

  a {
    display: flex;

    color: ${({ theme }) => theme.textColor};
    font-weight: 500;

    cursor: pointer;
  
  }

  button {
    cursor: pointer;
  }

  #__next {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
  }
`;
