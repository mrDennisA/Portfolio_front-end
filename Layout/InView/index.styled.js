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

export const Conteiner = styled.div`
  opacity: 0;

  animation-name: ${inViewAnimation};
  animation-duration: var(--timer);
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.delay + "ms"};
`;
