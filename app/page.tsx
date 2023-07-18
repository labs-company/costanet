import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";
import PagePQRSF from "./pqrsf/page";
import backgroundus from "@/public/sectionDos/backgroundUs.png";
import { log } from "console";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Carrusel />
        </section>
        <section
          className="bg-section w-full bg-no-repeat bg-cover h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${backgroundus.src})`,
          }}
        >
          <PageAbout />
        </section>

        <section className="bg-letter">
          <PageServices />
        </section>

        <section>
          <PageSpeedTest />
        </section>

        <section>
          <PageContact />
        </section>

        <section>
          <PagePQRSF />
        </section>
      </main>
    </>
  );
}
