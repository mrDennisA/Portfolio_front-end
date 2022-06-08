import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./loadingTransition.module.css";

export default function LoadingTrasition(props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      if (router.route !== url) {
        setLoading(true);
      }

      // console.log(`Loading: ${url}`);
      // console.log(router.route !== url);
    };
    const handleStop = (url) => {
      setLoading(false);
      // console.log(`stop: ${url}`);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return <div className={loading ? styles.container + " " + styles.active : styles.container}>{props.children}</div>;
}
