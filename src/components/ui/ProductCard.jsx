const shapeClasses = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  tall: 'aspect-[2/3]',
  soft: 'aspect-[4/5]',
}

export default function ProductCard({ name, price, category, image, shape = 'portrait', place = '', crop = '' }) {
  return (
    <article className={place}>
      <div className={`overflow-hidden bg-mint/25 ${shapeClasses[shape]}`}>
        <img
          src={image}
          alt={name}
          width="700"
          height="930"
          loading="lazy"
          className={`size-full object-cover ${crop}`}
        />
      </div>
      <div className="mt-2.5 flex items-start justify-between gap-3 text-[13.5px] font-medium leading-snug">
        <span>{name}</span>
        <span className="shrink-0">{price} ر.س</span>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5 text-[10.5px] uppercase before:size-1 before:shrink-0 before:rounded-full before:bg-ink">
        {category}
      </div>
    </article>
  )
}
