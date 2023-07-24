"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";
import wifiCostanet from "@/public/sectionTres/wifi-costanet.png";

export default function ServiceClientComponet() {
  const matches = useMediaQuery("(min-width:600px)");
  console.log(matches);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "0px",
        height: "100vh",
        flexWrap: "nowrap",
        flexDirection: matches ? "row" : "column-reverse",
      }}
    >
      <Grid
        xs={5}
        sx={{
          padding: "0px",
          width: "auto",
          //   height: "100vh",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Image
          src={clientHappy}
          alt="Hacemos clientes felices"
          className="w-full flex items-end xl:w-full"
        />
      </Grid>
      <Grid
        xs={7}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          //   width: matches ? "max-content" : "auto",
        }}
      >
        <div className="pt-5 p-0 flex content-center sm:h-screen">
          <p className="text-4xl text-center ml-1 text-white font-medium md:text-6xl xl:text-6xl sm:flex sm:items-center">
            Con nuestro servicio WIFI hacemos felices a nuestros clientes
          </p>
        </div>

        <figure className="flex flex-col items-center justify-end">
          <Image src={wifiCostanet} alt="Servicio de wifi" width={200} />
        </figure>
      </Grid>
    </Grid>
  );
}
