export default function InfoRow({ ready }) {
  return (
    <div className={`wrap transition-opacity duration-1000 delay-500 motion-reduce:opacity-100 ${ready ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-[1fr_2fr_1fr_auto] gap-6 border-b border-line py-[26px] max-[820px]:grid-cols-2">
        <div className="uc">يونيكِت</div>
        <div>
          <div className="uc">ليه يونيكِت؟</div>
          <p className="mt-2 max-w-[340px] text-[13.5px] leading-[1.7] opacity-72">
            منصة طلابية تجمع كل احتياجات يومك الجامعي، من كليتك بالتحديد، في مكان واحد، بتصميم يليق فيك
          </p>
        </div>
        <div className="flex flex-col gap-1.5 text-xs">
          <a href="#colleges" className="hover:opacity-60">تصفح الكليات</a>
        </div>
        <div className="whitespace-nowrap text-xs opacity-72 max-[820px]:order-5">٢٠٢٦ ©</div>
      </div>
    </div>
  )
}
