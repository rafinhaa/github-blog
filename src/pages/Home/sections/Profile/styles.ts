import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  border-radius: 10px;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: row;
  padding: 2rem 2rem 2rem 2.5rem;
  gap: 2rem;
  background: ${({ theme }) => theme["base-profile"]};
  top: calc(1.25rem / 2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.5rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: auto;
  }
`;
