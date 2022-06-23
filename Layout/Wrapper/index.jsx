import * as S from "./styled";

export default function Wrapper({ children }) {
  return (
    <S.Margin>
      <S.Padding>{children}</S.Padding>
    </S.Margin>
  );
}
