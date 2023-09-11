"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import carruseluno from "@/public/sectionOne/carruselUno.jpg";
import carruseldos from "@/public/sectionOne/carruselDos.jpg";
import carruseltres from "@/public/sectionOne/carruselTres.jpg";

export default function Carrusel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          waitForTransition: true,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        <SwiperSlide>
          <Image
            src={carruseluno}
            alt="costanet"
            className="w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={carruseldos}
            alt="costanet"
            className="w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={carruseltres}
            alt="costanet"
            className="w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
