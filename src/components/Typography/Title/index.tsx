import { TitleContainer } from "./styles";
import { TTitleProps } from "./types";

export const Title = ({ children, size, color }: TTitleProps) => {
  return (
    <TitleContainer size={size} color={color}>
      {children}
    </TitleContainer>
  );
};
