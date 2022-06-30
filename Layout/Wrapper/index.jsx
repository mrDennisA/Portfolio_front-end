import { useTheme } from "styled-components";
import * as S from "./styled";

export function Margin({ width, children }) {
  const theme = useTheme();

  return <S.Margin width={width ? width : theme.maxWidth}>{children}</S.Margin>;
}

export function Padding({ children }) {
  return <S.Padding>{children}</S.Padding>;
}
