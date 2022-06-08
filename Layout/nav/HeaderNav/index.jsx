import Link from "next/link";

// Components
import ActiveLink from "../../../components/ActiveLink";

// Styles

import styles from "./index.module.css";

export default function HeaderNav() {
  const LinkArray = () => {
    return (
      <>
        <ActiveLink href="/">index</ActiveLink>
        <ActiveLink href="/info">info</ActiveLink>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link href="/">
            <a>Dennis Alekseev</a>
          </Link>
          <nav>
            <div className={styles.navlink}>
              <LinkArray />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
