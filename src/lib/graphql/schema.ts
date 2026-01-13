// It's like TypeScript interfaces but for your API
export const typeDefs = `
    """
    Represents a portfolio project
    Triple quotes are GraphQL comments that appear in documentation
    """
  type Project {
    id: ID!
    title: String!
    description: String!
    longDescription: String!
    technologies: [String!]!
    images: [String!]!
    liveUrl: String
    githubUrl: String
    featured: Boolean!
    category: String!
    createdAt: String!
  }

  """
  Represents a technical skill
  """
  type Skill {
    name: String!
    level: SkillLevel!
    yearsOfExperience: Int!
  }

    """
    Skill proficiency levels
    ENUM = a type that can only be one of specific values
    Like TypeScript union types: 'Beginner' | 'Intermediate' | ...
    """
  enum SkillLevel {
    BEGINNER
    INTERMEDIATE
    ADVANCED
    EXPERT
  }

    """
    Skills grouped by category
    """
  type SkillSet {
    frontend: [Skill!]!
    backend: [Skill!]!
    database: [Skill!]!
    tools: [Skill!]!
  }

    """
    Represents work experience
    """
  type Experience {
    id: ID!
    company: String!
    position: String!
    location: String!
    startDate: String!
    endDate: String
    current: Boolean!
    description: String!
    achievements: [String!]!
    technologies: [String!]!
  }

    """
    The Query type defines all possible read operations
    Every GraphQL schema MUST have a Query type
    """

  type Query {
    # Get all projects
    projects: [Project!]!

    # Get one project by ID
    project(id: ID!): Project

    # Get only featured projects
    featuredProjects: [Project!]!

    # Get projects by category
    projectsByCategory(category: String!): [Project!]!

    # Get projects by technology
    projectsByTechnology(technology: String!): [Project!]!

    # Get all skills
    skills: SkillSet!

    # Get all work experience
    experience: [Experience!]!
  }
`;