import Layout from "../Layout";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../styles/global.styled";

// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
