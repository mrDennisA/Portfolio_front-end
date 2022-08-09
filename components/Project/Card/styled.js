import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover > :first-child {
    transform: scale(1.025);
  }
`;

export const Media = styled.div`
  z-index: 1;
  position: relative;
  display: grid;
  aspect-ratio: 2/3;
  width: 100%;
  height: 100%;
  overflow: hidden;

  transition: ${({ theme }) => theme.timer} ease-in-out;
  box-shadow: ${({ theme }) => theme.boxShadow + " " + theme.shadowColor};

  img {
    object-fit: cover;
    object-position: top;
    border-radius: ${({ theme }) => theme.radius};
  }
`;

export const Info = styled.div``;
