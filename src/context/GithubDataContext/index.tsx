import { createContext, FC, useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IProfile, IProfileContextType, ProfileProviderProps } from "./types";

const GITHUB_BLOG_PROFILE_STORAGE_KEY = "@githubBlog:profile";
const gitHubUser = import.meta.env.VITE_GITHUB_USERNAME;

export const GithubDataContext = createContext<IProfileContextType>({
  profile: {} as IProfile,
  getProfileInfo: async () => undefined,
});

export const GithubDataProvider: FC<ProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<IProfile>(() => {
    const storedProfileData = localStorage.getItem(
      GITHUB_BLOG_PROFILE_STORAGE_KEY
    );
    if (storedProfileData) return JSON.parse(storedProfileData) as IProfile;
    return {} as IProfile;
  });

  const getProfileInfo = useCallback(async () => {
    const { data } = await api.get(`/users/${gitHubUser}`);

    setProfile(data);
    localStorage.setItem(GITHUB_BLOG_PROFILE_STORAGE_KEY, JSON.stringify(data));
  }, []);

  useEffect(() => {
    const storedProfileData = localStorage.getItem(
      GITHUB_BLOG_PROFILE_STORAGE_KEY
    );

    if (storedProfileData) {
      const { login } = JSON.parse(storedProfileData) as IProfile;
      if (login === gitHubUser) return;
    }
    getProfileInfo();
  }, []);

  return (
    <GithubDataContext.Provider
      value={{
        profile,
        getProfileInfo,
      }}
    >
      {children}
    </GithubDataContext.Provider>
  );
};
