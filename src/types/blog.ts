export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readingTime: number
  published: boolean
  author: string
  coverImage?: string
}

export interface BlogMetadata {
  title: string
  excerpt: string
  date: string
  tags: string[]
  published: boolean
  author: string
  coverImage?: string
}

export interface BlogTag {
  name: string
  count: number
  slug: string
}

export interface BlogCategory {
  name: string
  slug: string
  description: string
  color: string
}

