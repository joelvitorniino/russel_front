"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Initial check
      setIsMobile(window.innerWidth < 768);
      
      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      window.addEventListener("resize", handleResize);
      
      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
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
          layout={isMobile ? undefined : "responsive"}
          objectFit="cover"
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}