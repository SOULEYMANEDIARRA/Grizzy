import { useEffect, useRef, useState } from 'react'
import { UseScrollRevealReturn } from '@/types'

// Hook personnalisé pour les animations au scroll
const useScrollReveal = (threshold: number = 0.1): UseScrollRevealReturn => {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Configuration de l'Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Une fois visible, arrêter d'observer pour optimiser les performances
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -100px 0px' // Déclencher un peu avant que l'élément soit visible
      }
    )

    observer.observe(element)

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

export default useScrollReveal