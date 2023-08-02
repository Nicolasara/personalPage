import Repo from '../types/Repo';
import axios from 'axios';

export async function getRepos(perPage: number, page: number): Promise<Repo[]> {
    const url = `https://ykdg2r22r1.execute-api.us-east-1.amazonaws.com/prod/repos/${perPage}/${page}`
    const response = await axios.get(url);
    if (response.status !== 200) {
        throw new Error("Error fetching repos");
    } else {
        const repos: Repo[] = response.data.map((repo: any) => new Repo(repo));
        return repos;
    }
}
