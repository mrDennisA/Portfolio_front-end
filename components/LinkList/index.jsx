import React from "react";
import Link from "next/link";

import styles from "./linkList.module.css";

export default function LinkList(props) {
  return (
    <div className={styles.links}>
      {props.data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <span>-</span>
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
