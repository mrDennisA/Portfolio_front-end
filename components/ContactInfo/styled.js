import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > :nth-child(2) {
    font-size: clamp(1.25rem, 0.3125rem + 4.6875vw, 2rem);
    font-weight: 500;
  }
`;
