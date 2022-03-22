import React, { useState, useEffect } from 'react';
import { getAllRepos, getUser } from '../services/github'
import Repo from '../types/Repo';
import Project from './Project';

interface Props {
  reposPerPage: number,
  pagination: boolean,
  columns: number
}

function App(props: Props) {
  const reposPerPage = props.reposPerPage
  const [repos, setRepos] = useState<Repo[][]>([]);
  const [repoCount, setRepoCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      let response = await getAllRepos(reposPerPage, page);
      let user: any = await getUser();
      console.log(user)
      setRepoCount(user.public_repos + user.owned_private_repos);
      setRepos(groupArray(response, props.columns));
      response.forEach(element => {
        console.log(element.homepage)
      });
      setLoading(false);
    }
    getData();
  }, [page, reposPerPage, props]);

  const next = async () => {
    console.log(repoCount, page * reposPerPage)
    if (repoCount < page * reposPerPage) {
      return;
    }
    console.log(page);
    setPage(page + 1);
  }

  const back = async () => {
    console.log(repoCount, page * reposPerPage)
    if (page === 1) {
      return;
    }
    console.log(page);
    setPage(page - 1);
  }

  const groupArray = (arr: any[], n: number) => {
    let results = [];
    let arrLen = arr.length;
    for (let i = 0; i < Math.ceil(arrLen / n); i++) {
      let group = [];
      for (let j = 0; j < n; j++) {
        if (arr.length !== 0) {
          group.push(arr.shift());
        }
      }
      results.push(group);
    }
    return results;
  }

  return (
    <div>
      { loading ? <h1 className="text-center">Loading..</h1> : (
        <div>
          {repos.map((repoGroup, i) => {
            return (
              <div key={i} className="flex mb-10">
                {repoGroup.map((repo, j) => {
                  return (
                    <Project 
                      key={i * props.columns + j}
                      repo={repo}
                      columns={props.columns}
                    />
                  )
                })}
              </div>
            )
          })}
          {props.pagination ?
            <div className='w-full text-center'>
              <div className="inline-block">
                <button onClick={back} className="inline-block py-3 px-5 bg-slate-200 rounded-md hover:bg-slate-100 transition-colors duration-300">back</button>
                <h2 className="inline-block mx-8">{page}</h2>
                <button onClick={next} className="inline-block py-3 px-5 bg-slate-200 rounded-md hover:bg-slate-100 transition-colors duration-300">next</button>
              </div> 
            </div>
            : <></>
          }
        </div>
      )} 
    </div>
  );
}

export default App;