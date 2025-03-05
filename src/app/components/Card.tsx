import Image from "next/image";
import { Product } from "../interface/ProductInterface";

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  return (
    <div
      className="
        h-full
        w-full
        flex
        flex-col
        justify-between
        items-center
        bg-[#121212]
        rounded-md
        p-4
      "
    >
      {/* Imagem do Produto */}
      <div className="relative w-full h-[180px] bg-white rounded">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "contain", borderRadius: "4px" }}
        />
      </div>

      {/* Marca */}
      <div className="flex flex-row items-center mt-4 mb-1">
        <Image
          src="/images/logitech-icon.svg"
          alt="Logitech Icon"
          width={24}
          height={24}
        />
        <span className="ml-2 text-[#00B5EA] font-semibold text-sm uppercase">
          Logitech
        </span>
      </div>

      {/* Nome do Produto */}
      <h2 className="text-white font-bold text-sm text-center px-2">
        {product.name}
      </h2>

      {/* Preços */}
      <div className="flex flex-col items-center mt-2">
        <span className="text-gray-400 text-sm line-through">
          R$ {product.oldPrice}
        </span>
        <span className="text-[#00B5EA] font-bold text-xl">
          R$ {product.price}
        </span>
      </div>

      {/* Botão de compra (fica “grudado” embaixo graças ao justify-between) */}
      <button
        className="
          mt-4
          bg-[#00B5EA]
          text-[#1A1A1A]
          font-bold
          uppercase
          text-md
          py-2
          px-4
          w-full
          rounded
        "
      >
        Comprar
      </button>
    </div>
  );
}
