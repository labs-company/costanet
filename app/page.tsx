import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telecomunicacion colombia | Costanet | Internet | Servicios",
  description:
    "Costanet es una empresa de telecomunicacion que brinda servicios con fibra optica",
  keywords: [
    "internet",
    "fibra optica",
    "test de velocidad",
    "velocidad",
    "mide tu internet",
  ],
  authors: {
    name: "costanet",
    url: "costanet.vercel.app",
  },
};
export default function Home() {
  return (
    <>
      <Carrusel />

      <PageAbout />

      <PageServices />

      <PageSpeedTest />

      <PageContact />
    </>
  );
}
