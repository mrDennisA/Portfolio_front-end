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

export const Menu = styled.nav`
  position: relative;
  display: flex;
  gap: 1rem;

  a {
    padding: 0.25rem;
    margin: -0.25rem;
    /* transform: translateY(0); */
    transition: ${({ theme }) => theme.timer} ease-in-out;

    /* :hover:not(.active) {
      transform: translateY(-4px);
    } */
  }
`;

export const Marker = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  height: 2px;
  width: calc(${({ marker }) => marker.width + "px"} - 1rem);
  transform: translate(calc(${({ marker }) => marker.left + "px"} + 0.5rem), 2px);
  background-color: ${({ theme }) => theme.textColor};

  transition: ${({ theme }) => theme.timer} ease-in-out;
`;
