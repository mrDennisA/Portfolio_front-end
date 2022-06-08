import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Components
import Heading from "../Heading";
import InView from "../../Layout/InView";
import LinkList from "../LinkList";

// Styles
import styles from "./about.module.css";

export default function About(props) {
  // console.log(props);
  const { url, alternativeText } = props.data.cover.data.attributes;
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <InView delay={0}>
          <div>
            <Image src={url} layout="fill" objectFit="cover" alt={alternativeText} />
          </div>
        </InView>
        <InView delay={100}>
          <div className={styles.info}>
            <Heading>{props.data.content.title}</Heading>
            <div className={styles.text}>
              <ReactMarkdown>{props.data.content.richText}</ReactMarkdown>
            </div>
            <LinkList data={props.data.links} />
          </div>
        </InView>
      </div>
    </section>
  );
}
