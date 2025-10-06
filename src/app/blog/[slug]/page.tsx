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
    <main className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-slate-100">Ajit Bhaskaran</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-slate-400 hover:text-slate-100 transition-colors">About</Link>
              <Link href="/#experience" className="text-slate-400 hover:text-slate-100 transition-colors">Experience</Link>
              <Link href="/#projects" className="text-slate-400 hover:text-slate-100 transition-colors">Projects</Link>
              <Link href="/blog" className="text-slate-400 hover:text-slate-100 transition-colors">Blog</Link>
              <Link href="/#contact" className="text-slate-400 hover:text-slate-100 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-teal-400 hover:text-green-300 mb-8 transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-700 text-slate-300 text-sm rounded-full font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500">
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
            <div className="text-slate-400 font-mono">
              By {post.author}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 md:p-12">
          <div className="prose prose-lg max-w-none prose-invert">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 text-center">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.slug} className="bg-slate-800 rounded-lg border border-slate-700 hover:border-green-400 transition-colors">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedPost.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-700 text-slate-300 text-xs rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="hover:text-teal-400 transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-400 mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-teal-400 hover:text-green-300 font-mono transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="bg-slate-800 border border-slate-700 rounded-lg mx-4 sm:mx-6 lg:mx-8 my-16">
        <div className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            Enjoyed This Article?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Subscribe to get notified when I publish new technical insights about DevOps, 
            cloud optimization, and platform engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-green-400 text-gray-900 font-mono rounded-md hover:bg-green-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-slate-400 hover:text-slate-100 transition-colors font-mono"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Articles
            </Link>
            
            <Link 
              href="/" 
              className="inline-flex items-center text-teal-400 hover:text-green-300 transition-colors font-mono"
            >
              Back to Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}