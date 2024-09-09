import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  button.closeModal {
    border: 0;
    align-self: flex-end;
    background: transparent;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.5);
    }
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #fff;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      // every input excluding first one
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--header-button);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1.5rem;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 10px;
`;

interface RadioBoxProps {
  $isSelected: boolean;
  $activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: blue;
  font-weight: bold;

  background: ${({ $isSelected, $activeColor }) =>
    $isSelected ? $activeColor : "#e6e6e6"};

  border: ${({ $isSelected }) => ($isSelected ? "0" : "1px solid #d7d7d7")};
  color: ${({ $isSelected }) => ($isSelected ? "#fff" : "#333")};
  border-radius: 0.25rem;

  transition: all 0.2s;

  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }

  img {
    width: 25px;
  }
`;
