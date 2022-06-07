import * as S from "./index.styled";

export default function InView({ children, delay = 0 }) {
  return <S.Conteiner delay={delay}>{children}</S.Conteiner>;
}
