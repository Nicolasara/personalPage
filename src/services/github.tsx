import Repo from '../types/Repo';
import axios from 'axios';

const url = require('url')

export async function getRepos(perPage: number, page: number, type = "owner"): Promise<Repo[]> {
    const url = `https://ykdg2r22r1.execute-api.us-east-1.amazonaws.com/prod/repos/${perPage}/${page}`
    const response = await axios.get(url);
    if (response.status !== 200) {
        throw new Error("Error fetching repos");
    } else {
        const repos: Repo[] = response.data.map((repo: any) => new Repo(repo));
        console.log(response.data);
        console.log(repos);
        return repos;
    }
}

export async function getUser() {
    let urlObject = {
        protocol: "https",
        hostname: "api.github.com/user",
    };
    const headers = {
        "accept": "application/vnd.github.v3+json",
        "Authorization": `token ${process.env.REACT_APP_TOKEN}`
    }
    return getPromise(url.format(urlObject), headers);
}

const getPromise = (url: RequestInfo, headers = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then(data => {
                resolve(data);
            });
    });
}