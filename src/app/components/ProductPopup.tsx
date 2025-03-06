"use client";

import React from "react";
import { Product } from "../interface/ProductInterface";
import toast from "react-hot-toast";

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
  isGpu?: boolean;
}

/**
 * Componente de popup para exibir detalhes do produto.
 */
const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose, isGpu }) => {
  const handlePurchase = () => {
    toast.success(`Compra de ${product.name} realizada com sucesso!`);
    onClose();
  };

  const handleCheckout = () => {
    toast.success("Compra adicionada ao carrinho com sucesso.")
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="relative bg-white flex flex-col md:flex-row items-center p-4 md:p-8 gap-4 md:gap-8 rounded w-[90%] max-w-[900px]">
        {/* Imagem do produto */}
        <div
          className="w-full h-[200px] md:w-[300px] md:h-[250px] bg-white rounded flex-shrink-0"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Conteúdo textual */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2 className="font-dm-sans font-bold text-xl md:text-2xl text-[#1A1A1A]">{product.name}</h2>

          <div className="flex flex-row flex-wrap items-center gap-4">
            <span className="font-dm-sans text-base text-[#1A1A1A]">
              Vendido e entregue por {isGpu ? "Pichau" : <span className="text-logitech">Logitech Brasil</span>}
            </span>
            <span className="font-dm-sans text-base font-bold text-[#5438FF]">Em estoque</span>
          </div>

          {/* Preço */}
          <div className="flex flex-col items-start">
            <span className="text-base text-[#1A1A1A] line-through">R$ {product.oldPrice}</span>
            <strong className="font-dm-sans text-3xl md:text-4xl font-bold text-[#5438FF] leading-none">
              R$ {product.price}
            </strong>
            <span className="font-dm-sans text-base text-[#1A1A1A]">à vista no PIX</span>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 w-full">
            <button
              onClick={handlePurchase}
              className="px-4 py-2 bg-[#5438FF] text-white uppercase font-dm-sans font-bold text-base rounded w-full md:w-auto transition duration-300 ease-in-out hover:bg-[#4325e0] hover:shadow-lg hover:scale-105"
            >
              Comprar
            </button>
            <button
              className="px-4 py-2 bg-[#FAFAFA] border border-[#5438FF] text-[#5438FF] uppercase font-dm-sans font-bold text-base rounded w-full md:w-auto transition duration-300 ease-in-out hover:bg-[#E0E0E0] hover:border-[#4325e0] hover:scale-105"
              onClick={handleCheckout}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>

        {/* Botão de fechar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-black font-bold text-xl cursor-pointer">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ProductPopup;
