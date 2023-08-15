import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";

import { josefin_sans } from "./layout";

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
