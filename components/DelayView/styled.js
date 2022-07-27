import styled, { keyframes } from "styled-components";

const inViewAnimation = keyframes`
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
 100% {
    transform: translateY(0);
    opacity: 1;
  }`;

export const Container = styled.div`
  transform: translateY(1rem);
  opacity: 0;

  &.active {
    animation-name: ${inViewAnimation};
    animation-duration: ${({ theme }) => theme.timer};
    animation-delay: ${({ delay }) => delay + "ms"};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }
`;
