import styles from "./validationMessage.module.css";

export default function ValidationMessage({ children }) {
  return <span className={styles.message}>{children}</span>;
}
