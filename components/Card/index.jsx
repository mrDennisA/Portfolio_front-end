import Link from "next/link";
import Image from "next/image";

// Styles
import { Container, Content } from "./index.styled";

export default function Card(props) {
  console.log(props.data.image.imgVokeHair);
  const { id, slug, title } = props.data;
  const index = props.index + 1;

  return (
    <Container delay={index * 100}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div>image</div>
          <div>{title}</div>
        </a>
      </Link>
    </Container>
  );
}
