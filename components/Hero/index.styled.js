import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const Wrapper = styled.div`
  padding: 0 2rem;

  @media only screen and (min-width: 576px) {
    padding: 0 6rem;
    /* text-align: center; */
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  max-height: 300px;

  @media only screen and (min-width: 576px) {
    max-height: 400px;
  }
`;

const inViewAnimation = keyframes`
from
  {
    transform: translateY(1rem);
    opacity: 0;
  }
to
  {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Content = styled.div`
  animation-name: ${inViewAnimation};
  animation-duration: var(--timer);
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;
