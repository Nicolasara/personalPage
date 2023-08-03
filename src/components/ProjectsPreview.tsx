import { useState, useEffect } from "react";
import { getRepos, getUser } from "../services/github";
import Repo from "../types/Repo";
import RepoCard from "./RepoCard";
import LoadingCard from "./LoadingCard";
import Pagination from "./Pagination";

function ProjectsPreview() {
  const [repos, setRepos] = useState<Repo[] | undefined>();
  const [loading, setLoading] = useState(true);

  const reposInPreview = 3;

  useEffect(() => {
    async function getData() {
      let response = await getRepos(reposInPreview, 1);
      setRepos(response);
    }
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4">
        {repos
          ? repos.map((repo, index) => <RepoCard key={index} repo={repo} />)
          : Array(3)
              .fill(null)
              .map((_, index) => <LoadingCard key={index} />)}
      </div>
    </div>
  );
}

export default ProjectsPreview;
