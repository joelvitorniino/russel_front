"use client";

import React, { useState } from 'react';
import { Gpus } from '../interface/ProductInterface';
import Image from 'next/image';
import ProductPopup from './ProductPopup';

interface GpusListProps {
  gpus: Gpus[];
}

interface GpuCardProps {
  gpu: Gpus;
}

// Componente para renderizar cada card
function GpuCard({ gpu }: GpuCardProps) {
    const [showPopup, setShowPopup] = useState(false);
    
      const handleOpenPopup = () => {
        setShowPopup(true);
      };
    
      const handleClosePopup = () => {
        setShowPopup(false);
      };
    

    return (
      <div className="bg-white rounded flex flex-col h-full">
        {/* Conteúdo principal */}
        <div className="flex-grow flex flex-col items-center">
          {/* Container da imagem responsiva */}
          <div className="relative w-full h-[120px] md:h-[200px]">
            <Image
              src={gpu.image}
              alt={gpu.name}
              fill
              className="object-contain"
            />
          </div>
  
          <h3 className="font-bold text-sm md:text-[16px] leading-[120%] tracking-[-0.02em] text-[#1A1A1A] text-left w-full mt-2">
            {gpu.name}
          </h3>
  
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
  
        {/* Botão - Ajustado para corresponder ao tamanho da imagem */}
        <div className="mt-3 md:mt-4">
          <button className="w-full py-2 bg-[#5438FF] text-white font-bold text-sm rounded hover:bg-[#4529e6] transition-colors" onClick={handleOpenPopup}>
            COMPRAR
          </button>

          {/* Popup (apenas se showPopup for true) */}
                {showPopup && (
                  <ProductPopup
                    product={gpu}
                    onClose={handleClosePopup}
                    isGpu={true}
                  />
                )}
        </div>
      </div>
    );
  }

export default function GpusList({ gpus }: GpusListProps) {
  return (
    <section className="w-full bg-white px-4 py-6">
      {/* Cabeçalho: Título e Label */}
      <div className="flex flex-row items-center gap-2 mb-4">
        <h2
          className="
            text-[24px]
            leading-[100%]
            font-medium
            tracking-[-0.02em]
            text-[#1A1A1A]
            font-[DM_Sans]
          "
        >
          Placas de vídeo
        </h2>

        <div className="bg-[rgba(84,56,255,0.3)] px-2 py-1 rounded">
          <span
            className="
              text-[#5438FF]
              text-[12px]
              font-bold
              leading-[100%]
              tracking-[-0.02em]
              font-[DM_Sans]
            "
          >
            HARDWARE
          </span>
        </div>
      </div>

      {/* MOBILE - dois cards visíveis com rolagem horizontal */}
      <div className="sm:hidden overflow-x-auto -mx-4 px-4 pb-2">
        <div className="flex gap-3" style={{ width: "max-content" }}>
          {gpus.map((gpu) => (
            <div 
              key={gpu.id} 
              className="flex-shrink-0" 
              style={{ width: "calc(50vw - 14px)" }}
            >
              <GpuCard gpu={gpu} />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP (grid) - aparece em telas >= 640px */}
      <div className="hidden sm:block max-w-[1320px] mx-auto">
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-6
          "
        >
          {gpus.map((gpu) => (
            <div key={gpu.id}>
              <GpuCard gpu={gpu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}