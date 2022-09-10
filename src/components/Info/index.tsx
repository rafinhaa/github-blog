import {
  faBuilding,
  faCalendarDay,
  faComment,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";
import { InfoLabelContainer } from "./styles";

type InfoLabelProps = {
  children: ReactNode;
  type: "username" | "company" | "followers" | "date" | "comments";
};

export const Info: FC<InfoLabelProps> = ({ children, type }) => {
  const iconMapping = {
    username: faGithub,
    company: faBuilding,
    followers: faUserGroup,
    date: faCalendarDay,
    comments: faComment,
  };

  const icon = iconMapping[type];

  return (
    <InfoLabelContainer>
      <FontAwesomeIcon icon={icon} />
      {children}
    </InfoLabelContainer>
  );
};
