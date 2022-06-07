import styled from "styled-components";

export const Container = styled.div`
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &.active {
    opacity: 0;
  }
`;
