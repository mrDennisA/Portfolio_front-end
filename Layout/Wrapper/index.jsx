import styles from "./wrapper.module.css";

export default function Wrapper({ children }) {
  return (
    <div className={styles.margin}>
      <div className={styles.padding}>{children}</div>
    </div>
  );
}
