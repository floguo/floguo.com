"use client"

import { useEffect, useState } from "react"
import { ProjectStore } from "@/lib/store" // Updated import statement
import { AnimatePresence, motion } from "motion/react"
import Image from 'next/image'

export function ProjectPreview() {
  const preview = ProjectStore((state) => state.preview)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const allProjects = ProjectStore((state) => state.allProjects)

  useEffect(() => {
    // if (!preview) {
    //   setCurrentImageIndex(0)
    //   return
    // }

    const interval = setInterval(() => {
      setCurrentImageIndex((current) => {
        console.log(current, allProjects);
        if (!preview) return 0;
        return current === preview.images.length - 1 ? 0 : current + 1
      })
    }, 750) 

    return () => clearInterval(interval)
  }, [preview])

  if (!preview) {
    return (
      <div className="p-8 grid grid-cols-3 gap-4 auto-rows-min">
        {allProjects.map((project, index) => (
          <div key={index} className="space-y-2">

            <div className="aspect-square relative overflow-hidden">
              <Image
                src={project.images[currentImageIndex]}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1 font-[family-name:var(--font-merchant-copy)]">
              <div className="flex items-center justify-between">
                <h3 className="text-sm">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative h-full font-[family-name:var(--font-merchant-copy)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
                initial={false} // No initial animation
                animate={false} // No animation on change
                className="absolute inset-0 p-8"
            >
            <div className="space-y-4 mb-8">
            <h2 className="text-2xl">{preview.title}</h2>
            <p className="text-muted-foreground">{preview.description}</p>
            </div>
            <div className="relative aspect-video overflow-hidden">
            <Image
              src={preview.images[currentImageIndex]}
              alt={`${preview.title} preview ${currentImageIndex + 1}`}
              fill
              priority
              className="object-contain"
            />
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {preview.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 transition-colors ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}`}
              />
              ))}
            </div>
            </motion.div>
      </AnimatePresence>
    </div>
  )
}

