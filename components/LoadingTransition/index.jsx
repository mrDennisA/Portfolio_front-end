import React from "react";

import * as S from "./index.styled";

export default function LoadingTrasition(props) {
  return <S.Container className={props.loading ? "active" : ""}>{props.children}</S.Container>;
}
