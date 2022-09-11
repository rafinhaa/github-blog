import styled from "styled-components";

export const SearchContainer = styled.section`
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.75rem;
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme["base-input"]};
    border: 1px solid ${({ theme }) => theme["base-border"]};
    color: ${({ theme }) => theme["base-text"]};

    &:focus {
      border: 1px solid ${({ theme }) => theme["blue"]};
      transition: 2s;
    }
  }
`;
