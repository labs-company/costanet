"use client";

import { Carousel } from "flowbite-react";
import logoCostanet from "@/public/logo2.png";
import Image from "next/image";

export default function SlidingInterval() {
  return (
    <Carousel slideInterval={5000} className="h-screen rounded-none">
      <Image alt="costanet" src={logoCostanet} />
      <img
        alt="costanet"
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="costanet"
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="costanet"
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="costanet"
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  );
}
