'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project, MediaItem } from '../types/project'

interface ProjectGalleryProps {
  projects: Project[]
}

function MediaSlideshow({ media }: { media: MediaItem[] }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [media.length])

  return (
    <>
      {media[currentMediaIndex].type === 'image' ? (
        <img
          src={media[currentMediaIndex].src}
          alt=""
          className="h-full w-full rounded-2xl object-cover"
        />
      ) : (
        <video
          src={media[currentMediaIndex].src}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      )}
    </>
  )
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rafId: number | null = null
    let lastHoveredIndex: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const cardWidth = rect.width / projects.length
        const hoveredIndex = Math.floor(x / cardWidth)

        if (hoveredIndex !== lastHoveredIndex) {
          setActiveIndex(hoveredIndex)
          setIsAutoPlaying(false)
          lastHoveredIndex = hoveredIndex
        }
      })
    }

    const handleMouseLeave = () => {
      setIsAutoPlaying(true)
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [projects.length])

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
      }, 6000)
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, projects.length])

  return (
    <div className="px-4 md:px-6">
      {/* Mobile Grid Layout */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative aspect-square rounded-lg clip overflow-hidden`}
            onClick={() => setActiveIndex(index)}
          >
            <MediaSlideshow media={project.media} />
            <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent via-black/50 p-2 flex flex-col justify-end transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-sm font-medium text-white">{project.title}</h2>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Carousel Layout */}
      <div className="hidden md:block relative">
        <div 
          className="flex h-[40vh] overflow-hidden" 
          ref={containerRef}
        >
          {projects.map((project, index) => {
            const isActive = activeIndex === index

            return (
              <motion.article
                key={project.id}
                className={`relative flex-shrink-0 cursor-pointer overflow-hidden mx-2 rounded-2xl`}
                initial={false}
                animate={{
                  width: isActive ? 'calc(50% - 16px)' : 'calc(25% - 16px)',
                  height: isActive ? 'auto' : '100%',
                  opacity: 1,
                }}
                transition={{
                  width: { type: 'spring', stiffness: 150, damping: 30 },
                  height: { type: 'spring', stiffness: 150, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <MediaSlideshow media={project.media} />
                <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent via-black/20 p-2 flex flex-col justify-end transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <h2 className="px-2 mb-2 text-3xl text-white">{project.title}</h2>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="subheading bg-black bg-opacity-40 px-2 py-1 rounded-md text-sm text-white">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

