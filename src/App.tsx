import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GithubDataProvider } from "./context/GithubDataContext";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubDataProvider>
          <Router />
        </GithubDataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
