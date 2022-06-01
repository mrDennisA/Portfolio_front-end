import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */

  margin: 0 auto;
  max-width: var(--maxWidth);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
