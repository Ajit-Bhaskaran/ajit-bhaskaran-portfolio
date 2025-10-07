import Link from 'next/link'
import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react'

export default function Home() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-light text-gray-100 mb-6 leading-tight">
              Hello! I'm Ajit 👋
            </h1>
            
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                I am a <strong>Senior Platform Engineer</strong> currently building scalable infrastructure 
                and automation solutions at <strong>SAS Institute</strong> 🏗️.
              </p>
              
              <p>
                You'd often find me tinkering with cloud technologies, DevOps practices, infrastructure 
                as code, and system optimization ⎯ working on projects like cost optimization, 
                automation pipelines, and monitoring solutions, or exploring the latest in Kubernetes and container orchestration.
              </p>
              
              <p>
                In the past, I've worked with great teams at places like <strong>Bureau of Meteorology</strong>, 
                <strong> National Australia Bank</strong>, <strong>Huawei</strong>, and <strong>Oracle</strong> 💭
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/about" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
                More about me
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="/contact" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Work Preview */}
            <div className="group">
              <h3 className="text-xl font-medium text-gray-100 mb-4 group-hover:text-gray-300 transition-colors">
                <Link href="/work">Work</Link>
              </h3>
              <p className="text-gray-300 mb-4">
                Infrastructure automation, cloud optimization, and platform engineering projects 
                that delivered measurable business impact.
              </p>
              <Link href="/work" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors text-sm">
                View projects →
              </Link>
            </div>

            {/* About Preview */}
            <div className="group">
              <h3 className="text-xl font-medium text-gray-100 mb-4 group-hover:text-gray-300 transition-colors">
                <Link href="/about">About</Link>
              </h3>
              <p className="text-gray-300 mb-4">
                My journey from web development to cloud engineering, with 16+ years of experience 
                building scalable infrastructure solutions.
              </p>
              <Link href="/about" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors text-sm">
                Learn more →
              </Link>
            </div>

            {/* Blog Preview */}
            <div className="group">
              <h3 className="text-xl font-medium text-gray-100 mb-4 group-hover:text-gray-300 transition-colors">
                <Link href="/blog">Blog</Link>
              </h3>
              <p className="text-gray-300 mb-4">
                Technical insights, tutorials, and case studies covering DevOps best practices, 
                cloud optimization, and infrastructure automation.
              </p>
              <Link href="/blog" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors text-sm">
                Read articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Writing Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light text-gray-100">Recent writing</h2>
            <Link href="/blog" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
              View all →
            </Link>
          </div>
          
          <div className="space-y-6">
            <article className="group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                  <Link href="/blog/aws-cost-optimization-case-study">
                    Achieving 40% Cost Reduction: AWS Optimization Case Study
                  </Link>
                </h3>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <p className="text-gray-400 text-sm">
                How I led a comprehensive cloud cost optimization initiative that reduced monthly AWS expenditure by 40% 
                through automation, monitoring, and strategic resource management.
              </p>
            </article>

            <article className="group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                  <Link href="/blog/terraform-ansible-best-practices">
                    Building Resilient Infrastructure with Terraform and Ansible
                  </Link>
                </h3>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <p className="text-gray-400 text-sm">
                Best practices for combining Terraform and Ansible to create robust, maintainable infrastructure 
                automation workflows.
              </p>
            </article>

            <article className="group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                  <Link href="/blog/kubernetes-deployment-strategies">
                    Kubernetes Deployment Strategies: A DevOps Engineer's Guide
                  </Link>
                </h3>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <p className="text-gray-400 text-sm">
                Explore different Kubernetes deployment strategies including rolling updates, blue-green deployments, 
                and canary releases with practical examples and best practices.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-100 mb-8">Have something in mind?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Reach out at <a href="mailto:ajit.kanoli@gmail.com" className="text-gray-100 hover:text-gray-300 transition-colors">ajit.kanoli@gmail.com</a>
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="mailto:ajit.kanoli@gmail.com" className="text-gray-400 hover:text-gray-100 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ajitbhaskaran/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}