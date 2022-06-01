import Card from "../Card";

import { Section } from "./index.styled";

export default function Projects(props) {
  // console.log(props);
  return (
    <Section>
      {props.data.map((item, index) => {
        return <Card key={item.id} data={item} index={index} />;
      })}
    </Section>
  );
}
