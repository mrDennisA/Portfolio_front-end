import styled from "styled-components";

export const Breadcrumbs = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;

  a {
    padding: 0.25rem;
    margin: -0.25rem;
    text-decoration: underline transparent;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    transition: ${({ theme }) => theme.timer} ease-in-out;

    &:hover {
      text-decoration: underline ${({ theme }) => theme.textColor};
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    }
  }
`;
