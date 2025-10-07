import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Github } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

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

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Ajit-Bhaskaran" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-100 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-gray-100 mb-6">
            Recent writing
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Insights, tutorials, and case studies from 16+ years of DevOps and Platform Engineering experience. 
            From cost optimization strategies to infrastructure automation best practices.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors text-sm"
                >
                  Read more
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Back to home */}
          <div className="mt-16 pt-8 border-t border-gray-700">
          <Link href="/" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}