"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import clientHappy from "@/public/sectionTres/clientHappy.png";
import wifiCostanet from "@/public/sectionTres/wifi-costanet.png";

export default function ServiceClientComponet() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "0px",
        flexWrap: "nowrap",
        flexDirection: matches ? "row" : "column-reverse",
        alignItems: "center",
        placeContent: "center",
      }}
    >
      <Grid
        xs={5}
        sx={{
          padding: "0px",
          width: "auto",
          display: "flex",
          alignItems: "flex-end",
          placeContent: "center",
        }}
      >
        <Image
          style={{
            width: matches ? "100%" : "60%",
          }}
          src={clientHappy}
          alt="Hacemos clientes felices"
          className="flex items-end"
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
        <div className="pt-5 p-0 flex content-center h-auto">
          <p className="text-xl text-center ml-1 text-white font-semibold md:text-5xl xl:text-6xl sm:flex sm:items-center whitespace-pre-wrap">
            Con nuestro servicio de telecomunicacion hacemos felices a nuestros
            clientes
          </p>
        </div>

        <figure className="flex flex-col items-center justify-end">
          <Image src={wifiCostanet} alt="Servicio de wifi" width={200} />
        </figure>
      </Grid>
    </Grid>
  );
}
