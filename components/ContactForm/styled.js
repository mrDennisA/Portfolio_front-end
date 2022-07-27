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
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  font-weight: 500;
`;

export const Input = styled.input`
  line-height: 20px;
  padding: 6px 0;
  box-shadow: 0 -2px 0 ${({ theme }) => theme.textColor} inset;
`;

export const TextArea = styled.textarea`
  line-height: 20px;
  padding: 6px 0;
  box-shadow: 0 -2px 0 ${({ theme }) => theme.textColor} inset;

  resize: vertical;
`;

export const Message = styled.span`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  font-size: 1rem;
  font-weight: 300;
  color: red;
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

  :hover {
    color: ${({ theme }) => theme.textColor};
    background-color: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.textColor} inset;
  }
`;
