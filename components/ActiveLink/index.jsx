import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default forwardRef(function ActiveLink(props, ref) {
  const router = useRouter();
  const matchPath = router.pathname === props.href;

  return (
    <Link href={props.href}>
      <a ref={matchPath && ref} className={matchPath ? "active" : null} onClick={props.toggleMenu}>
        {props.children}
      </a>
    </Link>
  );
});
