import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";

// Components
import DelayView from "../../DelayView";
import Links from "./Links";

// Styles
import * as S from "./styles";

// Hooks
import useObserver from "../../../hooks/useObserver";

export default function Detail({ data }) {
  const [column, setColumn] = useState(null);

  // console.log(data);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 576) {
        return setColumn(1);
      }
      if (window.innerWidth >= 576) {
        return setColumn(2);
      }
    };

    setColumn(resize);

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [column]);

  const Info = () => {
    const ref = useRef();
    const inView = useObserver(ref);

    return (
      <DelayView active={inView} delay={100}>
        <S.Info ref={ref}>
          <div>{parse(data.richText)}</div>
          {data.links.length > 0 && (
            <S.Links>
              {data.links.map((link, index) => {
                return <Links key={index} data={link} />;
              })}
            </S.Links>
          )}
        </S.Info>
      </DelayView>
    );
  };

  const ImageGallery = ({ data }) => {
    const ref = useRef();
    const inView = useObserver(ref);

    return (
      <DelayView active={inView} delay={100}>
        <S.Media ref={ref}>
          <Image src={data.url} width={data.width} height={data.height} layout="responsive" objectFit="contain" alt={data.alternativeText} quality={100} />
        </S.Media>
      </DelayView>
    );
  };

  const Column = ({ children, nth }) => {
    return (
      <S.Column>
        {children}
        {data.media.data.map(({ attributes }, index) => {
          if (index % column === nth - 1) {
            return <ImageGallery key={index} data={attributes} />;
          }
        })}
      </S.Column>
    );
  };

  return (
    <S.Section>
      <S.Content>
        <Column nth={1}>
          <Info />
        </Column>
        {column === 2 && <Column nth={2} />}
      </S.Content>
    </S.Section>
  );
}
