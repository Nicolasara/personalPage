import { useState, useEffect } from 'react';
import { getRepos, getUser } from '../services/github'
import Repo from '../types/Repo';
import RepoCard from './RepoCard';
import Pagination from './Pagination';

interface Props {
    perPage: number,
    pagination: boolean,
    columns: number
}

function App({ perPage, pagination, columns }: Props) {
    const [ repos, setRepos ] = useState<Repo[][]>([]);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(true);
    const [ gotAllRepos, setGotAllRepos ] = useState(false);
    const [ lastPage, setLastPage ] = useState(1);

    useEffect(() => {
        async function getData() {
            let response = await getRepos(perPage, page);
            if (response.length === 0) {
                console.log(page, lastPage)
                setLastPage(page - 1);
                setPage(page - 1);
            } else if (response.length < perPage) {
                setGotAllRepos(true);
                setLastPage(page);
            }
            setRepos(groupArray(response, columns));
            setLoading(false);
        }
        getData();
    }, [ page ]);

    const next = async () => {
        if (gotAllRepos && lastPage === page) return;
        setPage(page + 1);
    }

    const back = async () => {
        if (page === 1) return;
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

    const paginationComponent = <Pagination next={next} back={back} page={page} />;

    if (loading) {
        return (
            <h1 className="text-center">Loading..</h1>
        )
    }

    return (
        <div>
            <div>
                {repos.map((repoGroup, i) => {
                    return (
                        <div key={i} className="flex mb-10">
                            {repoGroup.map((repo, j) => {
                                return (
                                    <RepoCard
                                        key={i * columns + j}
                                        repo={repo}
                                    // columns={props.columns}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
                {pagination ? paginationComponent : null}
            </div>
        </div>
    );
}

export default App;