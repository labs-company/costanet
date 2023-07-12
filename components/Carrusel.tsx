"use client";

import { Carousel } from "flowbite-react";
import logoCostanet from "@/public/logo2.png";
import preimgcrr from "@/public/pre1.png";
import segimgcrr from "@/public/pre2.png";
import terimgcrr from "@/public/pre3.png";
import cuaimgcrr from "@/public/pre4.png";
import Image from "next/image";

export default function SlidingInterval() {
  return (
    <Carousel slideInterval={5000} className="h-screen rounded-none">
      <Image alt="costanet" src={logoCostanet} className="rounded-none" />
      <Image alt="costanet" src={preimgcrr} className="rounded-none"/>
      <Image alt="costanet" src={segimgcrr} className="rounded-none" />
      <Image alt="costanet" src={terimgcrr} className="rounded-none"/>
      <Image alt="costanet" src={cuaimgcrr} className="rounded-none"/>    
    </Carousel>
  );
}
