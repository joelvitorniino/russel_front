import Image from "next/image";
import { Product } from "../interface/ProductInterface";

interface CardProps {
  product: Product;
};

export default function Card({ product }: CardProps) {
  return (
    <div
      className="flex flex-col items-start p-6 gap-4 w-[310px] h-[490px] rounded-lg"
      style={{
        background: "linear-gradient(159.6deg, #020202 1.43%, #00161D 100%)"
      }}
    >
      {/* Imagem do produto */}
      {/* Removemos 'mb-4' e confiamos no 'gap-4' do contêiner */}
      <div className="relative w-[262px] h-[200px] rounded-[4px] bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "contain", borderRadius: "4px" }}
        />
      </div>

      {/* Seção da marca (Logo e texto) */}
      {/* Usamos 'items-center' para alinhar logo e texto na mesma linha */}
      <div className="flex flex-row items-center gap-2 w-[262px] h-[24px]">
        <Image
          src="/images/logitech-icon.svg"
          alt="Logitech Icon"
          width={26}
          height={24}
        />
        <span
          className="font-normal text-[18px] leading-[22px]"
          style={{ letterSpacing: "-0.02em", color: "#00B5EA" }}
        >
          LOGITECH
        </span>
      </div>

      {/* Informações do Produto */}
      <div className="flex flex-col items-start gap-4 w-[262px]">
        <h2
          className="font-bold text-[16px] leading-[19px]"
          style={{ letterSpacing: "-0.02em", color: "#EFEFEF" }}
        >
          {product.name}
        </h2>

        {/* Preços */}
        <div className="flex flex-col items-start">
          <span
            className="font-normal text-[16px] leading-[19px] line-through"
            style={{ letterSpacing: "-0.02em", color: "#EFEFEF" }}
          >
            R$ {product.oldPrice}
          </span>
          <span
            className="font-bold text-[32px] leading-[38px]"
            style={{ letterSpacing: "-0.02em", color: "#00B5EA" }}
          >
            R$ {product.price}
          </span>
        </div>
      </div>

      {/* Botão de compra */}
      <button
        className="flex justify-center items-center p-2 gap-2 w-[262px] h-[40px] rounded"
        style={{ backgroundColor: "#00B5EA" }}
      >
        <span
          className="font-bold uppercase text-[20px] leading-[24px]"
          style={{ letterSpacing: "-0.02em", color: "#1A1A1A" }}
        >
          Comprar
        </span>
      </button>
    </div>
  );
}
