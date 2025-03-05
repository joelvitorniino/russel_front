import { Product } from "../interface/ProductInterface";
import Card from "./Card";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    // Mantemos o flex-row e o gap de 40px, com largura total de 1360px e altura de 490px
    <div className="flex flex-row gap-[40px] w-[1360px] h-[490px]">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
