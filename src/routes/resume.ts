import type { RequestHandler } from "@sveltejs/kit"
import { RESUME_LINK } from "src/consts"

export const get: RequestHandler = async () => {
  return {
    headers: { Location: RESUME_LINK },
    status: 302
  }
}
