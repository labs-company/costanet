import Carrusel from "@/components/Carrusel";
import Container from '@mui/material/Container'
import PageAbout from "./nosotros/page";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Carrusel />
        </section>
      <Container>

      <PageAbout/>

      </Container>
      </main>
    </>
  );
}
