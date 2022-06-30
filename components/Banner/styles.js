import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;

  aspect-ratio: 1/1;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    aspect-ratio: 16/9;
  }

  & > * {
    transform: translatey(50%);
  }
`;
