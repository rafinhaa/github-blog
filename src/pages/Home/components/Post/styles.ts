import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const maxLines = (lines: number) => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines};
  `;
};

export const PostContainer = styled(Link)`
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme["base-post"]};
  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme["base-label"]};
    transition: 0.2s;
    cursor: pointer;
  }

  p {
    ${maxLines(4)}
  }

  header {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h1 {
      flex: 1;
      ${maxLines(2)}
    }

    p {
      width: max-content;
    }
  }
`;
