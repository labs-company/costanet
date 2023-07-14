import Carrusel from "@/components/Carrusel";
import Container from "@mui/material/Container";
import PageAbout from "./nosotros/page";
import PageServices from "./servicios/page";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Carrusel />
        </section>
        <section className="bg-section">
          <Container className="pt-24">
            <PageAbout />
          </Container>
        </section>

        <section>
          <PageServices />
        </section>
      </main>
    </>
  );
}
