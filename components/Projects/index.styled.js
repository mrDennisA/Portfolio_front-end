import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding-bottom: 8rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  @media only screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
