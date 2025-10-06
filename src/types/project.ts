export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  duration: string
  impact: string
  metrics?: {
    label: string
    value: string
    description?: string
  }[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: ProjectCategory
  tags: string[]
}

export interface ProjectCategory {
  name: string
  slug: string
  color: string
  icon: string
}

export interface ProjectMetrics {
  label: string
  value: string
  description?: string
}

