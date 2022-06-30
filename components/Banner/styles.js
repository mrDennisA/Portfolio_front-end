import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  aspect-ratio: 1/1;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    aspect-ratio: 16/9;

    &.left {
      justify-content: flex-start;
    }

    &.center {
      justify-content: center;
    }

    &.right {
      justify-content: flex-end;
    }
  }

  & > * {
    transform: translateY(50%);
  }
`;
