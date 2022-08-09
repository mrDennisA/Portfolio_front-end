// Components
import Card from "../Card";

// Styles
import * as S from "./styled";

export default function ProjectList({ data }) {
  // console.log(data);

  return (
    <S.Section>
      <S.Content>
        {data.map(({ attributes }, index) => {
          return <Card key={index} data={attributes} />;
        })}
      </S.Content>
    </S.Section>
  );
}
