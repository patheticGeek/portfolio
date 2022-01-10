import { getBlogs } from "$lib/devto"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async () => {
  const blogs = await getBlogs()

  return { body: { blogs } }
}
