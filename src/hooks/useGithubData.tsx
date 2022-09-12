import { useContext } from "react";
import { GithubDataContext } from "../context/GithubDataContext";

export const useGithubData = () => {
  return useContext(GithubDataContext);
};
