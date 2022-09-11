import { useNavigate } from "react-router-dom";

import { Info } from "../../../../components/Info";
import { Typography } from "../../../../components/Typography";

import { PostInfoContainer } from "./styles";

const previousPage = -1;

export const PostInfo = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(previousPage);
  };

  return (
    <PostInfoContainer>
      <header>
        <Typography.Link as="button" type="back" onClick={goBack}>
          voltar
        </Typography.Link>
        <Typography.Link href="#" type="external">
          ver no github
        </Typography.Link>
      </header>

      <Typography.Title color="title" size="l">
        JavaScript data types and data structures
      </Typography.Title>

      <footer>
        <Info type="username">cameronwll</Info>
        <Info type="date">Há 1 dia</Info>
        <Info type="comments">5 comentários</Info>
      </footer>
    </PostInfoContainer>
  );
};
