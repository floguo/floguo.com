"use client"

import { Header } from '@/components/header'
import { useEffect } from 'react'
import { ProjectStore } from '@/lib/store'

function getOptimizedImagePaths(project: string, numberImages: number) {
  return Array.from({length: numberImages}, (_, i) => `/images/optimized/${project}_${i + 1}.webp`)
}

const projects = [
  {
    year: 2024,
    items: [
      {
        title: "BTQ TECHNOLOGIES",
        category: "Brand, web, illustration",
        description: "Brand identity and web design for BTQ's quantum computing platform.",
        images: getOptimizedImagePaths("btq", 8),
        year: 2024
      },
      {
        title: "VALOUR",
        category: "Brand, web, product",
        description: "Creative direction, web, and product design for Valour.",
        images: getOptimizedImagePaths("valour", 8),
        year: 2024
      },
      {
        title: "INFERA NETWORK",
        category: "Brand, web, product",
        description: "Product design and branding for Infera Network.",
        images: getOptimizedImagePaths("infera", 8),
        year: 2024
      },
    ]
  },
]

export default function Home() {
  //const setAllProjects = ProjectStore((state) => state.setAllProjects)

  useEffect(() => {
    // Flatten all projects into a single array
    const allProjects = projects.flatMap(yearGroup => 
      yearGroup.items.map(project => ({
        ...project,
        year: yearGroup.year
      }))
    )
    ProjectStore.getState().setAllProjects(allProjects)
  }, [])

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto overflow-hidden">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr]">

      </main>
    </div>
  )
}

