import { Post } from "./components/Post";
import { Profile } from "./sections/Profile";
import { Search } from "./sections/Search";
import { PostListContainer } from "./styles";

export const Home = () => {
  return (
    <section>
      <Profile />
      <Search />
      <PostListContainer>
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </section>
  );
};
