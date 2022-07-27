import { useRef } from "react";

import Heading from "../Heading";
import DelayView from "../DelayView";

// Hooks
import useObserver from "../../hooks/useObserver";

// Styles
import * as S from "./styles";

export default function Banner({ position = "left", children }) {
  const ref = useRef();
  const inView = useObserver(ref);

  return (
    <S.Section ref={ref} className={position}>
      <div>
        <DelayView active={inView} delay={100}>
          <Heading>{children}</Heading>
        </DelayView>
      </div>
    </S.Section>
  );
}
