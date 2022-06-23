import styled from "styled-components";

export const Margin = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const Padding = styled.div`
  padding: 0 1rem;

  @media only screen and (min-width: 36rem) {
    padding: 0 2rem;
  }
`;
