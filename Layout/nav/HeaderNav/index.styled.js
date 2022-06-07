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

  a {
    line-height: 16px;
    padding: 0.5rem;
    margin: -0.5rem;
  }
`;

export const NavLink = styled.div`
  display: flex;
  gap: 1rem;

  a.active {
    color: var(--red);
  }

  a:hover:not(.active) {
    text-decoration-color: var(--red);
  }
`;
