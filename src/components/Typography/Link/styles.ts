import styled from "styled-components";
import { IType } from "./";

export const LinkContainer = styled.a<IType>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme["blue"]};
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background-color: transparent;
  flex-direction: ${({ type }) => (type === "back" ? "row-reverse" : "row")};

  svg {
    height: 0.75rem;
    width: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme["blue"]};
  }
`;
