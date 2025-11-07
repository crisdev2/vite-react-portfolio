import "@fontsource/onest/400.css";
import "@fontsource/onest/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "normalize.css";
import "primeicons/primeicons.css";
import { useState, type FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "swiper/swiper-bundle.css";
import Content from "./Components/Layout/Content";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import { darkTheme, lightTheme } from "./utilities/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(2 6 23);
    height: 100vh;
    color: ${({ theme }) => theme.textPrimary};
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  #root {
    background-image: radial-gradient(ellipse 80% 80% at 50% -20%,rgba(0,153,255,.25),hsla(0,0%,100%,0));
  }
`;

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
