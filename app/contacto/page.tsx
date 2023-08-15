import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import horarios from "@/public/calendar.png";
import locacion from "@/public/location.png";
import email from "@/public/email.png";
import tlf from "@/public/logos/tlf.png";

export default function PageContacto() {
  return (
    <>
      <section className="bg-letter">
        <div style={{ padding: "3rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <h2 className="text-white font-bold text-5xl tracking-wide leading-tight">
              Aqui puedes contactarnos!
            </h2>
            <p className="">RESPONDEREMOS TODAS TUS DUDAS EN BREVE</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "6%",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="w-full flex justify-center p-2">
              <button className="rounded-xl border border-transparent bg-white px-8 py-3 text-center font-medium text-letter text-2xl md:w-80">
                PSE
              </button>
            </div>
            <div className="w-full flex justify-center p-2">
              <button className="rounded-xl border border-transparent bg-white px-8 py-3 text-center font-medium text-letter text-2xl md:w-80">
                PQRSF
              </button>
            </div>
          </div>
        </div>
        <Grid
          container
          sx={{ paddingTop: "1.5rem", color: "#fff", textAlign: "center" }}
        >
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: 220,
                borderRight: "1px solid",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image src={horarios} alt="horario" className="w-auto h-16" />
                  <h3 className="text-xl font-bold">Horarios</h3>
                </div>
                <Typography>
                  De lunes a viernes: de x:xx am a x pm. Sábados: de x:00 am a
                  x:00 pm.
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: 220,
                borderRight: "1px solid  ",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image
                    src={locacion}
                    alt="localizacion de costanet"
                    className="w-auto h-16"
                  />
                  <h3 className="text-xl font-bold">Visitanos</h3>
                </div>

                <Typography>
                  Carrera xx # xx | 23 x xx xx 404 | xx xx xx xx.
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: 220,
                borderRight: "1px solid",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image
                    src={email}
                    alt="correo de costanet"
                    className="w-auto h-16"
                  />
                  <h3 className="text-xl font-bold">Correo Electronico</h3>
                </div>
                <Typography>infocostanet@gmail.com</Typography>
              </Container>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: 220,
                borderRight: "1px solid",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image src={tlf} alt="horario" className="w-auto h-16" />
                  <h3 className="text-xl font-bold">Llamanos</h3>
                </div>
                <Typography>
                  Llámanos Comunícate con nosotros: +00055550500
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
