import styled from "styled-components";

export const Transition = styled.div`
  opacity: 1;
  /* transition: opacity 2s ease-in-out; */

  &.active {
    opacity: 0;
  }
`;
