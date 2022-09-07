import { ReactNode } from "react";

export type TTitleProps = {
  size: "s" | "m" | "l";
  color: "title" | "subtitle";
  children: ReactNode;
};
