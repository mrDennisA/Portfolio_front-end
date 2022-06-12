import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./activeLink.module.css";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  const active = router.asPath === href && styles.active;

  return (
    <Link href={href}>
      <a className={styles.link + " " + active}>
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default ActiveLink;
