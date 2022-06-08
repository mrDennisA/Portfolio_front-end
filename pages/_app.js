// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// Components
import Layout from "../Layout";
// import LoadingTransition from "../components/LoadingTransition";

// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     if (router.route !== url) {
  //       setLoading(true);
  //     }

  //     // console.log(`Loading: ${url}`);
  //     // console.log(router.route !== url);
  //   };
  //   const handleStop = (url) => {
  //     setLoading(false);
  //     // console.log(`stop: ${url}`);
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleStop);
  //   router.events.on("routeChangeError", handleStop);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleStop);
  //     router.events.off("routeChangeError", handleStop);
  //   };
  // }, [router]);

  return (
    <Layout>
      {/* <LoadingTransition loading={loading}> */}
      <Component {...pageProps} />
      {/* </LoadingTransition> */}
    </Layout>
  );
}

export default MyApp;
