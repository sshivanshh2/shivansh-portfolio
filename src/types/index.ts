// source of truth for the data structures this app uses
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: string
  createdAt: string
}

export interface Skill{
    name: string
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
    yearsOfExperience: number
}

export interface SkillSet{
    frontend: Skill[]
    backend: Skill[]
    database: Skill[]
    tools: Skill[]
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}