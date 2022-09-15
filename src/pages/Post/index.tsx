import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGithubData } from "../../hooks/useGithubData";
import { Content } from "./sections/Content";
import { PostInfo } from "./sections/PostInfo";

export const Post = () => {
  const { id } = useParams();
  const { getIssue, issue } = useGithubData();

  useEffect(() => {
    getIssue(id);
  }, []);

  return (
    <section>
      {issue && (
        <div>
          <PostInfo post={issue} />
          <Content content={issue.body} />
        </div>
      )}
    </section>
  );
};
