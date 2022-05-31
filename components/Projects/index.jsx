import Card from "../Card";

import { Container } from "./index.styled";

export default function Projects(props) {
  // console.log(props);
  return (
    <Container>
      {props.data.reverse().map((item, index) => {
        return <Card key={item.id} data={item} index={index} />;
      })}
    </Container>
  );
}
