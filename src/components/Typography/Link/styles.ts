import styled from "styled-components";

export const LinkContainer = styled.a`
  font-size: 0.75rem;
  color: ${({ theme }) => theme["blue"]};
  font-weight: 700;
  line-height: "160%";
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 0.75rem;
    width: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme["blue"]};
  }
`;
