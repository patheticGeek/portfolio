export const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME
export const GITHUB_TOPIC = import.meta.env.VITE_GITHUB_TOPIC
export const DEV_TO_USERNAME = import.meta.env.VITE_DEV_TO_USERNAME

export const RESUME_LINK =
  "https://drive.google.com/file/d/1ejzXnBOe21Irx8sMquftTHbCemj7sXMN/view?usp=sharing"

export const HOME_LINKS = [
  { label: "📨 Email", href: "mailto:geekpathetic@gmail.com" },
  { label: "🧑‍💻 Github", href: "https://github.com/patheticGeek" },
  { label: "🐦 Twitter", href: "https://twitter.com/pathetic_geek" },
  { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/pathetic-geek" },
  { label: "🕴️ Resume", href: RESUME_LINK },
  {
    label: "👻 Snapchat",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
]

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume", newTab: true }
]
