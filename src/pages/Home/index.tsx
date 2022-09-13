import { useGithubData } from "../../hooks/useGithubData";
import { Post } from "./components/Post";
import { Profile } from "./sections/Profile";
import { Search } from "./sections/Search";
import { PostListContainer } from "./styles";

export const Home = () => {
  const { issues } = useGithubData();

  return (
    <section>
      <Profile />
      <Search />
      <PostListContainer>
        {issues.total_count > 0 &&
          issues.items.map((issue) => <Post key={issue.id} issue={issue} />)}
      </PostListContainer>
    </section>
  );
};
