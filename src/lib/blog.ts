import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, BlogMetadata } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  return fs.readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const readingTimeResult = readingTime(content)

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    content,
    date: data.date || '',
    tags: data.tags || [],
    readingTime: Math.ceil(readingTimeResult.minutes),
    published: data.published !== false,
    author: data.author || 'Ajit Bhaskaran',
    coverImage: data.coverImage,
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => 
    post.tags.some((postTag) => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => 
    post.tags.some((tag) => 
      tag.toLowerCase() === category.toLowerCase()
    )
  )
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  const allPosts = getAllPosts().filter(post => post.slug !== currentSlug)
  
  // Find posts with similar tags
  const relatedPosts = allPosts
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
  
  return relatedPosts
}

