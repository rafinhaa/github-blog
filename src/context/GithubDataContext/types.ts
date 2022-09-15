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

export interface IIssue {
  title: string;
  body: string;
  id: number;
  number: number;
  html_url: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
  };
}
export interface IIssues {
  total_count: number;
  items: IIssue[];
}

export interface IProfileContextType {
  profile: IProfile;
  issues: IIssues;
  issue: IIssue;
  totalPosts: number;
  getProfileInfo: () => Promise<void>;
  getIssues: (query: string) => Promise<void>;
  getIssue: (id: string | undefined) => Promise<void>;
}

export interface ProfileProviderProps {
  children: ReactNode;
}
