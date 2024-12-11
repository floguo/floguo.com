"use client"

import { Header } from '@/components/header'
import { useEffect } from 'react'
import { ProjectStore } from '@/lib/store'
import { Project } from '@/types/project'
import { ProjectGallery } from '@/components/project-gallery'
import '@/app/globals.css'

function getOptimizedImagePaths(project: string, numberImages: number) {
  return Array.from({length: numberImages}, (_, i) => `/images/optimized/${project}_${i + 1}.webp`)
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Valour',
    tags: ['CREATIVE DIRECTION', 'WEB', 'PRODUCT'],
    media: [
      {
        type: 'image',
        src: '/images/optimized/valour_1.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/valour_7.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/valour_3.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/valour_6.webp'
      }
    ],
  },
  {
    id: 2,
    title: 'BTQ Technologies',
    tags: ['BRAND', 'WEB', 'ILLUSTRATION'],
    media: [
      {
        type: 'image',
        src: '/images/optimized/btq_1.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/btq_2.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/btq_3.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/btq_4.webp'
      }
    ],
  },
  {
    id: 3,
    title: 'Infera Network',
    tags: ['BRAND', 'WEB', 'PRODUCT'],
    media: [
      {
        type: 'image',
        src: '/images/optimized/infera_2.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/infera_3.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/infera_4.webp'
      },
      {
        type: 'image',
        src: '/images/optimized/infera_5.webp'
      }
    ],
  }
]

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto overflow-hidden">
      <Header />
      <main className="pt-24">
        <ProjectGallery projects={projects} />
      </main>
    </div>
  )
}

