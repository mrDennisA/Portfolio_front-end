import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import DelayView from "../../DelayView";
import Heading from "../../Heading";

// Hooks
import useObserver from "../../../hooks/useObserver";

// Styles
import * as S from "./styled";

export default function Card({ data }) {
  const ref = useRef();
  const inView = useObserver(ref);

  const cover = data.cover.data.attributes;

  // console.log(data);

  return (
    <DelayView active={inView} delay={100}>
      <Link href={"/projects/" + data.slug}>
        <S.Card ref={ref}>
          <S.Media>
            <Image src={cover.url} width={cover.width} height={cover.height} layout="responsive" quality={100} alt={cover.alternativeText} />
          </S.Media>
          <S.Info>
            <Heading element="h4">{data.title}</Heading>
            <p>{data.description}</p>
          </S.Info>
        </S.Card>
      </Link>
    </DelayView>
  );
}
