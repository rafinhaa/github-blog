import ReactMarkdown from "react-markdown";

import { PostContentContainer } from "./styles";

interface PostContentProps {
  content: string;
}

export const Content = ({ content }: PostContentProps) => {
  return (
    <PostContentContainer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </PostContentContainer>
  );
};
