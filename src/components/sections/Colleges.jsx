import { useEffect, useRef, useState } from 'react'
import { colleges, hoodies } from '../../data/colleges'

// Rows alternate: three cards, then two wider ones (like the reference). Repeats every 5 cards.
const LAYOUT = [
  'min-[921px]:col-span-4 aspect-[6/5]',
  'min-[921px]:col-span-4 aspect-[6/5] min-[921px]:mt-[clamp(20px,3vw,44px)]',
  'min-[921px]:col-span-4 aspect-[6/5]',
  'min-[921px]:col-span-7 aspect-[6/5] min-[921px]:aspect-[7/4]',
  'min-[921px]:col-span-5 aspect-[6/5] min-[921px]:aspect-[5/4]',
]
// placeholder tile colours (brand greens)
const TILES = ['bg-ink', 'bg-[#0a6c5f]', 'bg-[#164340]', 'bg-[#377f77]']
const HOODIE_KEYS = Object.keys(hoodies)

// Rises from below and fades in once the intro has opened. The first row (`eager`) rises
// right away; the rest wait until they scroll into view.
function useRise(ready, eager) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!ready || shown) return
    if (eager) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        io.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [ready, eager, shown])

  return [ref, shown]
}

function CollegeCard({ college: { name, image, href, hoodie }, index: i, ready }) {
  const [ref, shown] = useRise(ready, i < 3)
  const product = hoodies[hoodie] ?? hoodies[HOODIE_KEYS[i % HOODIE_KEYS.length]]

  return (
    <a
      ref={ref}
      href={href ?? '#colleges'}
      {...(href && { target: '_blank', rel: 'noopener noreferrer' })}
      data-cursor="View more"
      style={{ transitionDelay: shown ? `${(i % 3) * 120}ms` : undefined }}
      className={`group relative block cursor-none overflow-hidden rounded-xl transition-[opacity,translate] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-[18vh] opacity-0'
      } ${LAYOUT[i % LAYOUT.length]} ${TILES[i % TILES.length]}`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-[6%] group-hover:scale-110"
        />
      ) : (
        <img
          src="/images/logo-mark.png"
          alt=""
          aria-hidden
          className="absolute left-1/2 top-[38%] w-[45%] -translate-x-1/2 -translate-y-1/2 opacity-25 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3"
        />
      )}
      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-6 pb-5 pt-16 ${
          image ? 'bg-linear-to-t from-ink/80 via-ink/35 to-transparent' : ''
        }`}
      >
        <span className="text-[clamp(1.1rem,2vw,1.6rem)] font-bold leading-snug text-cream">{name}</span>
        <span className="text-sm tabular-nums tracking-wider text-cream/70">{String(i + 1).padStart(2, '0')}</span>
      </div>

      {/* Hoodie from the store: a white curtain wipes up over the card while the photos move at
          different speeds, so it reads as one smooth push. Reverses when the pointer leaves. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white transition-[clip-path] duration-[850ms] ease-[cubic-bezier(.76,0,.24,1)] [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)] motion-reduce:transition-none"
      >
        <img
          src={product.image}
          alt=""
          loading="lazy"
          className="size-full translate-y-[14%] scale-[1.12] object-contain transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 group-hover:scale-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 motion-reduce:transition-none"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-6 items-end justify-between gap-4 px-6 pb-5 text-ink opacity-0 transition-[opacity,translate] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:delay-300 motion-reduce:transition-none">
          <span className="text-[clamp(.95rem,1.5vw,1.2rem)] font-bold leading-snug">{product.name}</span>
          <span className="shrink-0 text-sm font-semibold">{product.price} ر.س</span>
        </div>
      </div>
    </a>
  )
}

export default function Colleges({ ready }) {
  return (
    <section
      id="colleges"
      className="wrap grid grid-cols-1 gap-[clamp(10px,1.6vw,20px)] pb-[clamp(48px,7vw,96px)] pt-[clamp(28px,4vw,48px)] min-[600px]:grid-cols-2 min-[921px]:grid-cols-12"
    >
      {colleges.map((college, i) => (
        <CollegeCard key={college.id} college={college} index={i} ready={ready} />
      ))}
    </section>
  )
}
