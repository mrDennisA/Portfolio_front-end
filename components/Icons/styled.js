import styled, { keyframes } from "styled-components";

export const Svg = styled.svg`
  width: 32px;
  height: 32px;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.textColor};

  transition: fill 0.2s ease-in-out;

  &.active {
    fill: ${({ theme }) => theme.bgColor};
  }
`;

export const RectBg = styled.rect`
  fill: ${({ theme }) => theme.bgColor};
`;

export const Rect = styled.rect`
  fill: ${({ theme }) => theme.textColor};

  transition: fill 0.2s ease-in-out;

  &.active {
    fill: ${({ theme }) => theme.bgColor};
  }
`;

// Bar Open/Close
const barAnimTopTrue = keyframes`
0% {
  transform: translate(4px, 4px);
}
50% {
  transform: translate(4px, 15px) ;
}
100%{
  transform: translate(4px, 15px) rotate(45deg);
}
`;

const barAnimTopFalse = keyframes`
0% {
  transform: translate(4px, 15px) rotate(45deg);
 }
50% {
  transform: translate(4px, 15px) ;
}
100%{
  transform: translate(4px, 4px);
}
`;

const barAnimBottomTrue = keyframes`
0% {
  transform: translate(4px, 26px);
}
50% {
  transform: translate(4px, 15px) ;
}
100%{
  transform: translate(4px, 15px) rotate(-45deg);
}
`;

const barAnimBottomFalse = keyframes`
0% {
  transform: translate(4px, 15px) rotate(-45deg);
}
50% {
  transform: translate(4px, 15px) ;
}
100%{
  transform: translate(4px, 26px);
}
`;

export const Menu = styled.svg`
  width: 32px;
  height: 32px;

  & > rect {
    fill: ${({ theme }) => theme.textColor};
    height: 2px;

    &.noAnim {
      animation: none;
    }

    transform-origin: 12px 1px;
    transition: ${({ theme }) => theme.timer} ease-in-out;

    animation-duration: ${({ theme }) => theme.timer};
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    &.active {
      fill: ${({ theme }) => theme.bgColor};
    }
  }

  & > :nth-child(1) {
    transform: translate(4px, 4px);
    width: 24px;
    animation-name: ${barAnimTopFalse};

    &.active {
      animation-name: ${barAnimTopTrue};
    }
  }

  & > :nth-child(2) {
    transform: translate(4px, 15px);
    width: 12px;
    opacity: 1;

    &.active {
      opacity: 0;
    }
  }

  & > :nth-child(3) {
    transform: translate(4px, 26px);
    width: 24px;

    animation-name: ${barAnimBottomFalse};

    &.active {
      animation-name: ${barAnimBottomTrue};
    }
  }
`;
