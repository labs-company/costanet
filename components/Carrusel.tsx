"use client";

import { Carousel } from "flowbite-react";
import carruseluno from "@/public/sectionOne/carruselUno.jpg";
import carruseldos from "@/public/sectionOne/carruselDos.jpg";
import carruseltres from "@/public/sectionOne/carruselTres.jpg";
import Image from "next/image";

export default function SlidingInterval() {
  return (
    <Carousel slideInterval={5000} className="h-screen rounded-none">
      <Image alt="costanet" src={carruseluno} className="rounded-none" />
      <Image alt="costanet" src={carruseldos} className="rounded-none" />
      <Image alt="costanet" src={carruseltres} className="rounded-none" />
    </Carousel>
  );
}
