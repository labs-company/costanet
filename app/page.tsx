import Carrusel from "@/components/Carrusel";
import Container from "@mui/material/Container";
import PageAbout from "./nosotros/page";
// import second from '@/public/backgroundUs.png'
export default function Home() {
  return (
    <>
      <main>
        <section>
          <Carrusel />
        </section>
        <section className="bg-section bg-[url('../public/backgroundUs.png')] w-full bg-no-repeat bg-cover h-screen">
          <Container className="pt-24">
            <PageAbout />
          </Container>
        </section>
      </main>
    </>
  );
}
