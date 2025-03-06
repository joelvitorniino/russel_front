"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Componente de Banner Responsivo.
 * 
 * Exibe uma imagem de banner que se adapta ao tamanho da tela.
 */
export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    /**
     * Atualiza o estado `isMobile` com base no tamanho da janela.
     */
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Configuração inicial
    handleResize();
    
    // Adiciona um listener para redimensionamento
    window.addEventListener("resize", handleResize);
    
    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full">
      <div className={`relative w-full ${isMobile ? "h-[140px]" : "h-auto"}`}>
        <Image
          src="/images/banner.png"
          alt="Banner"
          fill={isMobile}
          width={isMobile ? undefined : 1366}
          height={isMobile ? undefined : 366}
          layout={!isMobile ? "responsive" : undefined}
          objectFit="cover"
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
