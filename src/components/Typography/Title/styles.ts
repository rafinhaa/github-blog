import styled from "styled-components";
import { TTitleProps } from "./types";

type TTitleContainerProps = Omit<TTitleProps, "children">;

const fontMapping = {
  s: "1.125rem",
  m: "1.25rem",
  l: "1.5rem",
};

export const TitleContainer = styled.h1<TTitleContainerProps>`
  font-size: ${({ size }) => fontMapping[size]};
  color: ${({ theme, color }) =>
    color === "title" ? theme["base-title"] : theme["base-subtitle"]};
  weight: 700;
  line-height: "160%";
`;
