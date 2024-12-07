import { useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function useSwayAnimation(stiffness = 100, damping = 10) {
  const [isHovered, setIsHovered] = useState(false)
  const sway = useSpring(0, {
    stiffness,
    damping,
  })

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        sway.set(Math.sin(Date.now() / 350) * 5)
      }, 50)
      return () => clearInterval(interval)
    } else {
      sway.set(0)
    }
  }, [isHovered, sway])

  return {
    isHovered,
    setIsHovered,
    sway,
  }
}