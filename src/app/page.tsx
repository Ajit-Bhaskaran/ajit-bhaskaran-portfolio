import Link from 'next/link'
import { ArrowRight, Github, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react'
import ExperienceTabs from '@/components/ExperienceTabs'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold text-slate-100 hover:text-teal-400 transition-colors">Ajit Bhaskaran</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">About</Link>
              <Link href="#experience" className="text-slate-400 hover:text-teal-400 transition-colors">Experience</Link>
              <Link href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors">Projects</Link>
              <Link href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">Blog</Link>
              <Link href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact</Link>
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

      {/* Hero Section */}
      <section className="pt-32 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <p className="text-teal-400 text-lg mb-4 font-mono">Hi, my name is</p>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
              Ajit Bhaskaran.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
              I build scalable infrastructure.
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
              I'm a Senior Platform Engineer specializing in transforming infrastructure through automation, 
              optimization, and innovation. Currently focused on building reliable, cost-effective solutions 
              that scale with business needs.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-4 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-4 font-mono">
                <span className="text-teal-400">01.</span> About Me
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="text-slate-400 leading-relaxed space-y-4">
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
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>Python</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>Terraform</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>AWS</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>Docker</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>Kubernetes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>Jenkins</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 text-teal-400 mr-2" />
                    <span>Ansible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pt-4 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 font-mono">
            <span className="text-teal-400">02.</span> Where I've Worked
          </h2>
          
          <ExperienceTabs />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="pt-4 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-4 font-mono">
            <span className="text-teal-400">03.</span> Some Things I've Built
          </h2>
          
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                  <div className="text-sm text-teal-400 mb-2 font-mono">Featured Project</div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">AWS Cost Optimization Platform</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Led a comprehensive cloud cost optimization initiative that reduced monthly AWS expenditure by 40% 
                    through automation, monitoring, and strategic resource management. Implemented automated cost control 
                    measures and stakeholder reporting frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 text-sm">
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">AWS</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Python</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Terraform</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Cloudability</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Jenkins</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">40%</div>
                  <div className="text-slate-400">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                  <div className="text-sm text-teal-400 mb-2 font-mono">Featured Project</div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">Infrastructure Automation Platform</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Built platform infrastructure using Infrastructure as Code practices with Terraform and Ansible. 
                    Automated AWS RDS provisioning and validation with single-click deployment capabilities, 
                    achieving 90% reduction in deployment time.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 text-sm">
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Terraform</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Ansible</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Python</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Jenkins</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">GitLab</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">90%</div>
                  <div className="text-slate-400">Faster Deployments</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                  <div className="text-sm text-teal-400 mb-2 font-mono">Featured Project</div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">SAS Viya Platform Optimization</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Provided expert-level support for SAS Viya platform, optimizing PostgreSQL and Oracle database 
                    performance and implementing comprehensive monitoring systems for high availability environments, 
                    achieving 99.9% uptime.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 text-sm">
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">SAS Viya</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">PostgreSQL</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Oracle</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Linux</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Monitoring</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
                  <div className="text-slate-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pt-4 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 font-mono">
            <span className="text-teal-400">04.</span> Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-teal-400 transition-colors">
              <div className="text-sm text-teal-400 mb-2 font-mono">2024</div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                <Link href="/blog/aws-cost-optimization-case-study" className="hover:text-teal-400 transition-colors">
                  Achieving 40% Cost Reduction: AWS Optimization Case Study
                </Link>
              </h3>
              <p className="text-slate-400 mb-4">
                How I led a comprehensive cloud cost optimization initiative that reduced monthly AWS expenditure by 40% 
                through automation, monitoring, and strategic resource management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">AWS</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Cost Optimization</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Automation</span>
              </div>
            </article>

            <article className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-teal-400 transition-colors">
              <div className="text-sm text-teal-400 mb-2 font-mono">2024</div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                <Link href="/blog/terraform-ansible-best-practices" className="hover:text-teal-400 transition-colors">
                  Building Resilient Infrastructure with Terraform and Ansible
                </Link>
              </h3>
              <p className="text-slate-400 mb-4">
                Best practices for combining Terraform and Ansible to create robust, maintainable infrastructure 
                automation workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Terraform</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Ansible</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Infrastructure</span>
              </div>
            </article>

            <article className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-teal-400 transition-colors">
              <div className="text-sm text-teal-400 mb-2 font-mono">2024</div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                <Link href="/blog/sas-viya-platform-administration" className="hover:text-teal-400 transition-colors">
                  SAS Viya Platform Administration: Best Practices
                </Link>
              </h3>
              <p className="text-slate-400 mb-4">
                Comprehensive guide to managing SAS Viya environments, including performance optimization, 
                troubleshooting common issues, and implementing monitoring solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">SAS Viya</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Platform Engineering</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Monitoring</span>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center px-8 py-4 border border-teal-400 text-teal-400 font-mono hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-4 pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-400 text-lg mb-4 font-mono">04. What's Next?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <Link 
            href="mailto:ajit.kanoli@gmail.com" 
            className="inline-flex items-center px-8 py-4 border border-teal-400 text-teal-400 font-mono hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
          >
            Say Hello
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              Built with Next.js and Tailwind CSS
            </div>
            <div className="flex space-x-6">
              <a href="mailto:ajit.kanoli@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ajitbhaskaran/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Ajit-Bhaskaran" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}