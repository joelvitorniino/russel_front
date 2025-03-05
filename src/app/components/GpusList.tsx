"use client";

import React from 'react';
import { Gpus } from '../interface/ProductInterface';

interface GpusListProps {
  gpus: Gpus[];
}

export default function GpusList({ gpus }: GpusListProps) {
  return (
    <section className="w-full bg-white px-4 py-10">
      {/* Cabeçalho: Título e Label */}
      <div className="flex flex-row items-center gap-2">
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
          Placas de Vídeo
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

      {/* Container principal */}
      <div className="max-w-[1320px] mx-auto mt-6">
        {/*
          - [grid-auto-rows:1fr] => cada linha tem altura de 1fr (fracionada igualmente)
          - items-stretch => cada item se estica até preencher a altura total da linha
        */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
          items-stretch
          [grid-auto-rows:1fr]
        ">
          {gpus.map((gpu) => (
            <div
              key={gpu.id}
              className="
                bg-[#FAFAFA]
                rounded
                flex
                flex-col
                h-full
              "
            >
              {/* Container de conteúdo (imagem, título, preços) */}
              <div className="p-4 flex-grow flex flex-col items-center gap-4">
                <img
                  src={gpu.image}
                  alt={gpu.name}
                  className="
                    w-full
                    h-[200px]
                    rounded
                    object-cover
                  "
                />

                <h3
                  className="
                    font-bold
                    text-[16px]
                    leading-[120%]
                    tracking-[-0.02em]
                    text-[#1A1A1A]
                    font-[DM_Sans]
                    text-center
                  "
                >
                  {gpu.name}
                </h3>

                <div className="flex flex-col items-center">
                  <span
                    className="
                      text-center
                      text-[14px]
                      leading-[120%]
                      tracking-[-0.02em]
                      text-[#1A1A1A]
                      font-[DM_Sans]
                      line-through
                    "
                  >
                    R$ {gpu.oldPrice}
                  </span>

                  <strong
                    className="
                      text-center
                      text-[18px]
                      leading-[120%]
                      tracking-[-0.02em]
                      text-[#1A1A1A]
                      font-bold
                      font-[DM_Sans]
                    "
                  >
                    R$ {gpu.price}
                  </strong>

                  <span
                    className="
                      text-center
                      text-[14px]
                      leading-[120%]
                      tracking-[-0.02em]
                      text-[#5438FF]
                      font-[DM_Sans]
                    "
                  >
                    com 20% de desconto no PIX
                  </span>
                </div>
              </div>

              {/* Rodapé do card (botão) */}
              <div className="p-4">
                <button
                  className="
                    w-full
                    h-[35px]
                    bg-[#5438FF]
                    text-white
                    font-bold
                    text-[16px]
                    leading-[120%]
                    font-[DM_Sans]
                    rounded
                  "
                >
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
