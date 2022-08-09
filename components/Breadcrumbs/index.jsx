import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import * as S from "./styled";

export default function Breadcrumbs() {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((pathname) => pathname);

  if (pathnames.length > 1) {
    return (
      <S.Breadcrumbs>
        {pathnames.slice(0, -1).map((path, index) => {
          return (
            <React.Fragment key={index}>
              <Link href="/">
                <a>{path.charAt(0).toUpperCase() + path.slice(1)}</a>
              </Link>
              <span>/</span>
            </React.Fragment>
          );
        })}
      </S.Breadcrumbs>
    );
  }
}
