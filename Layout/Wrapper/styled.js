import styled from "styled-components";

export const Margin = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ width }) => width};
`;

export const Padding = styled.div`
  padding: 0 clamp(1rem, 0.2709rem + 2.0253vw, 2rem);
`;
