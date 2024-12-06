"use client"

import { useState } from "react"
import { ProjectStore } from "../lib/store"

interface Project {
  title: string
  category: string
  description: string
  images: string[]
  year: number
}

interface ProjectYear {
  year: number
  items: Project[]
}

interface ProjectListProps {
  projects: ProjectYear[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const setPreview = ProjectStore((state) => state.setPreview)

  return (
    <div className="p-8 font-[family-name:var(--font-merchant-copy)]">
      <h2 className="text-lg mb-8 flex items-center gap-2">
        <span className="text-blue-600">▶</span> DESIGN PROJECTS
      </h2>
      
      <div className="space-y-12">
        {projects.map((yearGroup) => (
          <div key={yearGroup.year}>
            <div className="text-xs text-gray-500 mb-4">{yearGroup.year}</div>
            <div className="space-y-2">
              {yearGroup.items.map((project) => (
                <div
                  key={project.title}
                  className="group cursor-pointer"
                  onMouseEnter={() => {
                    setHoveredProject(project)
                    setPreview(project)
                  }}
                  onMouseLeave={() => {
                    setHoveredProject(null)
                    setPreview(null)
                  }}
                >
                  <h3 className="text-sm group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

