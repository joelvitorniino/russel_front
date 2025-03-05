import { Product } from "../interface/ProductInterface";
import Card from "./Card";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        bg-[#0A0A0A]
        px-4
        py-8
        items-stretch
      "
    >
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
