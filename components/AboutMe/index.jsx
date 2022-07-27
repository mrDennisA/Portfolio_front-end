import { useRef } from "react";
import parse from "html-react-parser";
import Image from "next/image";

// Components
import DelayView from "../DelayView";

// Hooks
import useObserver from "../../hooks/useObserver";

// Styles
import * as S from "./styles";

export default function AboutMe({ data }) {
  const ref = useRef();
  const inView = useObserver(ref);

  const cover = data.cover.data.attributes;
  return (
    <S.Section ref={ref}>
      <DelayView active={inView} delay={100}>
        <S.RichText>{parse(data.richText)}</S.RichText>
      </DelayView>
      <DelayView active={inView} delay={100}>
        <S.Media>
          <Image
            src={"http://localhost:1337" + cover.url}
            width={cover.width}
            height={cover.height}
            layout="responsive"
            quality={100}
            alt={cover.alternativeText}
          />
        </S.Media>
      </DelayView>
    </S.Section>
  );
}
