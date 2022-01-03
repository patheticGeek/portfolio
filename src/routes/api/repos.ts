import { getProjects } from "./../../services/github"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async () => {
  const projects = await getProjects()

  return {
    body: {
      projects
    }
  }
}
