import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    line-height: 16px;

    &:first-child {
      display: none;
    }
  }

  a {
    line-height: 16px;
    padding: 0.5rem;
    margin: -0.5rem;

    :hover {
      text-decoration-color: var(--red);
    }
  }
`;
