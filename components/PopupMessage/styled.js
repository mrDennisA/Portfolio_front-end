import styled from "styled-components";

export const Section = styled.section`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);

  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius};
  max-width: ${({ theme }) => theme.smallWidth};
  width: calc(100% - 1rem);

  opacity: 0;

  transition: ${({ theme }) => theme.timer} ease-in-out;

  &.active {
    opacity: 1;
    transform: translate(-50%, 0%);
  }

  &.success {
    background-color: ${({ theme }) => theme.successColor};
  }

  &.error {
    background-color: ${({ theme }) => theme.errorColor};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > :first-child {
    display: flex;
    justify-content: flex-end;

    button {
      display: flex;
      margin: -0.25rem;
      padding: 0.25rem;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  & > :last-child {
    text-align: center;
    padding: 0 1rem;
    color: white;
  }
`;
