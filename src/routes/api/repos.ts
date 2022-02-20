import { getProjects } from "$lib/github"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async ({ url }) => {
  const limit = url.searchParams.get("limit")

  const projects = await getProjects(limit ? parseInt(limit) : null)

  return { body: { projects } }
}
