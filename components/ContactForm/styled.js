import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 6rem;
`;

export const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  & > div:not(:last-child) {
    width: 100%;
  }

  &:disabled * {
    color: ${({ theme }) => theme.grayColor};
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  font-weight: 500;

  & > :first-child {
    /* text-transform: uppercase;
    font-size: 14px; */
    /* &::after {
      content: "*";
      color: ${({ theme }) => theme.errorColor};
    } */
  }
`;

export const Input = styled.input`
  line-height: 20px;
  padding: 6px 0;
  box-shadow: 0 -2px 0 ${({ theme }) => theme.textColor} inset;

  &::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.grayColor};
  }

  &:disabled {
    box-shadow: 0 -2px 0 ${({ theme }) => theme.grayColor} inset;
  }
`;

export const TextArea = styled.textarea`
  line-height: 20px;
  padding: 6px 0;
  box-shadow: 0 -2px 0 ${({ theme }) => theme.textColor} inset;

  resize: vertical;

  &::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.grayColor};
  }

  &:disabled {
    box-shadow: 0 -2px 0 ${({ theme }) => theme.grayColor} inset;
  }
`;

export const Message = styled.span`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.errorColor};
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;

  min-width: 160px;
  line-height: 48px;
  border-radius: 24px;
  color: ${({ theme }) => theme.bgColor};
  background-color: ${({ theme }) => theme.textColor};
  box-shadow: 0 0 0 2px transparent inset;

  transition-duration: ${({ theme }) => theme.timer};
  transition-timing-function: ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.textColor};
    background-color: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.textColor} inset;
  }

  &.active {
    color: ${({ theme }) => theme.bgColor};
    background-color: gray;
    box-shadow: 0 0 0 2px transparent inset;
    transition-duration: 0s;
    cursor: unset;
  }
`;
