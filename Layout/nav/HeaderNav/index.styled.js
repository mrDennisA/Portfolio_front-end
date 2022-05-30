import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const Wrapper = styled.div`
  padding: 0 1rem;

  @media only screen and (min-width: 576px) {
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  height: 48px;

  & * {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--lightOrange);
  }
`;

export const Logo = styled.div`
  line-height: 16px;
  padding: 0.5rem;
  margin: -0.5rem;
`;

export const Nav = styled.nav``;

export const NavLink = styled.div`
  display: flex;
  gap: 1rem;

  a {
    line-height: 16px;
    padding: 0.5rem;
    margin: -0.5rem;

    text-decoration: underline;
    text-decoration-color: transparent;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;

    transition: var(--timer);

    &.active {
      color: var(--red);
    }

    :hover:not(.active) {
      text-decoration-color: var(--red);
    }
  }
`;

export const SideLink = styled.div``;
