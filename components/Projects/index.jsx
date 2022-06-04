import Card from "../Card";

import { Section, Content } from "./index.styled";

export default function Projects(props) {
  // console.log(props);
  return (
    <Section>
      <Content>
        {props.data.map((item, index) => {
          return <Card key={item.id} data={item} index={index} />;
        })}
      </Content>
    </Section>
  );
}
