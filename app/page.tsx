import Carrusel from "@/components/Carrusel";
import Container from "@mui/material/Container";
import PageAbout from "./nosotros/page";

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
      </main>
    </>
  );
}
