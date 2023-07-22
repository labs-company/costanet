import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";
import wifiCostanet from "@/public/sectionTres/wifi-costanet.png";

export default function PageServices() {
  return (
    <>
      <section className="bg-letter h-screen flex flex-col justify-stretch">
        <Container className="flex flex-col justify-center h-screen">
          <Grid
            container
            spacing={2}
            sx={{
              margin: "0px",
            }}
          >
            <Grid
              xs={5}
              sx={{
                padding: "0px",
                width: "auto",
              }}
            >
              <Image
                src={clientHappy}
                alt="Hacemos clientes felices"
                className="w-full flex items-end"
              />
            </Grid>
            <Grid
              xs={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div className="pt-5 p-0 flex content-center">
                <p className="text-4xl xl:text-6xl text-center text-white font-medium ml-1">
                  Con nuestro servicio WIFI hacemos felices a nuestros clientes
                </p>
              </div>

              <figure className="flex flex-col items-center justify-end">
                <Image src={wifiCostanet} alt="Servicio de wifi" width={200} />
              </figure>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
