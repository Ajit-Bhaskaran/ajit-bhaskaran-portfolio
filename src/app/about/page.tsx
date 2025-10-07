import Link from 'next/link'
import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react'

export default function AboutPage() {
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
              <a href="/about" className="text-gray-100 hover:text-gray-300 transition-colors">About</a>
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
            About
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in technology, from web development to cloud engineering, 
            and the continuous learning that drives my passion for building scalable infrastructure.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-lg text-gray-300 leading-relaxed space-y-8">
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
            I believe in the power of automation and infrastructure as code to solve complex problems. 
            Whether it's optimizing database performance, designing resilient cloud architectures, or 
            implementing CI/CD pipelines, I'm passionate about creating solutions that scale with business needs 
            while maintaining high standards for security, reliability, and cost efficiency.
          </p>

          <div>
            <h2 className="text-2xl font-light text-gray-100 mb-6">Technologies & Skills</h2>
            <p className="mb-4">Here are a few technologies I've been working with recently:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Oracle</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>GitLab</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>SAS Viya</span>
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                <span>Linux</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-gray-100 mb-6">Experience</h2>
            <p className="mb-4">
              Throughout my 16+ year career, I've had the opportunity to work with amazing teams 
              and tackle complex infrastructure challenges across various industries:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>SAS Institute</strong> - Senior Platform Engineer (2023-Present)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Bureau of Meteorology</strong> - Senior Analyst DevOps Engineer (2022-2023)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>National Australia Bank</strong> - Senior Analyst DevOps Engineer (2020-2022)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Huawei</strong> - Team Lead (2010-2012)</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Oracle</strong> - Principal Consultant (2007-2010)</span>
              </li>
            </ul>
          </div>
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
