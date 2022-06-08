import React from "react";

import styles from "./loadingTransition.module.css";

export default function LoadingTrasition(props) {
  return <div className={props.loading ? styles.container + " " + styles.active : styles.container}>{props.children}</div>;
}
