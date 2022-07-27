import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding-bottom: 6rem;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    grid-template-columns: 2fr 3fr;
  }
`;

export const TableCell = styled.td`
  display: grid;
  gap: 0.5rem;

  &:first-child {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    justify-self: end;

    @media only screen and (min-width: ${({ theme }) => theme.sm}) {
      grid-template-columns: 1fr auto auto;
    }
  }

  &:last-child span:first-child {
    font-weight: 600;
  }
`;

export const List = styled.div`
  display: grid;

  @media only screen and (min-width: ${({ theme }) => theme.sm}) {
    gap: 2rem;
    grid-template-columns: 2fr 3fr;
  }

  & > :last-child {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Li = styled.li`
  display: flex;
  gap: 0.5rem;

  &:not(:last-child)::after {
    content: "-";
  }
`;
