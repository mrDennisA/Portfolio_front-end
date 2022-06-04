import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Components
import Layout from "../Layout";

// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     setLoading(true);
  //     console.log(`Loading: ${url}`);
  //   };
  //   const handleStop = (url) => {
  //     setLoading(false);
  //     console.log(`stop: ${url}`);
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
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.4 }}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
