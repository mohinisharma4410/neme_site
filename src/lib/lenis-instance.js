/**
 * Shared Lenis handle. Lives in its own module so `smooth-scroll.jsx` can stay
 * a component-only file (React Fast Refresh requires that).
 */
export const lenisRef = { current: null }
