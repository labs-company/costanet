import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import horarios from "@/public/horarios.png";
import locacion from "@/public/locacion.png";
import email from "@/public/mail.png";
import tlf from "@/public/telephone.png";

export default function PageContacto() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#274A99", padding: "5rem" }}>
        <Grid
          xs={10}
          sx={{
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
        </Grid>
        <Grid
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="w-full flex flex-col justify-center">
            <button className="rounded-xl border border-transparent bg-white px-8 py-3 text-center font-medium text-letter text-2xl">
              PES
            </button>
          </div>
          <div className="w-full flex flex-col justify-center">
            <button className="rounded-xl border border-transparent bg-white px-8 py-3 text-center font-medium text-letter text-2xl">
              PQRSF
            </button>
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ paddingTop: "1.5rem" }}>
        <Grid xs={3}>
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
        <Grid xs={3}>
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
        <Grid xs={3}>
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
        <Grid xs={3}>
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
    </>
  );
}
