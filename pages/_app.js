// Components
import Layout from "../Layout";
import LoadingTransition from "../components/LoadingTransition";

// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <LoadingTransition>
        <Component {...pageProps} />
      </LoadingTransition>
    </Layout>
  );
}

export default MyApp;
