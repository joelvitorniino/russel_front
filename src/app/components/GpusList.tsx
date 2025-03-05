"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Gpus } from "../interface/ProductInterface";
import ProductPopup from "./ProductPopup";
import { GpuCard } from "./GpuCard";

/**
 * Props para a lista de GPUs
 */
interface GpusListProps {
  gpus: Gpus[]; // Array de objetos do tipo Gpus
}


/**
 * Componente que exibe uma lista de GPUs em diferentes layouts (grid e rolagem horizontal)
 */
const GpusList: React.FC<GpusListProps> = ({ gpus }) => {
  return (
    <section className="w-full bg-white px-4 py-6">
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[24px] font-medium text-[#1A1A1A] font-[DM_Sans]">Placas de vídeo</h2>
        <div className="bg-[rgba(84,56,255,0.3)] px-2 py-1 rounded">
          <span className="text-[#5438FF] text-[12px] font-bold font-[DM_Sans]">HARDWARE</span>
        </div>
      </div>
      {/* Layout para dispositivos móveis - Rolagem Horizontal */}
      <div className="sm:hidden overflow-x-auto -mx-4 px-4 pb-2">
        <div className="flex gap-3" style={{ width: "max-content" }}>
          {gpus.map((gpu) => (
            <div key={gpu.id} className="flex-shrink-0" style={{ width: "calc(50vw - 14px)" }}>
              <GpuCard gpu={gpu} />
            </div>
          ))}
        </div>
      </div>
      {/* Layout para desktop - Grid Responsivo */}
      <div className="hidden sm:block max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {gpus.map((gpu) => (
            <GpuCard key={gpu.id} gpu={gpu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GpusList;
