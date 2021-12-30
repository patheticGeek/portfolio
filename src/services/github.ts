import { Octokit } from "@octokit/rest"
import { GITHUB_TOPIC, GITHUB_USERNAME } from "../consts"
const octokit = new Octokit()

export const getProjects = async () => {
  const { data } = await octokit.rest.search.repos({
    q: `${GITHUB_TOPIC} in:topics user:${GITHUB_USERNAME}`,
  })
  return data
}
