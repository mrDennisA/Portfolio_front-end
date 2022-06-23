// Components
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../styles/global.styled";

// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
