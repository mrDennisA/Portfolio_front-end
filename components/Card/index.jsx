import Link from "next/link";
import Image from "next/image";

// Conponents
import Heading from "../Heading";

// Styles
import * as S from "./index.styled";

export default function Card(props) {
  // console.log(props.data.attributes.cover.data.attributes);
  const slug = props.data.attributes.slug;
  const title = props.data.attributes.content.title;
  const cover = props.data.attributes.cover.data.attributes;

  return (
    <Link href={`/projects/${slug}`}>
      <S.Content>
        <Image src={cover.url} quality={100} layout="fill" objectFit="cover" alt={cover.alternativeText} />
        <S.Overlay>
          <Heading element="h4">{title}</Heading>
        </S.Overlay>
      </S.Content>
    </Link>
  );
}
