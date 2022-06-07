import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);

  margin-top: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 4px 8px var(--shadow01);
  max-width: 400px;
  width: calc(100% - 1rem);

  opacity: 0;

  transition: var(--timer) ease;

  &.active {
    opacity: 1;
    transform: translate(-50%, 0%);
  }

  &.success {
    background-color: var(--green);
  }

  &.error {
    background-color: #c41f2b;
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

      margin: -0.5rem;
      padding: 0.5rem;
      cursor: pointer;

      svg {
        width: 24px;
        height: 24px;

        box-shadow: 0 0 0 1px transparent inset;
        transition: var(--timer) ease;
      }

      &:hover svg {
        box-shadow: 0 0 0 1px var(--white) inset;
      }

      .bar-closed .st0 {
        transition: var(--timer) ease;
        stroke: var(--white);
      }

      &:hover .bar-closed .st0 {
        stroke: var(--white);
      }
    }
  }

  & > :last-child {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    padding: 0 1rem;
    color: var(--white);
  }
`;
