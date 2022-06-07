import styled from "styled-components";

export const Section = styled.section`
  padding-top: 6rem;
  max-width: 400px;
  margin: auto;

  @media only screen and (min-width: 576px) {
    max-width: 800px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  @media only screen and (min-width: 576px) {
    flex-direction: row;
  }

  & > :first-child {
    position: relative;

    display: flex;

    background-color: var(--grey95);
    width: 100%;
    height: 100vh;
    max-height: 400px;
    box-shadow: 0 2px 4px var(--shadow01);

    @media only screen and (min-width: 576px) {
      flex: 2;
    }
  }

  & > :last-child {
    @media only screen and (min-width: 576px) {
      flex: 3;
    }
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  :first-child {
    box-shadow: 0 2px 4px var(--shadow01);
    max-height: 400px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
