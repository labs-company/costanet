import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";
import backgroundus from "@/public/sectionDos/backgroundUs.png";
import { josefin_sans } from "./layout";

export default function Home() {
  return (
    <>
      <main className={josefin_sans.className}>
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
          <div className="p-8">
            <h2 className="text-5xl text-letter font-bold">CONTACTO</h2>
          </div>
          <PageContact />
        </section>
      </main>
    </>
  );
}
