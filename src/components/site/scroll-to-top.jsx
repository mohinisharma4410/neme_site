import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { lenisRef } from '../../lib/lenis-instance.js'

/**
 * Router equivalent of a fresh page load: jump to top on navigation, but
 * honour in-page anchors. Routed through Lenis when it's running, otherwise
 * native — so it still works under `prefers-reduced-motion`.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const lenis = lenisRef.current

    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        if (lenis) lenis.scrollTo(el, { offset: -110 })
        else el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
