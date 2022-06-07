import React from "react";
import Link from "next/link";

import * as S from "./index.styled";

export default function LinkList(props) {
  return (
    <S.Links>
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
    </S.Links>
  );
}
