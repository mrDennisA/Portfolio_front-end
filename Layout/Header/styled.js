import styled from "styled-components";

export const Header = styled.header`
  position: relative;
`;

export const Content = styled.div`
  position: relative;
`;

export const Logo = styled.a`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(1rem, 2rem);
  display: flex;
  padding: 0.25rem;
  margin: -0.25rem;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    transform: translate(2rem, 2rem);
  }
`;

export const Button = styled.button`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-1rem, 2rem);

  display: flex;
  padding: 0.25rem;
  margin: -0.25rem;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    display: none;
  }
`;

export const Desktop = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-2rem, 2rem);
  display: none;
  gap: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    display: flex;
  }

  a {
    line-height: 32px;
    padding: 0.25rem;
    margin: -0.25rem;

    transition: ${({ theme }) => theme.timer} ease-in-out;
  }
`;

export const Marker = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  transform: translate(calc(${({ marker }) => (marker ? marker.left + "px" : "none")} + 0.25rem), -2px);
  height: 2px;
  width: calc(${({ marker }) => marker.width} - 0.5rem);
  background-color: ${({ theme }) => theme.textColor};

  transition-duration: ${({ theme }) => theme.timer};
  transition-timing-function: ease-in-out;
`;

export const Mobile = styled.nav`
  position: fixed;
  inset: 0 0 0 0;
  transform: translateY(-100%);

  display: grid;
  grid-template-rows: 1fr auto;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  transition-duration: ${({ theme }) => theme.timer};
  transition-timing-function: ease-in-out;

  &.active {
    background-color: ${({ theme }) => theme.textColor};
    transform: translateY(0);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    display: none;
  }

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translate(0, -2rem);
    transition: 1s;

    &.visible {
      transform: translate(0, 0);
    }

    a {
      color: ${({ theme }) => theme.bgColor};
      font-size: 48px;
      &.active {
        text-decoration: underline;
        text-decoration-thickness: 2px;
      }
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    height: 64px;

    a {
      padding: 0.25rem;
      margin: -0.25rem;
    }
  }
`;
