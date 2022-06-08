import styles from "./footerNav.module.css";

export default function FooterNav() {
  return (
    <div className={styles.container}>
      <span>{"© " + new Date().getFullYear() + " All Rights Reserved"}</span>
    </div>
  );
}
