import styled, { css } from "styled-components";
import { TTextProps } from "./types";

type TTextContainerProps = Omit<TTextProps, "children">;

const fontMapping = {
  s: "0.875rem",
  m: "1rem",
};

export const TextContainer = styled.p<TTextContainerProps>`
  font-size: ${({ size }) => fontMapping[size]};
  ${({ theme, color }) => {
    const colorMapping = {
      label: theme["base-label"],
      span: theme["base-span"],
      text: theme["base-text"],
    };
    return css`
      color: ${colorMapping[color]};
    `;
  }}
  weight: 400;
  line-height: "160%";
`;
