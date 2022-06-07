import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 400px;
  gap: 2rem;
  padding: 2rem;

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: grid;
  grid-template-rows: 1rem auto 1fr;
  font-size: 14px;
  font-weight: 400;
`;

export const Input = styled.input`
  font-size: 1rem;
  line-height: 20px;
  padding: 10px 8px;
  margin-top: 2px;

  box-shadow: 0 0 0 1px var(--grey35), 0 0 0 3px transparent;
  transition: box-shadow var(--timer) ease-in-out;

  :hover {
    box-shadow: 0 0 0 1px var(--grey35), 0 0 0 3px var(--shadow01);
  }

  :focus {
    box-shadow: 0 0 0 1px var(--red), 0 0 0 3px var(--red50);
  }
`;

export const Textarea = styled.textarea`
  font-size: 1rem;
  line-height: 20px;
  padding: 6px 8px;
  margin-top: 2px;

  box-shadow: 0 0 0 1px var(--grey35), 0 0 0 3px transparent;
  transition: box-shadow var(--timer) ease-in-out;
  resize: vertical;

  :hover {
    box-shadow: 0 0 0 1px var(--grey35), 0 0 0 3px var(--shadow01);
  }

  :focus {
    box-shadow: 0 0 0 1px var(--red), 0 0 0 3px var(--red50);
  }
`;

export const Button = styled.button`
  line-height: 16px;
  padding: 0.5rem;
  margin: -0.5rem;
  cursor: pointer;

  &.active {
    color: var(--red);
    cursor: unset;
  }

  :hover:not(.active) {
    text-decoration-color: var(--red);
  }
`;
