"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "../interface/ProductInterface";
import ProductPopup from "./ProductPopup";
import { Toaster } from "react-hot-toast";

interface CardProps {
  product: Product;
}

/**
 * Componente de Card para exibir informações do produto.
 */
export default function Card({ product }: CardProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="h-full w-full flex flex-col justify-between items-center bg-[#121212] rounded-md p-2 md:p-4 relative">
      {/* Toaster para exibir notificações */}
      <Toaster position="top-right" />

      {/* Imagem do Produto */}
      <div className="relative w-full h-[120px] md:h-[180px] bg-white rounded">
        <Image src={product.image} alt={product.name} fill className="object-contain rounded" />
      </div>

      {/* Marca */}
      <div className="flex flex-row items-center mt-2 md:mt-4 mb-1">
        <Image src="/images/logitech-icon.svg" alt="Logitech Icon" width={20} height={20} className="md:w-6 md:h-6" />
        <span className="ml-2 text-[#00B5EA] font-semibold text-xs md:text-sm uppercase">Logitech</span>
      </div>

      {/* Nome do Produto */}
      <h2 className="text-white font-bold text-xs md:text-sm text-center px-1 md:px-2">{product.name}</h2>

      {/* Preços */}
      <div className="flex flex-col items-center mt-1 md:mt-2">
        <span className="text-gray-400 text-xs md:text-sm line-through">R$ {product.oldPrice}</span>
        <span className="text-[#00B5EA] font-bold text-lg md:text-xl">R$ {product.price}</span>
      </div>

      {/* Botão de compra */}
      <button
        onClick={() => setShowPopup(true)}
        className="mt-2 md:mt-4 bg-[#00B5EA] text-[#1A1A1A] font-bold uppercase text-sm md:text-md py-2 px-4 w-full transition duration-500 ease-in-out rounded hover:bg-[#0095C8] hover:shadow-lg"
      >
        Comprar
      </button>

      {/* Popup de compra */}
      {showPopup && <ProductPopup product={product} onClose={() => setShowPopup(false)} />}
    </div>
  );
}
