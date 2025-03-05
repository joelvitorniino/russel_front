import Banner from "./components/Banner";
import GpusList from "./components/GpusList";
import ProductList from "./components/ProductList";
import { gpus } from "./data/gpus";
import { products } from "./data/products";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4">
    {/* Seção de promoção */}
    <div className="flex flex-col gap-[32px] py-[40px]">
      <Banner />
      <ProductList products={products} />
    </div>

    { /* Seção de produtos */ }
    <div>
      <GpusList gpus={gpus} />
    </div>
  </main>
  );
}
