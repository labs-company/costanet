import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import TestDeVelocidad from "./test-de-velocidad/page";

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
          <TestDeVelocidad />
        </section>
      </main>
    </>
  );
}
