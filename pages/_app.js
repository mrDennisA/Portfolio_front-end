import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../styles/global.styled";
import Layout from "../Layout";
import CursorContextProvider from "../context/CursorContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <CursorContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CursorContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
