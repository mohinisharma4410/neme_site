import { useEffect } from 'react'
import Lenis from 'lenis'
import { lenisRef } from '../../lib/lenis-instance.js'

export function SmoothScroll() {
  useEffect(() => {
    // Respect the OS setting — never force momentum scrolling on someone who
    // has asked for reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    lenisRef.current = lenis

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return null
}
