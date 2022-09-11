import styled from "styled-components";

export const PostInfoContainer = styled.section`
  width: 100%;
  border-radius: 10px;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme["base-profile"]};
  top: calc(1.25rem / 2);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.25rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }
`;
