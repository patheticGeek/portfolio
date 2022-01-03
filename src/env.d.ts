/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_GITHUB_TOPIC: string
  readonly VITE_NOTION_TOKEN: string
  readonly VITE_NOTION_BLOGS_DB: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
