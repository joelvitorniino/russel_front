import { useState } from "react";
import { Gpus } from "../interface/ProductInterface";
import Image from "next/image";
import ProductPopup from "./ProductPopup";

/**
 * Props para o card de uma GPU específica
 */

interface GpuCardProps {
  gpu: Gpus; // Objeto contendo os dados de uma GPU
}

/**
 * Componente que exibe um card individual de uma GPU
 */
export const GpuCard: React.FC<GpuCardProps> = ({ gpu }) => {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do popup

  return (
    <div className="bg-white rounded flex flex-col h-full">
      {/* Seção principal do card */}
      <div className="flex-grow flex flex-col items-center">
        {/* Imagem da GPU */}
        <div className="relative w-full h-[120px] md:h-[200px]">
          <Image
            src={gpu.image}
            alt={gpu.name}
            fill
            className="object-contain"
          />
        </div>
        {/* Nome do Produto */}
        <h3 className="font-bold text-sm md:text-[16px] text-[#1A1A1A] w-full mt-2">
          {gpu.name}
        </h3>
        {/* Informações de Preço */}
        <div className="flex flex-col items-start w-full mt-1 md:mt-2">
          <span className="text-xs md:text-[14px] text-gray-500 line-through">
            R$ {gpu.oldPrice}
          </span>
          <strong className="text-[16px] md:text-[18px] text-[#1A1A1A] font-bold">
            R$ {gpu.price}
          </strong>
          <span className="text-xs md:text-[14px] text-[#5438FF]">
            com 20% de desconto no PIX
          </span>
        </div>
      </div>
      {/* Botão de Compra */}
      <div className="mt-3 md:mt-4">
        <button
          className="w-full py-2 bg-[#5438FF] text-white font-bold text-sm rounded hover:bg-[#4529e6] transition-colors"
          onClick={() => setShowPopup(true)}
        >
          COMPRAR
        </button>
      </div>
      {/* Exibição do Popup */}
      {showPopup && (
        <ProductPopup product={gpu} onClose={() => setShowPopup(false)} isGpu />
      )}
    </div>
  );
};
