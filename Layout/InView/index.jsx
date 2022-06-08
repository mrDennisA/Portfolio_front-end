import styles from "./inView.module.css";

export default function InView({ children, delay = 0 }) {
  return (
    <div className={styles.container} style={{ animationDelay: delay + "ms" }}>
      {children}
    </div>
  );
}
