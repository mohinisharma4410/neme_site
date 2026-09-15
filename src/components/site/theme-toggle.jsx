import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme.jsx'

export function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light' : 'Dark'}
      className={`relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-line text-ink transition-colors hover:bg-ash ${className}`}
    >
      {/* both icons are mounted; they swap on a short vertical slide */}
      <Sun
        className="absolute size-[18px] transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'translateY(14px) rotate(-40deg)' : 'none',
        }}
      />
      <Moon
        className="absolute size-[18px] transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'none' : 'translateY(-14px) rotate(40deg)',
        }}
      />
    </button>
  )
}
