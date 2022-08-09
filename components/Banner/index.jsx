import { useRef } from "react";

import Heading from "../Heading";
import DelayView from "../DelayView";

// Hooks
import useObserver from "../../hooks/useObserver";

// Styles
import * as S from "./styles";
import Breadcrumbs from "../Breadcrumbs";

export default function Banner({ position = "left", children }) {
  const ref = useRef();
  const inView = useObserver(ref);

  return (
    <S.Section className={position}>
      <DelayView active={inView} delay={100}>
        <S.Content ref={ref}>
          <div>
            <Breadcrumbs />
          </div>
          <Heading>{children}</Heading>
        </S.Content>
      </DelayView>
    </S.Section>
  );
}
