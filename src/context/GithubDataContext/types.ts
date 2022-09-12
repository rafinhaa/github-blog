import { ReactNode } from "react";

export interface IProfile {
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
  company: string;
  followers: number;
  html_url: string;
}

export interface IProfileContextType {
  profile: IProfile;
  getProfileInfo: () => Promise<void>;
}

export interface ProfileProviderProps {
  children: ReactNode;
}
