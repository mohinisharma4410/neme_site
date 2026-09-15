import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { Logo } from './logo.jsx'
import { ThemeToggle } from './theme-toggle.jsx'
import { services, pipelineStages, industriesByGroup, workFields } from '../../lib/site-data.js'

const plainLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
]

const stageOf = (key) => services.filter((s) => s.stage === key)

// One config per mega-menu so the desktop dropdown, its trigger and the
// mobile accordion below can all be driven from a single list instead of
// three near-duplicate blocks of markup.
const megaMenus = [
  {
    key: 'solutions',
    label: 'Solutions',
    href: '/solutions',
    footer: 'One partner across the whole pipeline — collect, label, build, ship.',
    cta: { to: '/solutions', label: 'View all solutions' },
    columns: pipelineStages.map((stage) => ({
      key: stage.key,
      label: stage.label,
      items: stageOf(stage.key).map((s) => ({
        key: s.slug,
        name: s.name,
        icon: s.icon,
        to: `/solutions#${s.slug}`,
      })),
    })),
  },
  {
    key: 'work',
    label: 'Work',
    href: '/work',
    footer: 'Every field below anchors straight to the case studies and builds behind it.',
    cta: { to: '/work', label: 'View all work' },
    columns: workFields.map((field) => ({
      key: field.key,
      label: field.label,
      items: field.items.map((item) => ({
        key: item.anchor,
        name: item.name,
        icon: item.icon,
        to: `/work#${item.anchor}`,
      })),
    })),
  },
  {
    key: 'industries',
    label: 'Industries',
    href: '/industries',
    footer: "Don't see your domain? We probably still fit — tell us about your data.",
    cta: { to: '/industries', label: 'View all industries' },
    columns: industriesByGroup.map((group) => ({
      key: group.key,
      label: group.label,
      items: group.items.map((ind) => ({
        key: ind.slug,
        name: ind.name,
        icon: ind.icon,
        to: `/industries#${ind.slug}`,
      })),
    })),
  },
]

export function SiteNav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpenKey, setMobileOpenKey] = useState(null)
  const [menuPos, setMenuPos] = useState({})
  const closeTimer = useRef(null)
  const triggerRefs = useRef({})
  const menuRefs = useRef({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mega menus were centering on their own trigger button, which pushed wide
  // panels (600-720px) off the left edge of the viewport for triggers that
  // sit near the left of the nav (Solutions, Work). Instead, measure the
  // trigger and the menu once it mounts and clamp the left offset so the
  // panel always stays fully on-screen. Runs in useLayoutEffect so the
  // position is set before the browser paints - no visible jump.
  useLayoutEffect(() => {
    if (!activeMenu) return
    const trigger = triggerRefs.current[activeMenu]
    const menuEl = menuRefs.current[activeMenu]
    if (!trigger || !menuEl) return

    const gutter = 16
    const compute = () => {
      const triggerRect = trigger.getBoundingClientRect()
      const menuWidth = menuEl.offsetWidth
      const maxLeft = Math.max(window.innerWidth - gutter - menuWidth, gutter)
      const centered = triggerRect.left + triggerRect.width / 2 - menuWidth / 2
      const left = Math.min(Math.max(centered, gutter), maxLeft)
      const top = triggerRect.bottom + 12
      setMenuPos((prev) => ({ ...prev, [activeMenu]: { left, top } }))
    }

    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [activeMenu])

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const openMenu = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(key)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120)
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className={`pointer-events-auto w-full max-w-[1120px] rounded-[22px] border px-3 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border-line bg-paper/85 shadow-[0_8px_30px_-12px_rgba(20,16,40,0.25)] backdrop-blur-xl'
            : 'border-line bg-paper/90 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            {megaMenus.map((menu) => {
              const menuOpen = activeMenu === menu.key
              const colWidth = menu.columns.length >= 4 ? 'w-[720px]' : 'w-[600px]'
              const pos = menuPos[menu.key]
              return (
                <div
                  key={menu.key}
                  ref={(el) => (triggerRefs.current[menu.key] = el)}
                  className="relative"
                  onMouseEnter={() => openMenu(menu.key)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    onClick={() => setActiveMenu((v) => (v === menu.key ? null : menu.key))}
                    aria-expanded={menuOpen}
                    className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
                      isActive(menu.href) ? 'text-signal' : 'text-smoke hover:text-ink'
                    }`}
                  >
                    {menu.label}
                    <ChevronDown className={`size-3.5 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {menuOpen && (
                    <div
                      ref={(el) => (menuRefs.current[menu.key] = el)}
                      className={`glass-menu menu-pop fixed ${colWidth} max-w-[90vw] rounded-[22px] p-6`}
                      style={{
                        left: pos ? `${pos.left}px` : 0,
                        top: pos ? `${pos.top}px` : 0,
                        visibility: pos ? 'visible' : 'hidden',
                      }}
                      onMouseEnter={() => openMenu(menu.key)}
                      onMouseLeave={scheduleClose}
                    >
                      <div
                        className="grid gap-6"
                        style={{ gridTemplateColumns: `repeat(${menu.columns.length}, minmax(0,1fr))` }}
                      >
                        {menu.columns.map((col) => (
                          <div key={col.key}>
                            <p className="text-xs font-semibold tracking-[0.1em] text-smoke uppercase">
                              {col.label}
                            </p>
                            <ul className="mt-3 space-y-3">
                              {col.items.map((item) => {
                                const Icon = item.icon
                                return (
                                  <li key={item.key}>
                                    <Link
                                      to={item.to}
                                      className="card-hover group flex items-start gap-2.5 rounded-lg"
                                    >
                                      <Icon className="icon-pop mt-0.5 size-4 shrink-0 text-signal" />
                                      <span className="text-[13px] leading-snug text-graphite transition-colors group-hover:text-ink">
                                        {item.name}
                                      </span>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="border-line mt-6 flex items-center justify-between gap-4 border-t pt-5">
                        <p className="text-sm text-graphite">{menu.footer}</p>
                        <Link
                          to={menu.cta.to}
                          className="pill pill-ghost pill-sm inline-flex shrink-0 items-center gap-1.5"
                        >
                          {menu.cta.label}
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {plainLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive(l.href) ? 'text-signal' : 'text-smoke hover:text-ink'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/contact" className="pill pill-primary pill-sm hidden sm:inline-flex">
              Book a Call
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-full text-ink hover:bg-ash md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 border-t border-line pt-2 md:hidden">
            {megaMenus.map((menu) => (
              <div key={menu.key}>
                <button
                  type="button"
                  onClick={() => setMobileOpenKey((v) => (v === menu.key ? null : menu.key))}
                  aria-expanded={mobileOpenKey === menu.key}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm ${
                    isActive(menu.href) ? 'text-signal' : 'text-graphite hover:bg-ash'
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    className={`size-4 transition-transform ${mobileOpenKey === menu.key ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileOpenKey === menu.key && (
                  <div className="mb-1 space-y-4 rounded-xl bg-ash px-4 py-3">
                    {menu.columns.map((col) => (
                      <div key={col.key}>
                        <p className="text-[11px] font-semibold tracking-[0.1em] text-smoke uppercase">
                          {col.label}
                        </p>
                        <ul className="mt-2 space-y-2">
                          {col.items.map((item) => (
                            <li key={item.key}>
                              <Link
                                to={item.to}
                                onClick={() => {
                                  setOpen(false)
                                  setMobileOpenKey(null)
                                }}
                                className="text-[13px] text-graphite hover:text-ink"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      to={menu.cta.to}
                      onClick={() => {
                        setOpen(false)
                        setMobileOpenKey(null)
                      }}
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-signal"
                    >
                      {menu.cta.label}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {plainLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm ${
                  isActive(l.href) ? 'text-signal' : 'text-graphite hover:bg-ash'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="pill pill-primary pill-sm mt-1 w-full sm:hidden"
            >
              Book a Call
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}
