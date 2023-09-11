import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import backgroundus from "@/public/sectionDos/backgroundUs.png";
import Popup from "@/components/Popup";

export default function PageAbout() {
  return (
    <>
      <section
        className="w-full bg-no-repeat bg-cover flex justify-center items-center md:bg-center bg-center xl:h-screen font-monset"
        style={{
          backgroundImage: `url(${backgroundus.src})`,
        }}
        id="nosotros"
      >
        <Container className="bg-bgshadow p-12 xl:shadow-shadowus">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <h2 className="text-4xl font-bold leading-10 xl:text-6xl sm:tracking-tight text-letter flex justify-center text-center">
                NOSOTROS
              </h2>
              <Typography
                mt={3}
                className="sm:text-3xl md:text-4xl text-letter font-extralight font-monset"
              >
                Costanet es una empresa de telecomunicaciones, creada en el año
                2018 para brindar un excelente servicio al cliente basado en el
                respeto, confiabilidad y compromiso. Buscamos, junto a nuestros
                colaboradores, prestar el mejor servicio de telecomunicaciones.{" "}
                <b className="font-bold">“HACEMOS CLIENTES FELICES”</b>
              </Typography>

              <Popup />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
