import { Navigate } from "react-router-dom";
import Repo from "../types/Repo";
import GetLanguageClassName from "../utils/GetLanguageClassName";

interface Props {
  repo: Repo;
  columns: number;
}

function Project({ repo, columns }: Props) {
  // const languageText

  function handleClick() {
    if (repo.repoUrl) {
      const a = {
        to: repo.repoUrl,
        replace: false,
      };
      Navigate(a);
    }
  }

  return (
    <div
      className={`
      flex
      ${columns === 1 ? "w-full" : ""}
      ${columns === 2 ? "w-1/2" : ""}
      ${columns === 3 ? "w-1/3" : ""}
      ${columns === 4 ? "w-1/4" : ""}
      ${columns === 5 ? "w-1/5" : ""}
      `}
    >
      <div
        onClick={handleClick}
        className="w-full bg-slate-100 p-5 shadow-lg hover:scale-105 transition-all duration-300 rounded-xl mx-8"
      >
        <div className="">
          <h1 className="font-medium text-xl">{repo.name}</h1>
          <p className="font-medium text-md text-stone-800 ml-2 flex-1">
            {repo.description}
          </p>
          {/* <p className={`text-lg ${languageClassName}`}>{repo.language}</p> */}
        </div>
        {repo.homepage === null || repo.homepage === "" ? (
          <></>
        ) : (
          <div className="float-right mt-2 hover:scale-105 duration-150">
            <a className="" href={repo.homepage}>
              visit website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
