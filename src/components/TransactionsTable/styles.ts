import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-spacing: 0 0.7rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 0 1rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      background: #fff;
      padding: 1rem 1rem;
      color: var(--text-body);
      font-weight: bold;

      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green-text);
      }
      &.withdraw {
        color: var(--red-text);
      }
    }
  }
`;
