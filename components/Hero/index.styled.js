import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100vh;
  max-height: 300px;

  @media only screen and (min-width: 576px) {
    max-height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 600px;
`;
