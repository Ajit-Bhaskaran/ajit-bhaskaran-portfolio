import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 2)

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-lg font-medium text-gray-100 hover:text-gray-300 transition-colors">
              Ajit Bhaskaran
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#work" className="text-gray-400 hover:text-gray-100 transition-colors">Work</a>
              <a href="/#about" className="text-gray-400 hover:text-gray-100 transition-colors">About</a>
              <a href="/blog" className="text-gray-400 hover:text-gray-100 transition-colors">Blog</a>
              <a href="/#contact" className="text-gray-400 hover:text-gray-100 transition-colors">Contact</a>
            </div>

            <Link href="/blog" className="text-gray-400 hover:text-gray-100 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-gray-100 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to blog
            </Link>
          </div>

          {/* Article meta */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readingTime} min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-gray-100 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-medium text-gray-100 mb-6">Related articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="group">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <span className="text-sm text-gray-500">
                        {new Date(relatedPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short'
                        })}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {relatedPost.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  )
}