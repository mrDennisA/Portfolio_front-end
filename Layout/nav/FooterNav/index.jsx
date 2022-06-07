import * as S from "./index.styled";

export default function FooterNav() {
  return (
    <S.Container>
      <span>{"© " + new Date().getFullYear() + " All Rights Reserved"}</span>
    </S.Container>
  );
}
