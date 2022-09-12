import { Info } from "../../../../components/Info";
import { Typography } from "../../../../components/Typography";
import { useGithubData } from "../../../../hooks/useGithubData";
import { ProfileContainer, ProfileContent } from "./styles";

export const Profile = () => {
  const { profile } = useGithubData();

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="" />
      <ProfileContent>
        <header>
          <Typography.Title color="title" size="l">
            {profile.name}
          </Typography.Title>
          <Typography.Link href={profile.html_url} type="external">
            github
          </Typography.Link>
        </header>
        <Typography.Text color="text" size="m">
          {profile.bio}
        </Typography.Text>
        <footer>
          <Info type="username">{profile.login}</Info>
          <Info type="company">{profile.company}</Info>
          <Info type="followers">{profile.followers} seguidores</Info>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  );
};
