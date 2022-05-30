import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`
  display: flex;

  background-color: grey;
  width: 100%;
  height: 400px;
  opacity: 0;

  animation-name: ${inViewAnimation};
  animation-duration: var(--timer);
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.delay + "ms"};

  a {
    width: 100%;
  }
`;
