"use client";

import React, { useState, useRef } from 'react';

type CarouselProps = {
  children: React.ReactNode[];
};

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Estados para controlar o arraste (drag)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Quando o usuário pressiona o mouse
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    setIsDragging(true);
    // Posição X inicial do clique - posição do container
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    // Guardamos o scroll atual
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Quando o mouse sai da área do carrossel
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Quando o usuário solta o mouse
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Quando o usuário move o mouse enquanto está clicado
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();

    // Cálculo de quanto o mouse se moveu
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Fator de velocidade de arraste
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={carouselRef}
      className={`
        relative w-full
        flex gap-10
        overflow-x-auto
        scroll-smooth
        ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
      `}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
