'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface Experience {
  company: string
  title: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    company: 'SAS Institute',
    title: 'Senior Platform Engineer',
    responsibilities: [
      'Oversee and maintain Linux-based server environments to ensure optimal performance and security',
      'Provide expert-level support for SAS Viya platform, ensuring high availability and optimal performance',
      'Manage and optimize PostgreSQL and Oracle databases with automated backup and recovery procedures',
      'Act as primary contact for critical system incidents, employing rapid problem-solving skills'
    ]
  },
  {
    company: 'Bureau of Meteorology',
    title: 'Senior Analyst DevOps Engineer',
    responsibilities: [
      'Provisioned Non-Production environments for development activities using GitLab',
      'Managed GitLab administration involving setting up projects, groups, users, access, and patching',
      'Monitored production environment deployments and ensured stable health of resources through automated alerting',
      'Managed AWS cloud security (IAM, KMS, Network Interface, VPC, Subnets) in production and non-production environments',
      'Automated AWS RDS provisioning and validation between RDS instances using Jenkins Pipeline and Python'
    ]
  },
  {
    company: 'National Australia Bank',
    title: 'Senior Analyst DevOps Engineer',
    responsibilities: [
      'Built Platform Infrastructure on AWS for multiple capabilities using Terraform, Ansible, Shell Scripting, Python, and Groovy',
      'Worked extensively on cloud cost optimization and visualization using Cloudability, resulting in 40% reduction in monthly cloud expenditure',
      'Implemented automated cost control measures, such as scheduled start/stop of non-production instances',
      'Conducted regular cost analysis and provided recommendations to stakeholders to optimize resource allocation',
      'Used CI/CD (Jenkins), Git, and Artifactory to perform DevOps activities across all capabilities in the DataLake AWS platform infrastructure'
    ]
  },
  {
    company: 'Infosys',
    title: 'Technology Architect',
    responsibilities: [
      'Contributed to establishment of Continuous Integration and Continuous Delivery automation framework for infrastructure service delivery',
      'Influenced culture change as infrastructure teams moved to infrastructure-as-code and standard development practices',
      'Worked as part of Environment team supporting Data warehouse databases for National Australia Bank',
      'Leveraged Oracle Exadata features such as partitioning, materialized views, and parallel processing to automate data warehouse tasks',
      'Utilized Oracle Exadata\'s capabilities including smart scans, storage indexes, and hybrid columnar compression to optimize query performance'
    ]
  },
  {
    company: 'Oracle',
    title: 'Senior Principal Consultant',
    responsibilities: [
      'Member of Database Engineering Team supporting high priority BAU issues escalated by operations team',
      'Performed analysis and value stream mapping of existing processes for development of new or improved automation',
      'Performed problem diagnosis, initiated problem resolution and provided ongoing life-cycle support for Infrastructure implementations',
      'Installation, Configuration and administration of Oracle Databases with RAC as per application best practices',
      'WebLogic Application Server administration tasks including Installation, Configuration and Integration'
    ]
  },
  {
    company: 'Huawei',
    title: 'Team Lead',
    responsibilities: [
      'Led technical teams in delivering complex infrastructure projects',
      'Mentored junior engineers and provided technical leadership',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
      'Implemented best practices for system reliability and performance optimization'
    ]
  }
]

export default function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={`text-left w-full py-3 px-2 font-mono text-sm transition-colors ${
                activeTab === index
                  ? 'text-teal-400 border-l-2 border-teal-400 bg-slate-800'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-3">
        <div className="text-slate-100">
          <h3 className="text-xl font-semibold mb-1">
            {experiences[activeTab].title}
            <span className="text-teal-400"> @ {experiences[activeTab].company}</span>
          </h3>
          <ul className="space-y-2 text-slate-400">
            {experiences[activeTab].responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="w-4 h-4 text-teal-400 mr-2 mt-1 flex-shrink-0" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
