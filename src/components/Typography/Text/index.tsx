import { TextContainer } from "./styles";
import { TTextProps } from "./types";

export const Text = ({ children, size, color }: TTextProps) => {
  return (
    <TextContainer size={size} color={color}>
      {children}
    </TextContainer>
  );
};
