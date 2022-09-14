import { useNavigate } from "react-router-dom";

import { Info } from "../../../../components/Info";
import { Typography } from "../../../../components/Typography";
import { IIssue } from "../../../../context/GithubDataContext/types";
import { momentDate } from "../../../../ultils/MomentDate";

import { PostInfoContainer } from "./styles";

const previousPage = -1;

export type TPostInfoProps = {
  post: IIssue;
};

export const PostInfo = ({ post }: TPostInfoProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(previousPage);
  };

  const comments =
    post.comments > 1
      ? `${post.comments} comentários`
      : `${post.comments} comentário`;

  return (
    <PostInfoContainer>
      <header>
        <Typography.Link as="button" type="back" onClick={goBack}>
          voltar
        </Typography.Link>
        <Typography.Link href={post.html_url} type="external">
          ver no github
        </Typography.Link>
      </header>

      <Typography.Title color="title" size="l">
        {post.title}
      </Typography.Title>

      <footer>
        <Info type="username">{post.user.login}</Info>
        <Info type="date">{momentDate(post.created_at)}</Info>
        <Info type="comments">{comments}</Info>
      </footer>
    </PostInfoContainer>
  );
};
