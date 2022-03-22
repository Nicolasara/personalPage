import Repo from '../types/Repo';

const url = require('url')

export async function getAllRepos(pp: number, page: number, type="owner"): Promise<Repo[]> {
    let urlObject = {
        protocol: "https",
        hostname: "api.github.com/user/repos",
        query: {
            per_page: pp,
            page: page,
            type: type,
        },
    };
    console.log(url.format(urlObject));
    const headers = {
        "accept": "application/vnd.github.v3+json",
        "Authorization": `token ${process.env.REACT_APP_TOKEN}`
    }
    return getPromise(url.format(urlObject), headers);
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

const getPromise = (url: RequestInfo, headers={}): Promise<any> => {
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