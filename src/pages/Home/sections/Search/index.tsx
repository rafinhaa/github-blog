import { Typography } from "../../../../components/Typography";
import { SearchContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGithubData } from "../../../../hooks/useGithubData";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export const Search = () => {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });
  const { getIssues, totalPosts } = useGithubData();

  const handleSearchPosts = (data: SearchFormInput) => {
    console.log(data);
    getIssues(data.query);
  };

  const formattedPosts =
    totalPosts > 1 ? `${totalPosts} publicações` : `${totalPosts} publicação`;

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <Typography.Title size="s" color="subtitle">
          Publicações
        </Typography.Title>
        <Typography.Text size="s" color="span">
          {formattedPosts}
        </Typography.Text>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchContainer>
  );
};
