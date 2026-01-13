import { Project, Experience, SkillSet } from '@/types'
import projectsData from '@/data/projects.json'
import skillsData from '@/data/skills.json'
import experienceData from '@/data/experience.json'

interface ProjectArgs {
  id: string
}

interface CategoryArgs {
  category: string
}

interface TechnologyArgs {
  technology: string
}

export const resolvers = {
    Query: {
        projects: (): Project[] => {
            return projectsData as Project[]
        },
        project: (_: unknown, args: ProjectArgs): Project | null => {
            const project = projectsData.find((p) => p.id === args.id)
            return project ? (project as Project) : null
        },
        featuredProjects: (): Project[] => {
            return projectsData.filter((p) => p.featured) as Project[]
        },
        projectsByCategory: (_: unknown, args: CategoryArgs): Project[] => {
            return projectsData.filter(
            (p) => p.category === args.category
            ) as Project[]
        },
        projectsByTechnology: (_: unknown, args: TechnologyArgs): Project[] => {
            return projectsData.filter((p) =>
            p.technologies.includes(args.technology)
            ) as Project[]
        },
        skills: (): SkillSet => {
            return skillsData as SkillSet
        },
        experience: (): Experience[] => {
            return experienceData as Experience[]
        },
    }
}