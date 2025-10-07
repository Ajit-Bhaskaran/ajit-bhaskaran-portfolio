import Link from 'next/link'
import { ArrowRight, Github, Mail, Linkedin, ExternalLink } from 'lucide-react'

export default function WorkPage() {
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
              <a href="/work" className="text-gray-100 hover:text-gray-300 transition-colors">Work</a>
              <a href="/about" className="text-gray-400 hover:text-gray-100 transition-colors">About</a>
              <a href="/blog" className="text-gray-400 hover:text-gray-100 transition-colors">Blog</a>
              <a href="/contact" className="text-gray-400 hover:text-gray-100 transition-colors">Contact</a>
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
            Work
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            A showcase of projects and initiatives I've led, focusing on infrastructure automation, 
            cloud optimization, and platform engineering solutions.
          </p>
        </div>
      </div>

      {/* Work Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-16">
          {/* Project 1 */}
          <div className="group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                AWS Cost Optimization Platform
              </h3>
              <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Led a comprehensive cloud cost optimization initiative that reduced monthly AWS expenditure by 40% 
              through automation, monitoring, and strategic resource management. Implemented automated cost control 
              measures and stakeholder reporting frameworks.
            </p>
            
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">AWS</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Python</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Terraform</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Cloudability</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Jenkins</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                Infrastructure Automation Platform
              </h3>
              <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Built platform infrastructure using Infrastructure as Code practices with Terraform and Ansible. 
              Automated AWS RDS provisioning and validation with single-click deployment capabilities, 
              achieving 90% reduction in deployment time.
            </p>
            
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Terraform</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Ansible</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Python</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Jenkins</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">GitLab</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                SAS Viya Platform Optimization
              </h3>
              <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Provided expert-level support for SAS Viya platform, optimizing PostgreSQL and Oracle database 
              performance and implementing comprehensive monitoring systems for high availability environments, 
              achieving 99.9% uptime.
            </p>
            
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">SAS Viya</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">PostgreSQL</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Oracle</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Linux</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Monitoring</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                Reading between the lines
              </h3>
              <a href="/blog" className="text-gray-400 hover:text-gray-100 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              In 2023, I documented my journey from web development to cloud engineering through a series of 
              technical blog posts covering AWS cost optimization, Terraform best practices, and SAS Viya administration.
            </p>
            
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Technical Writing</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">DevOps</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Cloud Engineering</span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Best Practices</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
