import Card from "../Card";

import InView from "../../Layout/InView";

import * as S from "./index.styled";

export default function Projects(props) {
  // console.log(props);
  return (
    <S.Section>
      <S.Content>
        {props.data.map((item, index) => {
          const delay = (index + 1) * 100;
          return (
            <InView key={item.id} delay={delay}>
              <Card data={item} />
            </InView>
          );
        })}
      </S.Content>
    </S.Section>
  );
}
