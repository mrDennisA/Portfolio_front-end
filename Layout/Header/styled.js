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
  display: flex;
  gap: 1rem;

  a {
    padding: 0.5rem;
    margin: -0.5rem;
  }
`;
