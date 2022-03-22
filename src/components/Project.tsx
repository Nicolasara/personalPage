import React from "react";
import Repo from "../types/Repo";

interface Props {
    repo: Repo
    columns: number
}

function Project(props: Props) {
    const repo = props.repo
    return (
        <div className={`
                flex
                ${props.columns === 1 ? "w-full" : ""}
                ${props.columns === 2 ? "w-1/2" : ""}
                ${props.columns === 3 ? "w-1/3" : ""}
                ${props.columns === 4 ? "w-1/4" : ""}
                ${props.columns === 5 ? "w-1/5" : ""}
            `} >
            <a href={(repo.private ? "javascript:;" : repo.html_url)} className="w-full bg-slate-100 p-5 shadow-lg hover:scale-105 transition-all duration-300 rounded-xl mx-8">
                <div className="">
                    <h1 className="font-medium text-xl">{repo.name}</h1>
                    <p className="font-medium text-md text-stone-800 ml-2 flex-1">{repo.description}</p>
                </div>
                { (repo.homepage === null || repo.homepage === "") ? <></> : (
                    <div className="float-right mt-2 hover:scale-105 duration-150">
                        <a className="" href={repo.homepage}>visit website</a>
                    </div>
                )}
            </a>    
        </div>
    )
}

export default Project;