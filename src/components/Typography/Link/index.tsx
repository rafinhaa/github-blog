import { LinkContainer } from "./styles";
import { TLinkProps } from "./types";

export const Link = ({ children }: TLinkProps) => {
  return <LinkContainer>{children}</LinkContainer>;
};
