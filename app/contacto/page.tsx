import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import horarios from "@/public/clock.svg";
import locacion from "@/public/location.png";
import email from "@/public/email.png";
import tlf from "@/public/logos/tlf.png";
import Link from "next/link";

export default function PageContacto() {
  return (
    <>
      <section className="bg-letter" id="contacto">
        <article style={{ padding: "3rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <h2 className="text-white font-bold text-5xl tracking-wide leading-tight text-center">
              Aqui puedes contactarnos!
            </h2>
            <h5 className="text-center">
              RESPONDEREMOS TODAS TUS DUDAS EN BREVE
            </h5>
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
              <Link
                href="/pse"
                className="rounded-xl border border-transparent bg-white px-8 py-3 text-center font-medium text-letter text-2xl md:w-80"
              >
                PSE
              </Link>
            </div>
            <div className="w-full flex justify-center p-2">
              <Link
                href="/pqrs"
                className="rounded-xl border border-transparent bg-white px-8 py-3 text-center font-medium text-letter text-2xl md:w-80"
              >
                PQR
              </Link>
            </div>
          </div>
        </article>
        <Grid container sx={{ paddingTop: "1.5rem", color: "#fff" }}>
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: "100%",
                borderRight: "1px solid",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image src={horarios} alt="horario" className="w-auto h-10" />
                  <h3 className="text-xl font-bold">Horarios</h3>
                </div>
                <ul>
                  <li className="uppercase">Lunes a viernes:</li>
                  <p> 8 am-12 pm. y 2 pm-5:30pm</p>
                  <br />
                  <li className="uppercase"> Sábados: </li>
                  <p>8 am-2 pm.</p>
                </ul>
              </Container>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: "max-content",
                borderRight: "1px solid  ",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image
                    src={locacion}
                    alt="localizacion de costanet"
                    className="w-auto h-10"
                  />
                  <h3 className="text-xl font-bold">Visitanos</h3>
                </div>
                <ul>
                  <li className="font-light pt-2">
                    <strong>SANTA ANA:</strong> Cra 8 #9-04 local 2 barrio la
                    concepción{" "}
                  </li>
                  <li className="font-light pt-2">
                    <strong>CICUCO:</strong> Calle 8 #5-48 AV. los Cañahuates
                  </li>
                  <li className="font-light pt-2">
                    <strong>TALAIGUA:</strong> Cra 3 #14A-65 barrio centro
                  </li>
                </ul>
              </Container>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: "100%",
                borderRight: "1px solid",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image
                    src={email}
                    alt="correo de costanet"
                    className="w-auto h-10"
                  />
                  <h3 className="text-xl font-bold text-center">
                    Correo <br /> Electronico
                  </h3>
                </div>
                <Typography className="sm:text-center">
                  juridicocostanet@gmail.com
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                height: "100%",
                borderRight: "1px solid",
                padding: "1rem",
              }}
            >
              <Container>
                <div className="flex justify-center gap-10 items-center pb-10">
                  <Image src={tlf} alt="horario" className="w-auto h-10" />
                  <h3 className="text-xl font-bold">Llamanos</h3>
                </div>
                <ul>
                  <li className="font-light pt-2">
                    <strong>SANTA ANA:</strong> 3205133639
                  </li>
                  <li className="font-light pt-2">
                    <strong>CICUCO:</strong> 3160269611
                  </li>
                  <li className="font-light pt-2">
                    <strong>TALAIGUA:</strong> 3215748550
                  </li>
                </ul>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
