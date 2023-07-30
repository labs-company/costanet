import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import horarios from "@/public/redes/clock-seven-svgrepo-com.svg";
import locacion from "@/public/redes/location-svgrepo-com.svg";
import email from "@/public/redes/email.svg";
import tlf from "@/public/redes/telephone-signal-svgrepo-com.svg";

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
                PES
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
                  <Image src={horarios} alt="horario" />
                  <h3 className="text-xl font-bold">Horarios</h3>
                </div>
                <Typography>
                  De lunes a viernes: de 8:00 am a 6 pm. Sábados: de 9:00 am a
                  1:00 pm.
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
                  <Image src={locacion} alt="localizacion de costanet" />
                  <h3 className="text-xl font-bold">Visitanos</h3>
                </div>

                <Typography>
                  Carrera 42 # 22A | 23 Edificio BTU Oficina 404 | Barrio Quinta
                  paredes Bogotá-Colombia.
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
                  <Image src={email} alt="correo de costanet" />
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
                  <Image src={tlf} alt="horario" />
                  <h3 className="text-xl font-bold">Llamanos</h3>
                </div>
                <Typography>
                  Llámanos Comunícate con nosotros: +57 3005235531
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
