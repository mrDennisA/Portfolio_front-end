import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  const active = router.asPath === href ? "active" : "";

  return (
    <Link href={href}>
      <a className={active}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
