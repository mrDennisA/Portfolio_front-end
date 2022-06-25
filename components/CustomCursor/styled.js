import styled from "styled-components";

export const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ hover }) => (hover ? 3 + "rem" : 1 + "rem")};
  height: ${({ hover }) => (hover ? 3 + "rem" : 1 + "rem")};
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 100%;
  transform: translate(-50%, -50%);

  will-change: width, height;
  z-index: 9999;
  pointer-events: none;

  transition-property: width, height;
  transition-duration: ${({ theme }) => theme.timer};
  transition-timing-function: ease-in-out;
`;
