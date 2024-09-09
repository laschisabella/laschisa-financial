import styled from "styled-components";

export const Container = styled.header`
  background: var(--header-bg);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--header-button);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.1s;
    font-weight: bold;

    &:hover {
      filter: brightness(0.8);
    }
  }

  img {
    width: 300px;
  }

  @media (max-width: 600px) {
    button {
      padding: 0 0.8rem;
      height: 2rem;
    }

    img {
      width: 150px;
    }
  }
`;
