class Repo {
    name: string;
    description: string | null;
    private: boolean;
    repoUrl: string | undefined;
    homepage: string | null;
    stars: number;
    watchers: number;
    language: string | null;
    topics: string[];
    createdAt: string;
    updatedAt: string;
    pushedAt: string;

    constructor(repo: any) {
        this.validate(repo);

        this.name = repo.name;
        this.description = repo.description;
        this.private = repo.private;
        this.repoUrl = repo.private ? undefined : repo.repoUrl;
        this.homepage = repo.homepage === '' ? null : repo.homepage;
        this.stars = repo.stars;
        this.watchers = repo.watchers;
        this.language = repo.language;
        this.topics = repo.topics;
        this.createdAt = repo.createdAt;
        this.updatedAt = repo.updatedAt;
        this.pushedAt = repo.pushedAt;
    }

    validate(repo: any) {
        if (!repo.name) {
            throw new Error('Missing required parameter: name');
        }
        if (repo.private === undefined || repo.private === null) {
            throw new Error('Missing required parameter: private');
        }
        if (repo.stars === undefined || repo.stars === null) {
            throw new Error('Missing required parameter: stars');
        }
        if (repo.watchers === undefined || repo.watchers === null) {
            throw new Error('Missing required parameter: watchers');
        }
        if (!repo.topics) {
            throw new Error('Missing required parameter: topics');
        }
        if (!repo.createdAt) {
            throw new Error('Missing required parameter: createdAt');
        }
        if (!repo.updatedAt) {
            throw new Error('Missing required parameter: updatedAt');
        }
        if (!repo.pushedAt) {
            throw new Error('Missing required parameter: pushedAt');
        }
    }
}


export default Repo