const LETTERS = 'UNIKIT'.split('')

export default function Hero({ ready }) {
  return (
    <div className="px-[1.5vw]">
      <h1
        aria-label="UNIKIT"
        className="logotype m-0 flex justify-between overflow-hidden text-[18.4vw] leading-[1] select-none"
      >
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            aria-hidden
            className="inline-block transition-transform duration-[1800ms] ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              transform: `translateY(${ready ? 0 : 1.1}em)`,
              transitionDelay: `${i * 150}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <div dir="ltr" className="mt-[clamp(10px,1.6vw,20px)]">
        <div className="border-t-[clamp(3px,.5vw,6px)] border-ink" />
      </div>
    </div>
  )
}
