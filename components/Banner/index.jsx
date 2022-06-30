import Heading from "../Heading";

// Styles
import * as S from "./styles";

export default function Banner({ children }) {
  return (
    <S.Section>
      <Heading>{children}</Heading>
    </S.Section>
  );
}
