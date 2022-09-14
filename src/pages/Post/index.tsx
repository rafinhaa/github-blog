import { useParams } from "react-router-dom";
import { useGithubData } from "../../hooks/useGithubData";
import { PostInfo } from "./sections/PostInfo";

export const Post = () => {
  const { id } = useParams();
  const { getIssue, issue } = useGithubData();

  getIssue(id);

  return <main>{issue && <PostInfo post={issue} />}</main>;
};
