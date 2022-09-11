import { Typography } from "../../../../components/Typography";
import { PostContainer } from "./styles";

export const Post = () => {
  return (
    <PostContainer>
      <header>
        <Typography.Title size="m" color="title">
          JavaScript data types and data structures
        </Typography.Title>
        <Typography.Text size="s" color="span">
          Há 1 dia
        </Typography.Text>
      </header>
      <Typography.Text size="m" color="text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </Typography.Text>
    </PostContainer>
  );
};
