import styled from "styled-components";

export const Container = styled.div`
  transform: translateY(1rem);
  opacity: 0;
  transition-duration: 0.2s;

  &.active {
    transition-delay: ${({ delay }) => delay + "ms"};
    transform: translateY(0);
    opacity: 1;
  }
`;
