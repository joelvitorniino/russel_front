import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import { products } from "./data/products";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4">
    {/* Seção de promoção */}
    <div className="flex flex-col gap-[32px] py-[40px]">
      <Banner />
      <ProductList products={products} />
    </div>
  </main>
  );
}
