import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative w-full">
            <Image
        src="/images/banner.png"
        alt="Banner"
        width={1366}      
        height={366} 
        layout="responsive"
        objectFit="cover"  
        priority
      />
        </section>
    )
}