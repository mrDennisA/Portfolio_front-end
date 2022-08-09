import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
`;

export const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.padding};

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* @media only screen and (min-width: ${({ theme }) => theme.lg}) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    gap: ${({ theme }) => theme.padding};
  }
`;

export const Media = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow + " " + theme.shadowColor};

  img {
    border-radius: ${({ theme }) => theme.radius};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding};
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }
`;
