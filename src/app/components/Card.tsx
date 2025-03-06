"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "../interface/ProductInterface";
import ProductPopup from "./ProductPopup";
import { Toaster } from "react-hot-toast";

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col bg-[#121212] rounded-md p-5 w-full max-w-[280px]">
      <Toaster position="top-right" />

      {/* Imagem do Produto */}
      <div className="relative w-full h-[160px] bg-white rounded flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain rounded"
          priority
        />
      </div>

      {/* Container de conteúdo flexível */}
      <div className="flex flex-col flex-grow justify-between mt-3"> {/* Novo container */}
        {/* Marca */}
        <div className="flex flex-row items-center">
          <Image
            src="/images/logitech-icon.svg"
            alt="Logitech Icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="ml-2 text-[#00B5EA] text-[16.5px] uppercase tracking-wide">
            Logitech
          </span>
        </div>

        {/* Nome do Produto */}
        <h2 className="text-white font-bold text-sm text-left mt-2 leading-tight line-clamp-2 min-h-[50px]">
          {product.name}
        </h2>

     {/* Preços */}
<div className="flex flex-col items-start mt-2">
  <span className="text-logitechWhite text-xs line-through mb-0.5">
    R$ {product.oldPrice}
  </span>
  <span className="text-[#00B5EA] font-bold text-2xl leading-none">
    R$ {product.price}
  </span>
</div>

        {/* Botão de compra */}
        <button
  onClick={() => setShowPopup(true)}
  className="bg-[#00B5EA] text-[#1A1A1A] font-bold uppercase lg:text-xl sm:text-sm py-2 px-4 w-full transition duration-300 ease-in-out hover:bg-[#0095C8] hover:shadow-lg mt-4"
>
  Comprar
</button>
      </div>

      {showPopup && (
        <ProductPopup product={product} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}