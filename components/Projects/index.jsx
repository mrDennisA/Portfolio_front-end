import Card from "../Card";

import { Container } from "./index.styled";

export default function Projects(props) {
  return (
    <Container>
      {props.data.map((item, index) => {
        return <Card key={item.id} data={item} index={index} />;
      })}
    </Container>
  );
}
