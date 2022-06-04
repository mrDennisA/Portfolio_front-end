import Link from "next/link";
import Image from "next/image";

// Conponents
import Heading from "../Heading";

// Styles
import { Content, Overlay } from "./index.styled";

export default function Card(props) {
  // console.log(props.data);
  const slug = props.data.attributes.slug;
  const title = props.data.attributes.content.title;
  const image = props.data.attributes.image.data[0].attributes.url;
  const index = props.index + 1;

  return (
    <Link href={`/projects/${slug}`}>
      <Content delay={index * 100}>
        <Image src={image} quality={100} layout="fill" objectFit="cover" alt="" />
        <Overlay>
          <Heading element="h4">{title}</Heading>
        </Overlay>
      </Content>
    </Link>
  );
}
