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
        <section>
          <Carrusel />
        </section>
        <section className="bg-section bg-[url('../public/backgroundUs.png')] w-full bg-no-repeat bg-cover h-screen flex justify-center items-center">
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
            <h2 className="text-5xl text-letter">CONTACTO</h2>
          </div>
          <PageContact />
        </section>
      </main>
    </>
  );
}
