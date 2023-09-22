import PageCarrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
// import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";

export default function Home() {
  return (
    <>
      <PageCarrusel />
      <PageAbout />
      <PageServices />
      <iframe
        src="https://openspeedtest.com/speedtest"
        title="Open speedtest"
        className="w-full h-[70vh]"
      ></iframe>
      <PageContact />
    </>
  );
}
