import { Project, ProjectCategory } from '@/types/project'

export const projectCategories: ProjectCategory[] = [
  {
    name: 'Cloud Optimization',
    slug: 'cloud-optimization',
    color: 'bg-blue-100 text-blue-800',
    icon: '☁️'
  },
  {
    name: 'Infrastructure Automation',
    slug: 'infrastructure-automation',
    color: 'bg-green-100 text-green-800',
    icon: '⚙️'
  },
  {
    name: 'Platform Engineering',
    slug: 'platform-engineering',
    color: 'bg-purple-100 text-purple-800',
    icon: '🏗️'
  },
  {
    name: 'Data Engineering',
    slug: 'data-engineering',
    color: 'bg-orange-100 text-orange-800',
    icon: '📊'
  },
  {
    name: 'Database Optimization',
    slug: 'database-optimization',
    color: 'bg-red-100 text-red-800',
    icon: '🗄️'
  },
  {
    name: 'DevOps Tools',
    slug: 'devops-tools',
    color: 'bg-gray-100 text-gray-800',
    icon: '🛠️'
  }
]

export const projects: Project[] = [
  {
    id: 'aws-cost-optimization',
    title: 'AWS Cloud Cost Optimization Initiative',
    description: 'Led comprehensive cloud cost optimization achieving 40% reduction in monthly expenditure',
    longDescription: 'Implemented automated cost control measures, stakeholder reporting frameworks, and resource optimization strategies for a large-scale data platform serving multiple business units.',
    technologies: ['AWS', 'Cloudability', 'Terraform', 'Python', 'Jenkins', 'CloudWatch'],
    duration: '2 years',
    impact: '40% cost reduction',
    metrics: [
      {
        label: 'Monthly Savings',
        value: '40%',
        description: 'Reduction in cloud expenditure'
      },
      {
        label: 'Resource Optimization',
        value: '60%',
        description: 'Improvement in resource utilization'
      },
      {
        label: 'Automation Coverage',
        value: '90%',
        description: 'Of cost control processes automated'
      }
    ],
    featured: true,
    category: projectCategories[0], // Cloud Optimization
    tags: ['AWS', 'Cost Optimization', 'Automation', 'Terraform', 'Python']
  },
  {
    id: 'infrastructure-automation-platform',
    title: 'Infrastructure Automation Platform',
    description: 'Built platform infrastructure using Infrastructure as Code with single-click deployments',
    longDescription: 'Designed and implemented a comprehensive infrastructure automation platform using Terraform, Ansible, and CI/CD pipelines. Automated AWS RDS provisioning and validation with single-click deployment capabilities.',
    technologies: ['Terraform', 'Ansible', 'Python', 'Jenkins', 'GitLab', 'AWS'],
    duration: '1.5 years',
    impact: '90% reduction in deployment time',
    metrics: [
      {
        label: 'Deployment Time',
        value: '90%',
        description: 'Reduction in deployment time'
      },
      {
        label: 'Automation Coverage',
        value: '95%',
        description: 'Of infrastructure provisioning automated'
      },
      {
        label: 'Error Reduction',
        value: '85%',
        description: 'Fewer deployment-related incidents'
      }
    ],
    featured: true,
    category: projectCategories[1], // Infrastructure Automation
    tags: ['Terraform', 'Ansible', 'AWS', 'CI/CD', 'Automation']
  },
  {
    id: 'sas-viya-optimization',
    title: 'SAS Viya Platform Optimization',
    description: 'Expert-level support for enterprise analytics platform achieving 99.9% uptime',
    longDescription: 'Provided comprehensive support for SAS Viya platform, optimizing PostgreSQL and Oracle database performance, implementing monitoring and alerting systems for high availability environments.',
    technologies: ['SAS Viya', 'PostgreSQL', 'Oracle', 'Linux', 'Monitoring', 'Alerting'],
    duration: '1+ years',
    impact: '99.9% uptime achievement',
    metrics: [
      {
        label: 'Uptime',
        value: '99.9%',
        description: 'Platform availability'
      },
      {
        label: 'Performance Improvement',
        value: '45%',
        description: 'Faster query response times'
      },
      {
        label: 'Incident Reduction',
        value: '70%',
        description: 'Fewer critical incidents'
      }
    ],
    featured: true,
    category: projectCategories[2], // Platform Engineering
    tags: ['SAS Viya', 'PostgreSQL', 'Oracle', 'Monitoring', 'Performance']
  },
  {
    id: 'data-lake-modernization',
    title: 'Data Lake Infrastructure Modernization',
    description: 'Designed and implemented AWS-based data ingestion and curation system',
    longDescription: 'Built automated pipelines for normal and stream data processing, enhanced security with IAM, KMS, and VPC configurations. Implemented comprehensive data curation and validation processes.',
    technologies: ['AWS S3', 'AWS RDS', 'AWS EC2', 'Python', 'Parquet', 'Data Pipelines'],
    duration: '2 years',
    impact: 'Scalable data processing platform',
    metrics: [
      {
        label: 'Data Processing',
        value: '10TB+',
        description: 'Daily data ingestion capacity'
      },
      {
        label: 'Processing Speed',
        value: '5x',
        description: 'Faster data processing'
      },
      {
        label: 'Cost Efficiency',
        value: '30%',
        description: 'Reduction in data processing costs'
      }
    ],
    featured: false,
    category: projectCategories[3], // Data Engineering
    tags: ['AWS', 'Data Engineering', 'Python', 'Data Pipelines', 'S3']
  },
  {
    id: 'oracle-exadata-optimization',
    title: 'Oracle Exadata Performance Optimization',
    description: 'Optimized data warehouse performance using Exadata features achieving 60% query improvement',
    longDescription: 'Implemented automation for data loading and transformation processes, conducted performance tuning and bottleneck identification using Oracle Exadata advanced features.',
    technologies: ['Oracle Exadata', 'RAC', 'ASM', 'DataGuard', 'RMAN', 'OEM'],
    duration: '4 years',
    impact: '60% query performance improvement',
    metrics: [
      {
        label: 'Query Performance',
        value: '60%',
        description: 'Improvement in query response times'
      },
      {
        label: 'Automation Coverage',
        value: '80%',
        description: 'Of data warehouse tasks automated'
      },
      {
        label: 'Storage Efficiency',
        value: '50%',
        description: 'Improvement in storage utilization'
      }
    ],
    featured: false,
    category: projectCategories[4], // Database Optimization
    tags: ['Oracle', 'Exadata', 'Performance', 'Automation', 'Data Warehouse']
  },
  {
    id: 'gitlab-devops-management',
    title: 'GitLab DevOps Platform Management',
    description: 'Administered GitLab infrastructure and automated environment provisioning',
    longDescription: 'Managed GitLab infrastructure for development teams, automated certificate management, and implemented monitoring and alerting for production deployments.',
    technologies: ['GitLab', 'Jenkins', 'AWS', 'Python', 'Certificate Management'],
    duration: '1 year',
    impact: 'Streamlined development workflows',
    metrics: [
      {
        label: 'Environment Provisioning',
        value: '95%',
        description: 'Automated environment setup'
      },
      {
        label: 'Certificate Automation',
        value: '100%',
        description: 'Automated certificate renewal'
      },
      {
        label: 'Deployment Success Rate',
        value: '98%',
        description: 'Successful deployments'
      }
    ],
    featured: false,
    category: projectCategories[5], // DevOps Tools
    tags: ['GitLab', 'DevOps', 'Automation', 'AWS', 'CI/CD']
  }
]

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByCategory(categorySlug: string): Project[] {
  return projects.filter(project => project.category.slug === categorySlug)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getAllCategories(): ProjectCategory[] {
  return projectCategories
}

