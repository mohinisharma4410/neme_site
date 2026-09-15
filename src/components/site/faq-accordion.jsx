import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="glow-ring divide-y divide-line overflow-hidden rounded-[24px]">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `faq-panel-${i}`
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[16px] font-medium text-ink">{item.q}</span>
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-transform duration-300 ease-out"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
              >
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <div
              id={panelId}
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-graphite">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}