import { Client } from "@notionhq/client"
import type { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints"

const NOTION_TOKEN = import.meta.env.VITE_NOTION_TOKEN
const NOTION_BLOGS_DB = import.meta.env.VITE_NOTION_BLOGS_DB

const notion = new Client({
  auth: NOTION_TOKEN
})

export const getBlogs = async (slug?: string) => {
  const filter: QueryDatabaseParameters["filter"] = {
    and: [
      {
        property: "Published",
        checkbox: {
          equals: true
        }
      }
    ]
  }

  if (slug) {
    filter.and.push({
      property: "Slug",
      text: {
        equals: slug
      }
    })
  }

  const { has_more, results, next_cursor } = await notion.databases.query({
    database_id: NOTION_BLOGS_DB,
    filter,
    sorts: [
      {
        property: "Created",
        direction: "descending"
      }
    ]
  })

  return { has_more, results, next_cursor }
}
