import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";
import { josefin_sans } from "./layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Costanet | Telecomunicacion colombia",
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
      <main className={josefin_sans.className}>
        <Carrusel />

        <PageAbout />

        <PageServices />

        <PageSpeedTest />

        <PageContact />
      </main>
    </>
  );
}
