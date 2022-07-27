import { useRef } from "react";

import useObserver from "../../hooks/useObserver";
import DelayView from "../DelayView";

import * as S from "./styled";

export default function ContactInfo() {
  const ref = useRef();
  const inView = useObserver(ref);

  return (
    <DelayView active={inView} delay={100}>
      <S.Section ref={ref}>
        <S.Content>
          <div>You can also write me at</div>
          <div>Dennis.Alekseev@gmail.com</div>
        </S.Content>
      </S.Section>
    </DelayView>
  );
}
