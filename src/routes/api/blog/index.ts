import { getBlogs } from "$lib/notion"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async () => {
  const blogs = await getBlogs()

  return {
    body: {
      blogs
    }
  }
}
