import { products } from '../../data/products'
import ProductCard from '../ui/ProductCard'

export default function ProductGrid() {
  return (
    <section
      id="products"
      className="wrap grid grid-cols-2 items-start gap-x-3 gap-y-9 pb-[clamp(60px,9vw,120px)] pt-[clamp(28px,4vw,48px)] min-[921px]:grid-cols-12 min-[921px]:gap-x-[clamp(10px,1.6vw,20px)] min-[921px]:gap-y-[clamp(56px,8vw,120px)]"
    >
      {products.map(({ id, ...product }) => (
        <ProductCard key={id} {...product} />
      ))}
    </section>
  )
}
