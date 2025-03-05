import Banner from "./components/Banner";
import GpusList from "./components/GpusList";
import ProductList from "./components/ProductList";
import { gpus } from "./data/gpus";
import { products } from "./data/products";

export default function Home() {
  return (
    <>
      {/* Banner em full width, fora do container */}
      <Banner />

      {/* Conteúdo centralizado */}
      <main className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-[32px] py-[40px]">
          <ProductList products={products} />
        </div>

        {/* Seção de produtos */}
        <div>
          <GpusList gpus={gpus} />
        </div>
      </main>
    </>
  );
}
