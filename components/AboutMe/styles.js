import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  gap: 2rem;
  padding-bottom: 6rem;

  @media only screen and (min-width: 576px) {
    grid-template-columns: 3fr 2fr;
    gap: ${({ theme }) => theme.padding};
  }
`;

export const RichText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 100%;
`;

export const Media = styled.div`
  display: grid;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  max-height: 480px;
  box-shadow: ${({ theme }) => theme.boxShadow + " " + theme.shadowColor};

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    /* aspect-ratio: 2/3; */
  }

  img {
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius};

    @media only screen and (min-width: ${({ theme }) => theme.sm}) {
      /* object-fit: contain; */
    }
  }
`;
