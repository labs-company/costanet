import PageCarrusel from "@/components/Carrusel";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";
import PageSpeedTest from "./test-de-velocidad/page";
import PageContact from "./contacto/page";

export default function Home() {
  return (
    <>
      <PageCarrusel />
      <PageAbout />
      <PageSpeedTest />
      <PageServices />
      <PageContact />
    </>
  );
}
