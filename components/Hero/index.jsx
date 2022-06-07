import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// Components
import Heading from "../Heading";
import Wrapper from "../../Layout/Wrapper";
import InView from "../../Layout/InView";
import LinkList from "../LinkList";

// Styles
import * as S from "./index.styled";

export default function Hero(props) {
  const { title, richText } = props.data.content;
  return (
    <Wrapper>
      <S.Section>
        <InView delay={0}>
          <S.Content>
            <Heading>{title}</Heading>
            {richText && <ReactMarkdown>{richText}</ReactMarkdown>}
            {props.data.links && <LinkList data={props.data.links} />}
          </S.Content>
        </InView>
      </S.Section>
    </Wrapper>
  );
}
