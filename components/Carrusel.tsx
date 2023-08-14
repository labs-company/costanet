"use client";

import { Carousel } from "flowbite-react";
import carruseluno from "@/public/sectionOne/carruselUno.jpg";
import carruseldos from "@/public/sectionOne/carruselDos.jpg";
import carruseltres from "@/public/sectionOne/carruselTres.jpg";
import Image from "next/image";

export default function SlidingInterval() {
  return (
    <Carousel
      slideInterval={5000}
      className="h-[24vh] lg:h-[75vh] xl:h-[100vh]"
      indicators={false}
    >
      <Image
        alt="costanet | costanet internet rapido y seguro"
        src={carruseluno}
      />
      <Image alt="costanet | Hacemos clientes felices" src={carruseldos} />
      <Image
        alt="costanet | El mejor intenernet de fibra optica"
        src={carruseltres}
      />
    </Carousel>
  );
}
