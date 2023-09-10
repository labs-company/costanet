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
      <section className="bg-letter font-monset" id="contacto">
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
            <h5 className="text-center text-white p-4">
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
            <div className="w-full flex justify-center p-2 m-4">
              <Link
                href="/pse"
                className="flex-row justify-center bg-white text-letter cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-credit-card"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                  <path d="M3 10l18 0"></path>
                  <path d="M7 15l.01 0"></path>
                  <path d="M11 15l2 0"></path>
                </svg>
                PSE
              </Link>
            </div>
            <div className="w-full flex justify-center p-2">
              <Link
                href="/pqrs"
                className="flex-row justify-center bg-white text-letter cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-message"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 9h8"></path>
                  <path d="M8 13h6"></path>
                  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                </svg>
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
                  {/* <Image src={horarios} alt="horario" className="w-auto h-10" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-alarm"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M12 10l0 3l2 0"></path>
                    <path d="M7 4l-2.75 2"></path>
                    <path d="M17 4l2.75 2"></path>
                  </svg>
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
                  {/* <Image
                    src={locacion}
                    alt="localizacion de costanet"
                    className="w-auto h-10"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
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
                  {/* <Image
                    src={email}
                    alt="correo de costanet"
                    className="w-auto h-10"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
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
                  {/* <Image src={tlf} alt="horario" className="w-auto h-10" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
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
