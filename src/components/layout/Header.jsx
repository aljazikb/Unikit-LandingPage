import { asset } from '../../lib/asset'

export default function Header({ ready }) {
  return (
    <header className={`transition-opacity duration-1000 delay-300 motion-reduce:opacity-100 ${ready ? 'opacity-100' : 'opacity-0'}`}>
      <div className="wrap flex items-center justify-between py-[22px]">
        <div className="flex items-center gap-4">
          <a href="#">
            <img src={asset('/images/logo-mark-ink.png')} alt="UniKit" className="h-8 w-auto" />
          </a>
          <span className="h-10 w-px bg-ink opacity-30" aria-hidden="true" />
          <img src={asset('/images/kau-logo.png')} alt="جامعة الملك عبدالعزيز" className="h-10 w-auto" />
        </div>
        <div className="flex items-center gap-[clamp(18px,3vw,36px)] text-[clamp(1.1rem,1.6vw,1.5rem)] font-semibold">
          <a href="https://kaustore.com/" target="_blank" rel="noopener noreferrer" className="border-b-2 border-ink pb-1">المتجر</a>
        </div>
      </div>
    </header>
  )
}
