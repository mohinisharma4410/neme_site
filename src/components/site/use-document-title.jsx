import { useEffect } from 'react'

/**
 * Stand-in for Next's `metadata` export. Vite is a SPA, so titles/descriptions
 * are set at runtime. If SEO becomes a priority, pre-render with
 * vite-plugin-ssg or move these pages back to a framework with SSR.
 */
export function useDocumentTitle(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      const tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute('content', description)
    }
  }, [title, description])
}