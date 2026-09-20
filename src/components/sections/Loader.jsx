import { useEffect, useState } from 'react'
import { loaderCards } from '../../data/loader'

const STEP_MS = 170
const HOLD_MS = 250
const CLEAR_MS = 650 // photos fly away, logo fades
const OPEN_MS = 750 // screen opens

// Photos piled up, one per step. `frosted` renders the blurred copy used for the glass logo.
function Pile({ step, leaving, frosted = false }) {
  return (
    <div
      aria-hidden={frosted || undefined}
      className={`pointer-events-none absolute left-1/2 top-1/2 h-[125%] aspect-[3/4] -translate-x-1/2 -translate-y-1/2 ${
        frosted ? 'blur-[7px] saturate-150 brightness-110' : ''
      }`}
    >
      {loaderCards.slice(0, step + 1).map(({ src, tilt, x, y, back, backTilt }, i) => {
        // each photo flies off in its own direction when the loader ends
        const angle = (i / loaderCards.length) * Math.PI * 2 + 0.6
        return (
        <div
          key={src}
          className={`${leaving ? 'animate-fly' : 'animate-pop'} absolute inset-0`}
          style={{
            '--tilt': `${tilt}deg`,
            '--x': `${x}%`,
            '--y': `${y}%`,
            '--dx': `${Math.round(Math.cos(angle) * 70)}vw`,
            '--dy': `${Math.round(Math.sin(angle) * 70)}vh`,
            animationDelay: leaving ? `${i * 35}ms` : undefined,
          }}
        >
          <div
            className="absolute inset-[4%]"
            style={{ background: back, transform: `rotate(${backTilt}deg) translate(6%, 3%)` }}
          />
          <img
            src={src}
            alt=""
            className={`absolute inset-0 size-full object-cover ${frosted ? '' : 'shadow-2xl'}`}
          />
        </div>
        )
      })}
    </div>
  )
}

export default function Loader({ onOpen }) {
  const [step, setStep] = useState(0)
  // loading → clearing (photos fly away) → opening (screen opens) → done
  const [phase, setPhase] = useState('loading')

  // Lock scrolling while the intro is up (the component stays mounted after it finishes,
  // so the lock has to be released when the phase reaches 'done', not only on unmount)
  const done = phase === 'done'
  useEffect(() => {
    if (done) return
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [done])

  useEffect(() => {
    const isLast = step === loaderCards.length - 1
    let t
    if (phase === 'loading') {
      if (!isLast) t = setTimeout(() => setStep(step + 1), STEP_MS)
      else t = setTimeout(() => setPhase('clearing'), HOLD_MS)
    } else if (phase === 'clearing') t = setTimeout(() => setPhase('opening'), CLEAR_MS)
    else if (phase === 'opening') {
      onOpen?.(true)
      t = setTimeout(() => setPhase('done'), OPEN_MS)
    }
    return () => clearTimeout(t)
  }, [step, phase, onOpen])

  if (phase === 'done') return null

  const leaving = phase !== 'loading'
  const opening = phase === 'opening'
  const panel = 'absolute inset-x-0 bg-ink transition-transform ease-[cubic-bezier(.76,0,.24,1)]'

  return (
    <div
      dir="ltr"
      role="status"
      aria-label="جاري التحميل"
      className={`fixed inset-0 z-50 grid place-items-center overflow-hidden text-cream ${
        opening ? 'pointer-events-none' : ''
      }`}
    >
      {/* The green screen slides up from the bottom to open the page */}
      <div
        className={`${panel} inset-y-0 ${opening ? '-translate-y-full' : ''}`}
        style={{ transitionDuration: `${OPEN_MS}ms` }}
      />

      <div
        className={`relative aspect-[1269/521] w-[clamp(17rem,42vw,34rem)] transition-[opacity,scale] duration-[350ms] delay-[250ms] ${
          leaving ? 'scale-110 opacity-0' : ''
        }`}
      >
        {/* 1. Solid logo at the back: what you see wherever no photo covers it */}
        <img src="/images/logo-mark.png" alt="UniKit" className="animate-reveal absolute inset-0 size-full" />

        {/* 2. Pile of photos covering the solid logo */}
        <Pile step={step} leaving={leaving} />

        {/* 3. Glass logo on top: a blurred copy of the pile, visible only inside the logo
            shape. Where no photo is behind the logo it is empty, so the solid logo shows */}
        <div
          className="animate-reveal pointer-events-none absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(115deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,.12) 28%, rgba(255,255,255,.4) 40%, rgba(255,255,255,.06) 58%, rgba(255,255,255,.28) 100%)',
            maskImage: 'url(/images/logo-mark.png)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
          }}
        >
          <Pile step={step} leaving={leaving} frosted />
        </div>

        {/* thin light edge so the glass logo reads as sitting in front of the photos */}
        <img
          src="/images/logo-mark.png"
          alt=""
          aria-hidden
          className="animate-reveal pointer-events-none absolute inset-0 z-10 size-full opacity-60 drop-shadow-[0_0_1px_rgba(255,255,255,1)] drop-shadow-[0_0_6px_rgba(255,255,255,.55)]"
        />

        {/* Counter */}
        <span className="absolute -top-[4.5rem] right-0 z-10 text-[clamp(.9rem,2vw,1.6rem)] tabular-nums tracking-wider">
          {String(step + 1).padStart(3, '0')}
        </span>
      </div>
    </div>
  )
}
