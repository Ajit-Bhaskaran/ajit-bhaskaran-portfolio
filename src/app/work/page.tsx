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
      <div className="pt-32 pb-8 px-6">
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

      {/* Projects Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-light text-gray-100">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
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
                through automation, monitoring, and strategic resource management.
              </p>
              
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">AWS</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Python</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Terraform</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Cloudability</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
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
                Automated AWS RDS provisioning achieving 90% reduction in deployment time.
              </p>
              
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Terraform</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Ansible</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Python</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Jenkins</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
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
                performance and implementing comprehensive monitoring systems achieving 99.9% uptime.
              </p>
              
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">SAS Viya</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Oracle</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Linux</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-100 group-hover:text-gray-300 transition-colors">
                  Technical Blog & Documentation
                </h3>
                <a href="/blog" className="text-gray-400 hover:text-gray-100 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Documented my journey from web development to cloud engineering through technical blog posts 
                covering AWS optimization, Terraform best practices, and SAS Viya administration.
              </p>
              
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Technical Writing</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">DevOps</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Cloud Engineering</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">Best Practices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-light text-gray-100">Where I've Worked</h2>
          </div>
          
          <div className="space-y-8">
            {/* SAS Institute */}
            <div className="border-l-2 border-gray-600 pl-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-100">Senior Platform Engineer</h3>
              </div>
              <p className="text-gray-400 mb-3">SAS Institute</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Oversee and maintain Linux-based server environments ensuring optimal performance and security</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Provide expert-level support for SAS Viya platform with high availability and optimal performance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Manage and optimize PostgreSQL and Oracle databases with comprehensive backup and recovery procedures</span>
                </li>
              </ul>
            </div>

            {/* Bureau of Meteorology */}
            <div className="border-l-2 border-gray-600 pl-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-100">Senior Analyst DevOps Engineer</h3>
              </div>
              <p className="text-gray-400 mb-3">Bureau of Meteorology</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Provisioned non-production environments for development activities using GitLab</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Managed AWS cloud security including IAM, KMS, VPC, and network configurations</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Automated AWS RDS provisioning and validation using Jenkins Pipeline and Python</span>
                </li>
              </ul>
            </div>

            {/* NAB */}
            <div className="border-l-2 border-gray-600 pl-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-100">Senior Analyst DevOps Engineer</h3>
              </div>
              <p className="text-gray-400 mb-3">National Australia Bank</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Built platform infrastructure on AWS using Terraform, Ansible, and Python</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Achieved 40% reduction in monthly cloud expenditure through cost optimization strategies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Implemented automated cost control measures and scheduled start/stop of non-production instances</span>
                </li>
              </ul>
            </div>

            {/* Previous Roles */}
            <div className="border-l-2 border-gray-600 pl-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-100">Previous Roles</h3>
              </div>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Huawei</strong> - Team Lead</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Oracle</strong> - Principal Consultant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-light text-gray-100">Technologies & Skills</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Cloud Technologies</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>AWS (VPC, RDS, EC2, S3, CloudFront)</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Kubernetes</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Docker</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>CloudWatch</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Infrastructure</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Terraform</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Ansible</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Jenkins</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>GitLab CI/CD</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Databases</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Oracle (9i-18c, RAC, ASM)</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Greenplum</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Scripting & Tools</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Python</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Shell Scripts</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Perl</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-3 h-3 text-gray-500 mr-2" />
                  <span>Groovy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <div className="py-8 px-6 border-t border-gray-700">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-gray-100 hover:text-gray-300 transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
