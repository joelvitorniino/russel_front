import React from "react";
import { Product } from "../interface/ProductInterface";

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
}

export default function ProductPopup({ product, onClose }: ProductPopupProps) {
  return (
    // Overlay que cobre a tela
    <div
      className="
        fixed
        inset-0
        bg-black/50
        z-50
        flex
        items-center
        justify-center
      "
    >
      {/* Container do popup */}
      <div
        className="
          relative
          bg-white
          flex
          flex-col
          md:flex-row
          items-center
          p-4
          md:p-8
          gap-4
          md:gap-8
          rounded
          w-[90%]
          max-w-[900px]
          h-auto
        "
      >
        {/* Imagem do produto */}
        <div
          className="
            w-full
            h-[200px]
            md:w-[300px]
            md:h-[250px]
            bg-white
            rounded
            flex-shrink-0
          "
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Conteúdo textual */}
        <div className="flex flex-col items-start gap-4 w-full">
          {/* Título do produto */}
          <h2
            className="
              font-dm-sans
              font-bold
              text-xl
              md:text-2xl
              leading-[120%]
              tracking-[-0.02em]
              text-[#1A1A1A]
            "
          >
            {product.name}
          </h2>

          {/* Linha de informações (estoque etc.) */}
          <div className="flex flex-row flex-wrap items-center gap-4">
            <span className="font-dm-sans text-base text-[#1A1A1A]">
              Vendido e entregue por Logitech Brasil
            </span>
            {/* Esse separador pode ficar oculto no mobile, se quiser */}
            <span className="font-dm-sans text-base text-[#1A1A1A] hidden md:block">
              |
            </span>
            <span className="font-dm-sans text-base font-bold text-[#5438FF]">
              Em estoque
            </span>
          </div>

          {/* Preço */}
          <div className="flex flex-col items-start">
            <span className="text-base text-[#1A1A1A] line-through">
              R$ {product.oldPrice}
            </span>
            <strong
              className="
                font-dm-sans
                text-3xl
                md:text-4xl
                font-bold
                text-[#5438FF]
                leading-none
              "
            >
              R$ {product.price}
            </strong>
            <span className="font-dm-sans text-base text-[#1A1A1A]">
              à vista no PIX
            </span>
          </div>

          {/* Botões (empilhados no mobile, lado a lado no desktop) */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 w-full">
            {/* Botão 1 */}
            <button
              className="
                px-4
                py-2
                bg-[#5438FF]
                text-white
                font-dm-sans
                font-bold
                text-base
                rounded
                w-full
                md:w-auto
              "
            >
              COMPRAR
            </button>

            {/* Botão 2 */}
            <button
              className="
                px-4
                py-2
                bg-[#FAFAFA]
                border
                border-[#5438FF]
                text-[#5438FF]
                font-dm-sans
                font-bold
                text-base
                rounded
                w-full
                md:w-auto
              "
            >
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>

        {/* Botão de fechar (X) */}
        <button
          onClick={onClose}
          className="
            absolute
            top-2
            right-2
            text-black
            font-bold
            text-xl
            cursor-pointer
          "
        >
          X
        </button>
      </div>
    </div>
  );
}
