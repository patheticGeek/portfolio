import type { Projects } from "src/types"
import { Octokit } from "@octokit/rest"
import { GITHUB_TOPIC, GITHUB_USERNAME } from "../consts"
const octokit = new Octokit()

export const getProjects = async (): Promise<Projects> => {
  // get the projects which has this topic and are of the user specified
  const { data } = await octokit.rest.search.repos({
    q: `${GITHUB_TOPIC} in:topics user:${GITHUB_USERNAME}`
  })

  return data.items.map(
    ({ name, description, homepage, language, html_url, topics }) => ({
      name,
      description,
      language,
      github_url: html_url,
      website: homepage,
      // filter the topic which is used for labeling which repos to show
      topics: topics.filter((topic) => topic !== GITHUB_TOPIC)
    })
  )
}
