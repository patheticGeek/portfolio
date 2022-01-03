import { getBlogs } from "$lib/notion"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async ({ params }) => {
  const {
    results: [blog]
  } = await getBlogs(params.slug)

  if (!blog) {
    return {
      status: 404,
      body: {
        error: "Not Found"
      }
    }
  }

  return { body: { blog } }
}
