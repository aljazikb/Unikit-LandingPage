import { footerColumns } from '../../data/footer'

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="wrap">
        <div className="grid grid-cols-[auto_auto] justify-start gap-x-[clamp(40px,10vw,160px)] gap-y-6 py-[26px] max-[760px]:grid-cols-1">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <b className="logotype text-[20px]">UNIKIT</b>
              <span className="h-14 w-px bg-ink opacity-30" aria-hidden="true" />
              <img src="/images/kau-logo.png" alt="جامعة الملك عبدالعزيز" className="h-20 w-auto" />
            </div>
            <div className="mt-1 text-xs opacity-60">جميع الحقوق محفوظة © 2026</div>
          </div>
          {footerColumns.map(({ title, links }) => (
            <ul key={title} className="flex flex-col gap-2">
              <li className="mb-0.5 text-[11px] opacity-60">{title}</li>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-[13px] font-medium hover:opacity-60"
                  >{label}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  )
}
