import { ReactNode } from "react";

export type TTextProps = {
  size: "s" | "m";
  color: "span" | "text" | "label";
  children: ReactNode;
};
