import type { Article, ArticleWithBody } from "./devto"

export type Project = {
  name: string
  description: string
  language: string
  github_url: string
  website: string
  topics: string[]
}

export type Projects = Array<Project>

export type Blog = Pick<
  Article,
  | "id"
  | "title"
  | "description"
  | "slug"
  | "url"
  | "social_image"
  | "cover_image"
  | "tag_list"
  | "comments_count"
  | "readable_publish_date"
  | "reading_time_minutes"
>

export type BlogWithBody = Pick<
  ArticleWithBody,
  | "id"
  | "title"
  | "description"
  | "slug"
  | "url"
  | "social_image"
  | "cover_image"
  | "tag_list"
  | "comments_count"
  | "readable_publish_date"
  | "reading_time_minutes"
  | "body_markdown"
>

export type Blogs = Array<Blog>
