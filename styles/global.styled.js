import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  textColor: "#262626",
  bgColor: "#F2F2F2",

  radius: "4px",
  maxWidth: "1366px",
  timer: "0.3s",
  fontPrimary: "Work Sans, sans-serif",
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
  
  }

  #__next {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
  }
`;
