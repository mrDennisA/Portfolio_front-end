import Image from "next/image";

// Components
import Heading from "../Heading";

import { Container, Wrapper, Section, Content } from "./index.styled";

export default function Hero(props) {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Content>
            <Heading>{props.data.content.title}</Heading>
          </Content>
        </Section>
      </Wrapper>
    </Container>
  );
}
