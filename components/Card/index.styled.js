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

export const Content = styled.a`
  position: relative;
  overflow: hidden;
  display: flex;
  background-color: grey;
  width: 100%;
  height: 100vh;
  max-height: 200px;
  opacity: 0;
  cursor: pointer;

  @media only screen and (min-width: 576px) {
    max-height: 300px;
  }

  @media only screen and (min-width: 768px) {
    height: unset;
    aspect-ratio: 1/1;
    max-height: 400px;
  }

  animation-name: ${inViewAnimation};
  animation-duration: var(--timer);
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-delay: ${(props) => props.delay + "ms"};

  & > span {
    transition: var(--timer) ease-in-out;
  }

  :hover > span {
    transform: scale(1.2);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  transition: var(--timer) ease-in-out;

  :hover {
    background-color: var(--white80);
  }

  h4 {
    z-index: 1;
    position: relative;
    transform: scale(1.4);
    opacity: 0;
    padding: 0 1rem;
    transition: var(--timer) ease-in-out;
  }

  :hover > h4 {
    opacity: 1;
    transform: scale(1);
  }
`;
