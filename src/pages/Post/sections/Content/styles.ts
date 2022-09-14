import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }

  h1,
  h1,
  h3 {
    color: ${({ theme }) => theme["blue"]};
  }

  a {
    color: ${({ theme }) => theme["base-label"]};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
`;
