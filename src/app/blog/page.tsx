import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Github } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-slate-100">Ajit Bhaskaran</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-slate-400 hover:text-teal-400 transition-colors">About</Link>
              <Link href="/#experience" className="text-slate-400 hover:text-teal-400 transition-colors">Experience</Link>
              <Link href="/#projects" className="text-slate-400 hover:text-teal-400 transition-colors">Projects</Link>
              <Link href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">Blog</Link>
              <Link href="/#contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact</Link>
              <a 
                href="https://github.com/Ajit-Bhaskaran" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <p className="text-teal-400 text-lg mb-4 font-mono">Articles & Tutorials</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-8">
              Technical Blog
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              Insights, tutorials, and case studies from 16+ years of DevOps and Platform Engineering experience. 
              From cost optimization strategies to infrastructure automation best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-sm font-mono">
            🔧 Infrastructure Automation
          </span>
          <span className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-sm font-mono">
            📊 Cloud Optimization
          </span>
          <span className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-sm font-mono">
            🛠️ DevOps Tools & Practices
          </span>
          <span className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-sm font-mono">
            🗄️ Database Management
          </span>
          <span className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-full text-sm font-mono">
            🏗️ Platform Engineering
          </span>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-slate-800 rounded-lg border border-slate-700 hover:border-teal-400 transition-colors group">
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 group-hover:text-teal-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
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
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-teal-400 hover:text-green-300 font-mono transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-slate-800 rounded-lg border border-slate-700 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Stay Updated
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new technical insights, tutorials, and case studies 
            about DevOps, cloud optimization, and platform engineering.
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
      </div>
    </main>
  )
}