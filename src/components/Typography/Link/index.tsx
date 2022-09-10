import {
  faChevronLeft,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, ReactNode } from "react";
import { LinkContainer } from "./styles";

type TLinkProps = ComponentProps<typeof LinkContainer> & {
  children: ReactNode;
  type: "back" | "external";
};

export const Link = ({ children, type, ...rest }: TLinkProps) => {
  const IconRight = () => {
    return (
      <>
        {children} <FontAwesomeIcon icon={faUpRightFromSquare} />
      </>
    );
  };

  const IconLeft = () => {
    return (
      <>
        <FontAwesomeIcon icon={faChevronLeft} /> {children}
      </>
    );
  };

  const childrenMapping = {
    back: IconLeft,
    external: IconRight,
  };

  const Children = childrenMapping[type];

  return (
    <LinkContainer {...rest}>
      <Children />
    </LinkContainer>
  );
};
