import type { Articles, ArticleWithBody } from "src/types/devto"
import { DEV_TO_USERNAME } from "src/consts"
import {
  filterArticlesProperties,
  filterArticleProperties
} from "src/utils/filterData"

const API = {
  ARTICLES: `https://dev.to/api/articles?username=${DEV_TO_USERNAME}`,
  ARTICLE: `https://dev.to/api/articles/${DEV_TO_USERNAME}/{SLUG}`
}

export const getBlogs = async () => {
  const res = await fetch(API.ARTICLES)
  const data = (await res.json()) as Articles

  return data.map((article) => filterArticlesProperties(article))
}

export const getBlog = async (slug: string) => {
  const res = await fetch(API.ARTICLE.replace("{SLUG}", slug))
  const data = (await res.json()) as ArticleWithBody

  return filterArticleProperties(data)
}
