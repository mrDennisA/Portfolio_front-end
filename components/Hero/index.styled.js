import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  max-height: 400px;

  & * {
    font-size: 20px;
    font-weight: 300;
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
