import { useEffect, useRef } from 'react'

// A red dot that trails the real mouse cursor, and a circle that replaces the cursor
// over any element carrying data-cursor="label" (those elements set cursor-none).
// Skipped on touch devices, where there is no pointer to follow.
export default function CursorFollower() {
  const root = useRef(null)
  const dot = useRef(null)
  const circle = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const target = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    let frame = 0

    const place = (el, { x, y }) => {
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    }

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.2
      pos.y += (target.y - pos.y) * 0.2
      place(circle.current, pos)
      place(dot.current, pos)
      frame = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const onOver = (e) => {
      const host = e.target.closest?.('[data-cursor]')
      if (host) label.current.textContent = host.dataset.cursor
      root.current.dataset.active = host ? 'true' : 'false'
    }

    const onLeave = () => {
      root.current.dataset.shown = 'false'
      root.current.dataset.active = 'false'
    }

    // Snap to the first mouse position instead of gliding in from the corner.
    const onFirstMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      frame = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      root.current.dataset.shown = 'true'
    }

    window.addEventListener('mousemove', onFirstMove, { once: true })
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', onEnter)
    document.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onFirstMove)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onEnter)
      document.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // Each piece is its own fixed layer (not nested) so the dot's blend mode sees the page beneath it.
  // Transforms only move; `scale` is a separate property, so the two never collide.
  return (
    <div
      ref={root}
      aria-hidden
      data-shown="false"
      data-active="false"
      className="pointer-events-none hidden [@media(hover:hover)_and_(pointer:fine)]:block"
    >
      <div
        ref={dot}
        className="fixed left-0 top-0 z-[9999] size-3 rounded-full bg-ink opacity-0 transition-[scale,opacity] duration-200 [[data-active=true]_&]:scale-0 [[data-shown=true]_&]:opacity-100"
      />
      <div
        ref={circle}
        className="fixed left-0 top-0 z-[9999] grid size-[clamp(96px,9vw,132px)] scale-0 place-items-center rounded-full bg-ink text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-cream transition-[scale] duration-300 ease-out [[data-active=true]_&]:scale-100"
      >
        <span ref={label} dir="ltr" />
      </div>
    </div>
  )
}
