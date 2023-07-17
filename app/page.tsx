import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";
import PagePQRSF from "./pqrsf/page";

export default function Home() {
  return (
    <>
      <main>
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
          <PageContact />
        </section>

        <section>
          <PagePQRSF />
        </section>
      </main>
    </>
  );
}
