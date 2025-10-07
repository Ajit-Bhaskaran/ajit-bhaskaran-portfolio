import Link from 'next/link'
import { ArrowRight, Github, Mail, Linkedin, ExternalLink } from 'lucide-react'

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
              <a href="/#about" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
                More about me
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="/#contact" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 mb-12">Work</h2>
          
          <div className="space-y-16">
            {/* Project 1 */}
            <div className="group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                  AWS Cost Optimization Platform
                </h3>
                <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
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
                <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
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
                <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
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
                <a href="/blog" className="text-gray-400 hover:text-gray-600 transition-colors">
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
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 mb-8">About</h2>
          
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Hello! My name is Ajit and I enjoy creating solutions that solve real-world infrastructure challenges. 
              My journey in technology began with web development, building dynamic websites using PHP and MySQL. 
              This foundation sparked my curiosity for backend systems and led me to specialize in Oracle database 
              administration, where I mastered performance tuning and optimization techniques.
            </p>
            
            <p>
              Over time, I naturally evolved into cloud technologies and DevOps practices, leveraging my deep 
              understanding of systems to build scalable, automated infrastructure solutions. Today, I'm 
              expanding my expertise by diving deep into Kubernetes orchestration and containerization strategies. 
              This continuous learning approach has allowed me to lead initiatives that reduced cloud costs by 40% 
              and achieved 99.9% uptime for critical platforms.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Python</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Terraform</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>AWS</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Docker</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Kubernetes</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>PostgreSQL</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Jenkins</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Ansible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-100 mb-8">Recent writing</h2>
          
          <div className="space-y-8">
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
          
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
              Read all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800">
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