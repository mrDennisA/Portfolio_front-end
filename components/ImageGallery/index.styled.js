import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  gap: 1rem;

  @media only screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    padding: 2rem;
    background-color: var(--grey95);
    box-shadow: 0 0 2px var(--shadow02) inset;
    & > span {
      box-shadow: 0 2px 4px var(--shadow01);
    }
  }
`;
