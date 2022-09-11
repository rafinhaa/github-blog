import { Typography } from "../../../../components/Typography";
import { SearchContainer } from "./styles";

export const Search = () => {
  return (
    <SearchContainer>
      <header>
        <Typography.Title size="s" color="subtitle">
          Publicações
        </Typography.Title>
        <Typography.Text size="s" color="span">
          6 publicações
        </Typography.Text>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  );
};
