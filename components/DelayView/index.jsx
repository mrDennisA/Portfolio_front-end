import * as S from "./styled";

export default function DelayView({ children, active = true, delay = 0 }) {
  return (
    <S.Container className={active ? "active" : null} delay={delay}>
      {children}
    </S.Container>
  );
}
