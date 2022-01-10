/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_GITHUB_TOPIC: string
  readonly VITE_DEV_TO_USERNAME: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
