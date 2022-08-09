import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  padding-bottom: 6rem;
`;

export const Content = styled.div`
  display: grid;
  gap: 4rem ${({ theme }) => theme.padding};

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: ${({ theme }) => theme.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
