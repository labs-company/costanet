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
      className="h-[24vh] sm:h-[31vh] lg:h-[63vh] xl:h-[100vh]"
      indicators={false}
    >
      <Image alt="costanet" src={carruseluno} />
      <Image alt="costanet" src={carruseldos} />
      <Image alt="costanet" src={carruseltres} />
    </Carousel>
  );
}
