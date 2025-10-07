import Link from 'next/link'
import { Github, Mail, Linkedin, MapPin, Calendar } from 'lucide-react'

export default function ContactPage() {
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
              <a href="/work" className="text-gray-400 hover:text-gray-100 transition-colors">Work</a>
              <a href="/about" className="text-gray-400 hover:text-gray-100 transition-colors">About</a>
              <a href="/blog" className="text-gray-400 hover:text-gray-100 transition-colors">Blog</a>
              <a href="/contact" className="text-gray-100 hover:text-gray-300 transition-colors">Contact</a>
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
            Contact
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Have something in mind? I'm always interested in discussing new opportunities, 
            collaboration, or just having a chat about technology and infrastructure.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-light text-gray-100 mb-6">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-100 font-medium">Email</h3>
                  <a href="mailto:ajit.kanoli@gmail.com" className="text-gray-300 hover:text-gray-100 transition-colors">
                    ajit.kanoli@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Linkedin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-100 font-medium">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/ajitbhaskaran/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    linkedin.com/in/ajitbhaskaran
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Github className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-100 font-medium">GitHub</h3>
                  <a 
                    href="https://github.com/Ajit-Bhaskaran" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    github.com/Ajit-Bhaskaran
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-100 font-medium">Location</h3>
                  <p className="text-gray-300">Melbourne, Australia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Calendar className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-100 font-medium">Availability</h3>
                  <p className="text-gray-300">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h2 className="text-2xl font-light text-gray-100 mb-6">Send a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              Note: This is a static form. For now, please reach out directly via email or LinkedIn.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-medium text-gray-100 mb-4">Connect with me</h3>
          <div className="flex space-x-6">
            <a 
              href="mailto:ajit.kanoli@gmail.com" 
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ajitbhaskaran/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Ajit-Bhaskaran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-8">
          <Link href="/" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
