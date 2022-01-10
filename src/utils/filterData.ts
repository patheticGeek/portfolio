import type { Blog, BlogWithBody } from "src/types"
import type { Article, ArticleWithBody } from "src/types/devto"

const getBlogUrl = (username: string, slug: string) =>
  `https://dev.to/${username}/${slug}`

export const filterArticlesProperties = (article: Article): Blog => {
  const {
    id,
    title,
    description,
    slug,
    social_image,
    cover_image,
    tag_list,
    comments_count,
    readable_publish_date,
    reading_time_minutes,
    user: { username }
  } = article

  return {
    id,
    title,
    description,
    slug,
    social_image,
    cover_image,
    tag_list,
    comments_count,
    readable_publish_date,
    reading_time_minutes,
    url: getBlogUrl(username, slug)
  }
}

export const filterArticleProperties = (
  article: ArticleWithBody
): BlogWithBody => {
  const {
    id,
    title,
    description,
    slug,
    social_image,
    cover_image,
    tag_list,
    comments_count,
    readable_publish_date,
    reading_time_minutes,
    body_markdown,
    user: { username }
  } = article

  return {
    id,
    title,
    description,
    slug,
    social_image,
    cover_image,
    tag_list,
    comments_count,
    readable_publish_date,
    reading_time_minutes,
    body_markdown,
    url: getBlogUrl(username, slug)
  }
}
