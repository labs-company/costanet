import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";
import wifiCostanet from "@/public/sectionTres/wifi-costanet.png";

export default function PageServices() {
  return (
    <>
      <Container>
        <h2>Hacemos clientes felices</h2>

        <Grid container spacing={2}>
          <Grid xs={6}>
            <Image src={clientHappy} alt="Hacemos clientes felices" />
          </Grid>
          <Grid xs={6}>
            <Image src={wifiCostanet} alt="Servicio de wifi" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
