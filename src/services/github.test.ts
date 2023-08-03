import { getRepos } from "./github";

const TOTAL_REPOS = 10;

describe("github", () => {
  it("returns 200 status code", async () => {
    expect(async () => await getRepos(1, 1)).not.toThrow(
      "Error fetching repos"
    );
  });

  it("returns correct amount of repos per page", async () => {
    const repoResponses = [];
    for (let i = 1; i <= TOTAL_REPOS; i++) {
      const repoResponse = getRepos(i, 1);
      repoResponses.push(repoResponse);
    }

    const repos = await Promise.all(repoResponses);
    repos.forEach((repo, index) => {
      expect(repo).toHaveLength(index + 1);
    });
  });

  it("return different repos per page", async () => {
    const repoPageOneResponse = getRepos(1, 1);
    const repoPageTwoResponse = getRepos(1, 2);
    const [repoPageOne, repoPageTwo] = await Promise.all([
      repoPageOneResponse,
      repoPageTwoResponse,
    ]);
    expect(repoPageOne[0].name).not.toEqual(repoPageTwo[0].name);
  });
});
