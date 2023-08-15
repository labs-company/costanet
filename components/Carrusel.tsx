"use client";
import carruseluno from "@/public/sectionOne/carruselUno.jpg";
import carruseldos from "@/public/sectionOne/carruselDos.jpg";
import carruseltres from "@/public/sectionOne/carruselTres.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SlidingInterval() {
  const [indexImage, setIndexImage] = useState(0);
  const images = [carruseldos, carruseltres, carruseluno];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImage((valueBack) => (valueBack + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, indexImage]);

  return (
    <section>
      <Image
        src={images[indexImage]}
        alt="Costanet | costa | colombia | fibra | optica |internet"
        className="object-contain w-screen"
      />
    </section>
  );
}
