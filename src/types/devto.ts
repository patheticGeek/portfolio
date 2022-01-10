export interface Article {
  type_of: "article"
  id: number
  title: string
  description: string
  cover_image: string
  readable_publish_date: string
  social_image: string
  tag_list: Array<string>
  tags: string
  slug: string
  path: string
  url: string
  canonical_url: string
  comments_count: number
  positive_reactions_count: number
  public_reactions_count: number
  collection_id: null | number
  created_at: string
  edited_at: null | string
  crossposted_at: null
  published_at: string
  last_comment_at: string
  published_timestamp: string
  reading_time_minutes: number
  user: {
    name: string
    username: string
    twitter_username: null | string
    github_username: null | string
    website_url: null | string
    profile_image: string
    profile_image_90: string
  }
  organization?: {
    name: string
    username: string
    slug: string
    profile_image: string
    profile_image_90: string
  }
}

export interface ArticleWithBody extends Article {
  body_html: string
  body_markdown: string
}

export type Articles = Array<Article>
