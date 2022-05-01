import type { RequestHandler } from "@sveltejs/kit"

const RESUME_LINK =
  "https://drive.google.com/file/d/1kheMFiIROTbyZNlOPw0tkm7UGV-5Di5c/view?usp=sharing"

export const get: RequestHandler = async () => {
  return {
    headers: { Location: RESUME_LINK },
    status: 302
  }
}
