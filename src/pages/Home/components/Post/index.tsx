import { Typography } from "../../../../components/Typography";
import { momentDate } from "../../../../ultils/MomentDate";
import { PostContainer } from "./styles";

type TPostProps = {
  issue: {
    number: number;
    title: string;
    body: string;
    created_at: string;
  };
};

export const Post = ({
  issue: { title, body, number, created_at },
}: TPostProps) => {
  return (
    <PostContainer to={`/post/${number}`}>
      <header>
        <Typography.Title size="m" color="title">
          {title}
        </Typography.Title>
        <Typography.Text size="s" color="span">
          {momentDate(created_at)}
        </Typography.Text>
      </header>
      <Typography.Text size="m" color="text">
        {body}
      </Typography.Text>
    </PostContainer>
  );
};
