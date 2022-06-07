import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Components
import Heading from "../Heading";
import InView from "../../Layout/InView";
import LinkList from "../LinkList";

import * as S from "./index.styled";

export default function About(props) {
  // console.log(props);
  const { url, alternativeText } = props.data.cover.data.attributes;
  return (
    <S.Section>
      <InView delay={0}>
        <S.Content>
          <div>
            <Image src={url} layout="fill" objectFit="cover" alt={alternativeText} />
          </div>
          <S.Element>
            <Heading>{props.data.content.title}</Heading>
            <S.Text>
              <ReactMarkdown>{props.data.content.richText}</ReactMarkdown>
            </S.Text>
            <LinkList data={props.data.links} />
          </S.Element>
        </S.Content>
      </InView>
    </S.Section>
  );
}
