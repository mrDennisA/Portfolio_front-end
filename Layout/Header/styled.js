import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  height: 64px;
  padding-bottom: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  gap: 1rem;

  a {
    padding: 0.5rem;
    margin: -0.5rem;
  }
`;

export const Slider = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: calc(${({ slider }) => slider.width + "px"} - 1rem);
  transform: translate(calc(${({ slider }) => slider.left + "px"} + 0.5rem), 2px);
  background-color: ${({ theme }) => theme.textColor};

  transition: ${({ theme }) => theme.timer} ease-in-out;
`;
