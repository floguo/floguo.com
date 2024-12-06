import { create } from 'zustand'

interface Project {
  title: string
  category: string
  description: string
  images: string[]
  year: number
}

interface ProjectState {
  preview: Project | null
  allProjects: Project[]
  setPreview: (project: Project | null) => void
  setAllProjects: (projects: Project[]) => void
}

export const ProjectStore = create<ProjectState>((set) => ({
  preview: null,
  allProjects: [],
  setPreview: (project) => set({ preview: project }),
  setAllProjects: (projects) => set({ allProjects: projects }),
}))

