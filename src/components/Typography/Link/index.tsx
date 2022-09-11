import {
  faChevronLeft,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, ReactNode } from "react";
import { LinkContainer } from "./styles";

export interface IType {
  type: "external" | "back";
}

export type TLinkProps = ComponentProps<typeof LinkContainer> &
  IType & {
    children: ReactNode;
  };

export const Link = ({ children, type, ...rest }: TLinkProps) => {
  const iconMapping = {
    back: faChevronLeft,
    external: faUpRightFromSquare,
  };

  const icon = iconMapping[type];

  return (
    <LinkContainer type={type} {...rest}>
      {children} <FontAwesomeIcon icon={icon} />
    </LinkContainer>
  );
};
