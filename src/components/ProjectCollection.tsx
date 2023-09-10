import { useState, useEffect } from "react";
import { getRepos } from "../services/github";
import Repo from "../types/Repo";
import RepoCard from "./RepoCard";
import LoadingCard from "./LoadingCard";
import Pagination from "./Pagination";

interface Props {
  perPage: number;
  pagination: boolean;
}

function ProjectCollection({ perPage, pagination }: Props) {
  //const [allRepos, setAllRepos] = useState<Repo[]>([]);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number | undefined>();

  useEffect(() => {
    async function getData() {
      const response = await getRepos(perPage, page);
      if (response.length === 0) {
        setTotalPages(page - 1);
        setPage(page - 1);
      }
      setRepos(response);
      setLoading(false);
    }
    setLoading(true);
    getData();
  }, [page, perPage]);

  const paginationComponent = (
    <Pagination totalPages={totalPages} page={page} setPage={setPage} />
  );

  const loadingCards = Array(perPage)
    .fill(null)
    .map((_, index) => <LoadingCard key={index} />);

  const repoCards = repos.map((repo, index) => (
    <RepoCard key={index} repo={repo} />
  ));

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-6">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? loadingCards : repoCards}
        </div>
      </div>
      {pagination ? paginationComponent : null}
    </div>
  );
}

export default ProjectCollection;
