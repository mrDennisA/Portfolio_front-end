import React from "react";
import ReactMarkdown from "react-markdown";

// Components
import Heading from "../Heading";
import Wrapper from "../../Layout/Wrapper";
import InView from "../../Layout/InView";
import LinkList from "../LinkList";

// Styles
import * as S from "./index.styled";
import styles from "./index.module.css";

export default function Hero(props) {
  const { title, richText } = props.data.content;
  return (
    <Wrapper>
      <section className={styles.section}>
        <InView delay={0}>
          <div className={styles.content}>
            <Heading>{title}</Heading>
            {richText && <ReactMarkdown>{richText}</ReactMarkdown>}
            {props.data.links && <LinkList data={props.data.links} />}
          </div>
        </InView>
      </section>
    </Wrapper>
  );
}
