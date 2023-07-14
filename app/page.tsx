import Carrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
// import second from '@/public/backgroundUs.png'
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
      </main>
    </>
  );
}
