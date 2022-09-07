import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme["base-background"]};
    color: ${({ theme }) => theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body,input, textarea, button {
    font: 400 1rem Nunito, sans-serif;  
  }

  button {
    cursor: pointer;
    
    &:disabled {
      transition: 0.4s;
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

    
  a {
    text-decoration: none;
  }
`;
