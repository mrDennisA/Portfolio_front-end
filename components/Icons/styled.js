import styled from "styled-components";

export const Svg = styled.svg`
  width: 32px;
  height: 32px;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.textColor};
`;

export const Rect = styled.rect`
  fill: ${({ theme }) => theme.bgColor};
`;
