import Heading from "../Heading";
import InView from "../InView";

// Styles
import * as S from "./styles";

export default function Banner({ position = "left", children }) {
  return (
    <S.Section className={position}>
      <div>
        <InView delay={100}>
          <Heading>{children}</Heading>
        </InView>
      </div>
    </S.Section>
  );
}
