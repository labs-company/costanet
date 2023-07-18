import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";
import wifiCostanet from "@/public/sectionTres/wifi-costanet.png";

export default function PageServices() {
  return (
    <>
      <section className="bg-letter">
        <Container className="flex flex-col justify-center">
          <div className="pt-5">
            <p className="text-4xl xl:text-2xl text-white font-medium ml-1">
              Hacemos clientes felices
            </p>
          </div>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Image src={clientHappy} alt="Hacemos clientes felices" />
            </Grid>
            <Grid xs={6}>
              <figure className="flex flex-col items-center justify-center">
                <Image src={wifiCostanet} alt="Servicio de wifi" width={500} />
                <figcaption className="text-3xl text-white">
                  Servicio wifi
                </figcaption>
              </figure>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
