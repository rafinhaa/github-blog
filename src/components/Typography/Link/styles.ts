import styled from "styled-components";
import { TLinkProps } from "./types";

type TLinkContainerProps = Omit<TLinkProps, "children">;

export const LinkContainer = styled.p<TLinkContainerProps>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme["blue"]};
  weight: 700;
  line-height: "160%";
`;
