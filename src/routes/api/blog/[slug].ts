import { getBlog } from "$lib/devto"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async ({ params }) => {
  const blog = await getBlog(params.slug)

  if (!blog) {
    return {
      status: 404,
      body: { error: "Not Found" }
    }
  }

  return { body: { blog } }
}
